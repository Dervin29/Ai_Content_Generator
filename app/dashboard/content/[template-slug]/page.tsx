"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "../_components/utils/AiModel";
import { db } from "../_components/utils/db";
import { AiOutput } from "../_components/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const { user } = useUser();

  const selectedTemplates: TEMPLATE | undefined = Templates?.find(
    (template) => template.slug === props.params["template-slug"]
  );

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplates?.aiPrompt;
    const FinalAiPrompt = JSON.stringify({ formData, selectedPrompt });

    try {
      const result = await chatSession.sendMessage(FinalAiPrompt);
      const responseText = await result.response.text();
      setOutput(responseText);
      await SaveContent(formData, selectedTemplates?.slug ?? "defaultSlug", responseText);
    } catch (error) {
      console.error("Error generating AI content:", error);
      setOutput("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const SaveContent = async (formData: any, slug: string, output: string) => {
    const result = await db.insert(AiOutput).values({
      output: output,
      aiResponse: output,
      templateSlug: slug,
      createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
      createAt: moment().format("DD/MM/YYYY HH:mm:ss"),
    });

    console.log(result);
  };

  return (
    <div className="p-5 h-auto ">
      <div className="max-w-screen-lg h-auto mx-auto px-3 md:px-8 py-3 md:py-5 my-2 bg-[#050d2b] rounded-md">
        <Link href="/dashboard">
          <Button className="bg-orange-500 hover:bg-orange-600 ml-5">
            <ArrowLeft /> Back
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <FormSection
            selectedTemplates={selectedTemplates}
            userFormData={(e: any) => GenerateAIContent(e)}
            loading={loading}
          />

          <div className="col-span-1">
            <OutputSection output={output} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
