"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MultiUploader } from "../MultiUploader";
import { ImagePreview } from "../ImagePreview";
import { type InputData, InputForm } from "../Forms/InputForm";
import { Separator } from "../ui/separator";

export default function AddTree() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [enableQuery, setEnableQuery] = useState<boolean>(false);

  const system = `You are a Arborist and Forestry expert, specializing in dendrology, the study of trees. 
You conduct research and fieldwork across various ecosystems worldwide, gaining extensive knowledge 
and experience in all aspects of trees and forest management.`;

  const prompt = `Investigate and provide a detailed report on the health of the trees in the forest. You must only return the json values and nothing else. Only fill in the information listed below:
{
  "tree_species": "{{ tree_species }}",
  "tree_height": "{{ tree_height }}",
  "tree_diameter": "{{ tree_diameter }}",
  "tree_health": "{{ tree_health }}"
  "initial_notes": "{{ initial_notes }}",
  "tree_age": "{{ tree_age }}",
  "tree_coordinates": "{{ tree_coordinates }}",
  "illegal_activities": "{{ illegal_activities }}",
  "future_plans": "{{ future_plans }}"
}`;

  const { data, isFetching, isSuccess } = useQuery<InputData>({
    queryKey: ["completion"],
    queryFn: async () => {
      const response = await fetch("/api/completion", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt.trim(),
          system: system.trim(),
          images: imageUrls.map((url) => {
            return {
              type: "image_url",
              image_url: {
                url,
              },
            };
          }),
        }),
      });

      return response.json();
    },
    enabled: enableQuery,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (isSuccess && imageUrls.length > 0) {
      setEnableQuery(false);
    }
  }, [data, imageUrls]);

  const handleSuccessfulUpload = (urls: string[]) => {
    setImageUrls([...urls]);
    setEnableQuery(true);
  };

  const handleDeleteImage = (url: string) => {
    const newImages = imageUrls.filter((image) => image !== url);
    setImageUrls(newImages);
  };

  return (
    <>
      <section className="mx-auto my-16 mb-24 h-full w-full max-w-6xl md:w-1/2">
        <ImagePreview images={imageUrls} onDeleteImage={handleDeleteImage} />
        {isFetching && (
          <p className="mb-4 text-lg font-bold">Loading data...</p>
        )}
        <InputForm inputData={data} image={imageUrls[0]} />
      </section>
      <footer className="container fixed bottom-0 w-full bg-slate-50 md:sticky">
        <Separator className="" />
        <MultiUploader onSuccess={handleSuccessfulUpload} />
      </footer>
    </>
  );
}
