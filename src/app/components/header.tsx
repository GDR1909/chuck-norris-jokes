/**
 * Header component.
 * 
 * This component represents the header section of the page, which includes a logo image.
 * The header has padding applied via Tailwind CSS utility classes.
 * 
 * @returns {JSX.Element} The rendered header component containing the logo.
 */
const Header = () => {
  return (
    <header className="p-8">
      <img src="assets/img/w&sLogo.svg" className="logo" alt="W&S Logo"/>
    </header>
  );
};

export default Header;