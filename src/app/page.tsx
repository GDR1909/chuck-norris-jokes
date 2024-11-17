import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="h-dvh max-w-[1920px] mx-[auto] my-[0] flex flex-col justify-between">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}