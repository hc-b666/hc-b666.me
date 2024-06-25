

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container py-5 text-black dark:text-grey bg-white dark:bg-black">
      <p className="text-xs">Copyright &copy; {currentYear}, &nbsp; Muhammadbobur.&nbsp;All rights reserved.</p>
    </footer>
  );
};

export default Footer;
