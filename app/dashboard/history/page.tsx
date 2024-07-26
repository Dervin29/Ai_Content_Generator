"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { eq } from "drizzle-orm";
import { db } from "../content/_components/utils/db";
import { AiOutput } from "../content/_components/utils/schema";

interface AiOutputType {
  id: number;
  output: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createAt: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<AiOutputType[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const email = user?.primaryEmailAddress?.emailAddress || "unknown";
        const result = await db
          .select()
          .from(AiOutput)
          .where(eq(AiOutput.createdBy, email));
        setHistory(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    if (user) {
      fetchHistory();
    }
  }, [user]);

  // Function to format the output and aiResponse data
  const formatText = (text: string) => {
    return text.replace(/\\n/g, '\n');
  };

  // Function to handle delete
  const handleDelete = async (id: number) => {
    try {
      const result = await db.delete(AiOutput).where(eq(AiOutput.id, id)).returning();
      if (result) {
        setHistory((prevHistory) => prevHistory.filter((entry) => entry.id !== id));
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  // Function to handle copy
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      alert("Failed to copy to clipboard");
    }
  };

  return (
    <div className="p-5 h-auto">
      <div className="max-w-screen-lg h-auto mx-auto px-5 md:px-10 py-3 md:py-5 my-2 bg-[#050d2b]  rounded-md">
        <h1 className="text-xl font-bold text-white">AI Content History</h1>
        <div className="mt-5 overflow-x-scroll no-scrollbar rounded-md">
          {history.length > 0 ? (
            <table className="min-w-full bg-white   ">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Template Slug</th>
                  <th className="py-2 px-4 border-b">Created At</th>
                  <th className="py-2 px-4 border-b">Output</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {history.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-2 px-4 border-b">{entry.templateSlug}</td>
                    <td className="py-2 px-4 border-b">{moment(entry.createAt, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm:ss")}</td>
                    <td className="py-2 px-4 border-b whitespace-pre-wrap line-clamp-3">{formatText(entry.output)}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex space-x-2">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                          onClick={() => handleDelete(entry.id)}
                        >
                          Delete
                        </button>
                        <span className="text-slate-300 h-full">|</span>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                          onClick={() => handleCopy(entry.output)}
                        >
                          Copy
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-white">No history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
