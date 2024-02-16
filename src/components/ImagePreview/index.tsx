import Image from "next/image";
import { Button } from "../ui/button";

export type ImagePreviewProps = {
  images: string[];
  onDeleteImage: (url: string) => void;
};

export const ImagePreview = ({ images, onDeleteImage }: ImagePreviewProps) => {
  if (images.length === 0) {
    return;
  }

  return (
    <div className="mb-8 flex gap-4 rounded-md border border-slate-400 bg-slate-50 p-4 xl:gap-8 xl:p-8">
      {images.map((url) => (
        <Image
          key={url}
          src={url}
          width={300}
          height={200}
          alt="image"
          className="rounded-sm"
        />
      ))}
      <div className="flex w-full flex-col justify-between">
        <div>
          <p className="text-lg font-semibold">Image Preview</p>
          <div>
            <span>File name: 5GSDG46F.jpg</span>
          </div>
        </div>
        <div className="flex w-full justify-end">
          {images.length > 0 && (
            <Button
              onClick={() => onDeleteImage(images[0] ?? "")}
              variant={"destructive"}
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
