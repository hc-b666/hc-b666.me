
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container px-5 md:px-0 py-5 text-black mt-auto dark:text-grey bg-white dark:bg-black">
      <p className="text-xs text-center md:text-left">Copyright &copy; {currentYear}, Muhammadbobur.&nbsp;All rights reserved.</p>
    </footer>
  );
};
