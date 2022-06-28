import html2canvas from "html2canvas";
import { useRef } from "react";
import { jsPDF } from "jspdf";

export default function usePrint() {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handlePrint = (blobCallBack = printPdf) => {
    const element = nodeRef.current;
    if (element === null) return;
    const { clientWidth, clientHeight } = element;
    html2canvas(element, { width: clientWidth, height: clientHeight }).then(canvas => {
      blobCallBack(canvas);
    });
  };

  const printPdf = (canvas: HTMLCanvasElement) => {
    const image = canvas.toDataURL("image/png", 1.0);
    const { height, width } = canvas;
    const pdf = new jsPDF({ compress: true, unit: "px", format: [width, height] });
    pdf.addImage(image, "PNG", 0, 0, width, height);
    pdf.save("Cv Jesús Hernández.pdf");
  };

  return {
    handlePrint,
    nodeRef,
  };
}
