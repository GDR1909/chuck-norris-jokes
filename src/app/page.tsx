import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";


/**
 * Home page component.
 * 
 * This component renders the main structure of the home page, including the Header, Content, and Footer components.
 * It uses a responsive and flexible layout for better usability across devices.
 * 
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  return (
    <div className="h-dvh max-w-[1920px] mx-[auto] my-[0] flex flex-col justify-between">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}