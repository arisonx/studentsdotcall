"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface IPdfPath {
  path: string;
}
export function PdfRender({ path }: IPdfPath) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="h-[400px] w-400px">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={path} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
}
