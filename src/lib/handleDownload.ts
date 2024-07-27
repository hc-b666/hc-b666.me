const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/CV_Muhammadbobur_Abdukarimov.pdf";
  link.download = "CV_Muhammadbobur_Abdukarimov.pdf";
  link.click();
};

export default handleDownload;
