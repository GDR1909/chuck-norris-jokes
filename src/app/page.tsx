import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}
