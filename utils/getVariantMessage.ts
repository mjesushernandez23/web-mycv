type VariantStatusCode = "success" | "error" | "warning";
interface StatusCodesProps {
  range: [number, number];
  variant: VariantStatusCode;
}

const statusCodes: StatusCodesProps[] = [
  { range: [200, 299], variant: "success" },
  { range: [400, 499], variant: "error" },
  { range: [500, 599], variant: "warning" },
];

const getVariantMessage = (error: number): VariantStatusCode | null => {
  const indexVariant = statusCodes.findIndex(
    ({ range: [start, end] }) => start >= error && end <= end
  );
  return indexVariant >= 0 ? statusCodes[indexVariant].variant : null;
};

export default getVariantMessage;
