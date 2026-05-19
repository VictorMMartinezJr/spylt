import navLogo from "/images/nav-logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 left=0 z-50 p-3 md:p-9">
        <img src={navLogo} alt="Spylt Logo" className="w-20 md:w-24" />
      </nav>
    </header>
  );
};

export default Navbar;
