import Navbar from "@/components/Base/Navbar"
import AltFooter from "@/components/Base/AltFooter";

import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import {LearningBox} from "@/components/dashboardComponenets/LearningBox"
import CustomTerminal from "@/components/dashboardComponenets/Terminal"
import LastActivity from "@/components/learnDashBoardComponents/LastActivity";
import {lastRoom} from "@/Data/LastRoomData";


export default function App() {


    return (
        <>
            <AnimatedBackground/>
            <Navbar/>
            <main>
                <LearningBox/>
                <LastActivity room={lastRoom}/>
                <CustomTerminal/>
            </main>
            <AltFooter/>
        </>
    )
}