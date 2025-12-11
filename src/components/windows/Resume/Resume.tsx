import { pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
import WindowControls from "#components/WindowControls";
import WIndowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  return (
    <WIndowWrapper windowKey="resume" windowName="">
      <>
        <div id="window-header">
          <WindowControls name={"resume"} />
          <h2>Resume.pdf</h2>
          <a
            href="files/resume.pdf"
            download
            className="cursor-pointer "
            title="Download resume "
          >
            <Download className="icon " />
          </a>
        </div>
        <div className="max-h-[80vh] w-full  overflow-y-scroll">
          <Document file={"files/resume.pdf"}>
            <Page pageNumber={1} renderAnnotationLayer renderTextLayer
              />
          </Document>
        </div>
      </>
    </WIndowWrapper>
  );
};

export default Resume;
