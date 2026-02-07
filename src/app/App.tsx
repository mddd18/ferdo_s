import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Team } from './components/Team';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
}