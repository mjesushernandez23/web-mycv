import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function usePrint(nameDocument?: string) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handlePrint = (cb = processPrint) => {
    if (nodeRef.current === null) return;
    const { clientWidth, clientHeight } = nodeRef.current;

    html2canvas(nodeRef.current, { width: clientWidth, height: clientHeight, scale: 5 }).then(
      canvas => {
        const blob = canvas.toDataURL();
        cb(blob, clientWidth, clientHeight);
      }
    );
  };

  const processPrint = (blob: string, width: number, height: number) => {
    const pdf = new jsPDF({ unit: "px", format: [width, height], compress: true });
    pdf.addImage({ imageData: blob, format: "PNG", x: 0, y: 0, width, height });
    pdf.save(`${nameDocument ?? "cv"}.pdf`);
  };

  return {
    handlePrint,
    nodeRef,
  };
}
