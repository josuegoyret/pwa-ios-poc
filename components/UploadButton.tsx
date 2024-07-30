import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

interface UploadButtonProps {
  handleSuccess: (results: CloudinaryUploadWidgetResults) => void;
}

const UploadButton = ({ handleSuccess }: UploadButtonProps) => {
  return (
    <CldUploadButton
      uploadPreset="pwa-poc"
      onSuccess={handleSuccess}
      className="border border-zinc-500 py-2 px-6 rounded-full hover:bg-zinc-900 mb-2"
    />
  );
};

export default UploadButton;
