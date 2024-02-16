"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";

const FormSchema = z.object({
  species: z.string().min(3, {
    message: "Species name is too short",
  }),
  health: z.string().min(3, {
    message: "Health message is too short",
  }),
  height: z.string().optional(),
  diameter: z.string().optional(),
  notes: z.string().optional(),
  age: z.string().optional(),
  coordinates: z.string().optional(),
  illegalActivities: z.string().optional(),
  futurePlans: z.string().optional(),
  image: z.string().optional(),
});

export type InputData = {
  tree_species: string;
  tree_height: string;
  tree_diameter: string;
  tree_health: string;
  initial_notes: string;
  tree_age: string;
  tree_coordinates: string;
  illegal_activities: string;
  future_plans: string;
  image?: string;
};

export type InputFormProps = {
  inputData?: InputData;
  image?: string;
};

export function InputForm({ inputData, image }: InputFormProps) {
  const { mutate } = api.post.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Tree added successfully",
      });
      resetValues();
    },
    onError: (error) => {
      console.error(error);

      toast({
        title: "Error",
        description: "Failed to add tree. Please try again.",
      });
    },
  });

  const input = {
    species: inputData?.tree_species ?? "",
    height: inputData?.tree_height,
    diameter: inputData?.tree_diameter,
    health: inputData?.tree_health ?? "",
    notes: inputData?.initial_notes,
    age: inputData?.tree_age,
    coordinates: inputData?.tree_coordinates,
    illegalActivities: inputData?.illegal_activities,
    futurePlans: inputData?.future_plans,
    image,
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: input,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate({
      species: data.species,
      height: data.height ?? "",
      diameter: data.diameter ?? "",
      health: data.health,
      notes: data.notes ?? "",
      age: data.age ?? "",
      coordinates: data.coordinates ?? "",
      illegalActivities: data.illegalActivities ?? "",
      futurePlans: data.futurePlans ?? "",
      image: input.image ?? "",
    });
  }

  const resetValues = () => {
    form.reset();
    form.setValue("species", "");
    form.setValue("health", "");
    form.setValue("height", "");
    form.setValue("diameter", "");
    form.setValue("notes", "");
    form.setValue("age", "");
    form.setValue("coordinates", "");
    form.setValue("illegalActivities", "");
    form.setValue("futurePlans", "");
    form.clearErrors();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full items-center justify-center space-y-6"
      >
        <div className="mb-2 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="species"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Species</FormLabel>
                <FormControl>
                  <Input type="" placeholder="oak" {...field} />
                </FormControl>
                <FormDescription>
                  Write the species of the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <Input type="" placeholder="40m" {...field} />
                </FormControl>
                <FormDescription>Write the height of the tree.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-2 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="diameter"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Diameter</FormLabel>
                <FormControl>
                  <Input type="" placeholder="1m" {...field} />
                </FormControl>
                <FormDescription>
                  Write the diameter of the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="" placeholder="80" {...field} />
                </FormControl>
                <FormDescription>Write the age of the tree.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-2 flex w-full flex-col items-center justify-center gap-4">
          <FormField
            control={form.control}
            name="coordinates"
            render={({ field }) => (
              <FormItem className="mx-auto w-full">
                <FormLabel>Coordinates</FormLabel>
                <FormControl>
                  <Input type="" placeholder="123, -123" {...field} />
                </FormControl>
                <FormDescription>
                  Write the coordinates of the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="health"
            render={({ field }) => (
              <FormItem className="mx-auto w-full">
                <FormLabel>Health</FormLabel>
                <FormControl>
                  <Textarea placeholder="How is the tree doing?" {...field} />
                </FormControl>
                <FormDescription>Write the health of the tree.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem className="mx-auto w-full">
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your notes here." {...field} />
                </FormControl>
                <FormDescription>Write the notes of the tree.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="illegalActivities"
            render={({ field }) => (
              <FormItem className="mx-auto w-full">
                <FormLabel>Illegal Activities</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Did you spot anything illegal?"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Write the illegal activities of the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="futurePlans"
            render={({ field }) => (
              <FormItem className="mx-auto w-full">
                <FormLabel>Future Plans</FormLabel>
                <FormControl>
                  <Textarea placeholder="What to do next?" {...field} />
                </FormControl>
                <FormDescription>
                  Write the future plans of the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="justify-left flex items-center gap-2">
          <Button disabled={!form.formState.dirtyFields} type="submit">
            Submit
          </Button>
          {inputData && (
            <Button variant={"secondary"} onClick={resetValues}>
              Reset
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
