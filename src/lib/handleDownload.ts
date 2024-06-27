const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/CV-Muhammadbobur-Abdukarimov.pdf";
  link.download = "CV-Muhammadbobur-Abdukarimov.pdf";
  link.click();
};

export default handleDownload;
