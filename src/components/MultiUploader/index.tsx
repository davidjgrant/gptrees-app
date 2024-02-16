// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useUploadThing } from "@/lib/uploadthing";
import { useDropzone } from "@uploadthing/react";
import { CameraIcon, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

export type MultiUploaderProps = {
  onSuccess: (res: string[]) => void;
};

export const MultiUploader = ({ onSuccess }: MultiUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        toast({
          title: "Success!",
          description: "Files uploaded successfully",
        });
        const urls = res.map((file) => file.url);
        onSuccess(urls);
        setFiles([]);
      },
      onUploadError: () => {
        toast({
          title: "Error!",
          description: "File upload failed",
        });
        alert("error occurred while uploading");
      },
    },
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    maxFiles: 1,
  });

  return (
    <>
      <div className="flex w-full cursor-pointer items-center p-3 md:mx-2 md:justify-end">
        <div {...getRootProps()}>
          <Button
            disabled={isUploading}
            className="rounded-md bg-slate-700 p-3"
          >
            <CameraIcon size={16} className="mr-2 w-fit text-background" />
            Upload image
          </Button>
          <input {...getInputProps()} />
        </div>
        <div>
          {files.length > 0 && (
            <Button
              disabled={isUploading}
              onClick={() => startUpload(files)}
              className="ml-1 bg-foreground"
            >
              {isUploading ? "Uploading..." : `Upload ${files.length} file`}
              {isUploading && (
                <Loader2 size={16} className="ml-1 animate-spin" />
              )}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
