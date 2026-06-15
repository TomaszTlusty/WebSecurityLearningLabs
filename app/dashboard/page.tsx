import Navbar from "@/components/Base/Navbar";
import AltFooter from "@/components/Base/AltFooter";

import { AnimatedBackground } from "@/components/Base/AnimatedBackground";
import { LearningBox } from "@/components/dashboardComponenets/LearningBox";
import CustomTerminal from "@/components/dashboardComponenets/Terminal";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <LearningBox />
        <div className="hidden md:block">
          <CustomTerminal />
        </div>
      </main>
      <AltFooter />
    </>
  );
}
