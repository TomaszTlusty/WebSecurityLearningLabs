import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import { AnimatedBackground } from "@/components/Base/AnimatedBackground"
import ModuleBox from "@/components/learnDashBoardComponents/ModulesBox"
import SkillChart from "@/components/learnDashBoardComponents/SkillChart"
import SuggestedModules from "@/components/learnDashBoardComponents/SuggestedModules"
import LastActivity from "@/components/learnDashBoardComponents/LastActivity"
import { lastRoom } from "@/Data/LastRoomData"

export default function Learn() {
    return (
        <>
            <AnimatedBackground />
            <AltNavbar />
            <main className="2xl:pl-64 min-h-screen flex flex-col">
                <div className="max-w-5xl mx-auto w-full px-6 py-10">
                    <ModuleBox />
                    <div className="flex flex-col 2xl:flex-row gap-6 mb-8">
                        <SkillChart />
                        <SuggestedModules />
                    </div>
                    <LastActivity room={lastRoom} />
                </div>
            </main>
            <AltFooter />
        </>
    )
}
