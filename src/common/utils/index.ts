export const formatDate = (date: string | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

export function handleDownload() {
  const link = document.createElement("a");
  link.href = "/files/Resume_Muhammadbobur_Abdukarimov.pdf";
  link.download = "Resume_Muhammadbobur_Abdukarimov.pdf";
  link.click();
}
