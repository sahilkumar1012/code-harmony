import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";

// Ensure PDF.js worker is loaded correctly
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DSA = () => {
  const pdfFile = "/assets/DSA.pdf"; // Update the path based on your project structure

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">DSA Syllabus</h2>
      <div className="border rounded-lg shadow-lg p-4 w-full max-w-2xl">
        <Document file={pdfFile} className="flex justify-center">
          <Page pageNumber={1} />
        </Document>
      </div>
      <Button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg" onClick={() => window.open(pdfFile, "_blank")}>
        Download PDF
      </Button>
    </div>
  );
};

export default DSA;
