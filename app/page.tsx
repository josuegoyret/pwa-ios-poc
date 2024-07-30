import UploadBox from "@/components/UploadBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-10 pb-24">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-medium">Progressive Web App - PoC</h1>
          <h4 className="text-sm font-light">(CS Verify)</h4>
        </div>
        <UploadBox />
        <p className="font-mono text-center">Hello there.- OWK</p>
      </div>
    </main>
  );
}
