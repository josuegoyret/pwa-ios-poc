import Image from "next/image";

interface UploadDisplayProps {
  url: string;
}

const UploadDisplay = ({ url }: UploadDisplayProps) => {
  return (
    <Image
      src={url}
      width={200}
      height={200}
      alt="uploaded image"
      style={{ objectFit: "cover" }}
    />
  );
};

export default UploadDisplay;
