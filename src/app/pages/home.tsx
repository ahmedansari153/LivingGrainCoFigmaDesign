import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Process } from '../components/process';
import { Portfolio } from '../components/portfolio';
import { Values } from '../components/values';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Process />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}