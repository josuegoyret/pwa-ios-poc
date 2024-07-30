"use client";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import UploadButton from "./UploadButton";
import { useState } from "react";
import UploadDisplay from "./UploadDisplay";

const UploadBox = () => {
  const [uploadedURL, setUploadedURL] = useState<string | null>(null);

  const handleSuccess = (results: CloudinaryUploadWidgetResults) => {
    if (typeof results.info === "string" || results.info === undefined) return;
    setUploadedURL(results.info.url);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h3 className="text-4xl font-bold">Upload to Claudinary</h3>
      <UploadButton handleSuccess={handleSuccess} />
      {uploadedURL && <UploadDisplay url={uploadedURL} />}
    </div>
  );
};

export default UploadBox;
