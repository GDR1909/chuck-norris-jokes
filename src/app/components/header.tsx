import Image from "next/image";

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
      <Image src="/assets/img/logo.png" className="logo" alt="Logo" width={80} height={82.31}/>
    </header>
  );
};

export default Header;