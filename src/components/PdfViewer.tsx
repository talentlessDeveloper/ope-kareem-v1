import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../assets/NewCv2.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

type ResumeViewerProp = {
  closeResume: () => void;
};
const PdfViewer = ({ closeResume }: ResumeViewerProp) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-10  flex flex-col items-center justify-center backdrop-blur">
      <button
        className="absolute right-10 top-5 text-red-500"
        onClick={closeResume}
      >
        X
      </button>
      <div className="mb-8 flex justify-center">
        <a
          href={pdf}
          download
          target="_blank"
          className="w-fit bg-slate-200 px-6 py-3 text-black transition-colors duration-300 hover:bg-slate-50"
        >
          Download Resume?
        </a>
      </div>
      <Document
        file={pdf}
        className="mx-auto max-h-[560px] w-11/12  overflow-y-auto overflow-x-hidden"
      >
        <Page pageNumber={1} width={width > 768 ? width - 100 : width - 40} />
        <Page pageNumber={2} width={width > 768 ? width - 100 : width - 40} />
      </Document>
    </div>
  );
};

export default PdfViewer;

// const ResumeViewer = ({ closeResume }: ResumeViewerProp) => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-10  flex flex-col items-center justify-center backdrop-blur">
//       <button
//         className="absolute right-10 top-5 text-red-500"
//         onClick={closeResume}
//       >
//         <X />
//       </button>
//       <div className="mb-8 flex justify-center">
//         <a
//           href={resumeUrl}
//           download
//           target="_blank"
//           className="w-fit bg-accent-foreground px-6 py-3 text-background transition-colors duration-300 hover:bg-red-500"
//         >
//           Download Resume?
//         </a>
//       </div>
//       <Document
//         file={resumeUrl}
//         className="mx-auto max-h-[560px] w-11/12  overflow-y-auto overflow-x-hidden"
//       >
//         <Page pageNumber={1} width={width > 768 ? width - 100 : width - 40} />
//         <Page pageNumber={2} width={width > 768 ? width - 100 : width - 40} />
//       </Document>
//     </div>
//   );
// };

// export default ResumeViewer;
