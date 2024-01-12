import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <>
      <div className="container mx-auto px-6">
        <Header />
        <HeroSection />
        <TaskBoard/>
        <Footer />
      </div>
    </>
  );
}