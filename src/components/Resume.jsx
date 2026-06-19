import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "../assets/resume.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Fix for Vite + React PDF
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Download Button */}
        <div className="flex justify-center mb-10">
          <a
            href={resumePdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            <AiOutlineDownload size={22} />
            Download CV
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="flex justify-center">
          <Document
            file={resumePdf}
            loading={
              <p className="text-center text-xl text-violet-300">
                Loading Resume...
              </p>
            }
            error={
              <p className="text-center text-red-400">
                Failed to load PDF.
              </p>
            }
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.5 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Bottom Download Button */}
        <div className="flex justify-center mt-10">
          <a
            href={resumePdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            <AiOutlineDownload size={22} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;