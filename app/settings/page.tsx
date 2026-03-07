import AltNavbar from "@/components/Base/AltNavbar";
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import AltFooter from "@/components/Base/AltFooter";
import UserStreak from "@/components/learnDashBoardComponents/UserStreak";
import UserLevel from "@/components/learnDashBoardComponents/UserLevel";
import SettingsHeader from "@/components/settingsComponents/SettingsHeader";
import UserSettings from "@/components/settingsComponents/UserSettings";
import DangerZoneHeader from "@/components/settingsComponents/DangerZoneHeader";
import DangerZoneSettings from "@/components/settingsComponents/DangerZoneSettings";


export default function profile() {
    return(
        <>
            <AnimatedBackground/>
            <div className="2xl:flex flex-row">
                <aside className={"flex-col"}>
                    <AltNavbar/>
                </aside>
                <main className="flex flex-col ">
                    <SettingsHeader/>
                    <UserSettings/>
                    <DangerZoneHeader/>
                    <DangerZoneSettings/>
                </main>
                <aside className={"flex-col mt-16"}>
                    <UserStreak/>
                    <UserLevel/>
                </aside>
            </div>
            <AltFooter/>
        </>
    )
}