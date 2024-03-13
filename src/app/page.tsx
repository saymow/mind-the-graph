import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import "./page.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Presentation />
      <div className="content-container">
        <Services />
      </div>
    </main>
  );
}
