"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplates?: TEMPLATE;
  userFormData: any;
  loading?: boolean;
 
}

function FormSection({ selectedTemplates, userFormData ,loading}: PROPS) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormData(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {selectedTemplates?.icon && (
        <Image src={selectedTemplates.icon} alt="icon" width={50} height={50} />
      )}
      {selectedTemplates?.name && (
        <h2 className="font-bold text-2xl mb-2 text-primary">
          {selectedTemplates.name}
        </h2>
      )}
      {selectedTemplates?.desc && (
        <p className="text-gray-500 line-clamp-3">{selectedTemplates.desc}</p>
      )}

      {/* Forms */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplates?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label htmlFor={item.name} className="font-bold">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                value={formData[item.name] || ""}
                onChange={handleInput}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                value={formData[item.name] || ""}
                onChange={handleInput}
              />
            ) : null}
          </div>
        ))}
        <Button className="w-full py-2" type="submit"
          disabled={loading}>
          {loading ? <Loader2Icon className="w-4 h-4 animate-spin" /> : "Generate Content"}
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
