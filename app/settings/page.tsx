import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import { AnimatedBackground } from "@/components/Base/AnimatedBackground"
import SettingsHeader from "@/components/settingsComponents/SettingsHeader"
import UserSettings from "@/components/settingsComponents/UserSettings"
import DangerZoneSettings from "@/components/settingsComponents/DangerZoneSettings"

export default function Settings() {
    return (
        <>
            <AnimatedBackground />
            <AltNavbar />
            <main className="2xl:pl-64 min-h-screen flex flex-col">
                <div className="max-w-2xl mx-auto w-full px-6 py-10">
                    <SettingsHeader />
                    <UserSettings />
                    <DangerZoneSettings />
                </div>
            </main>
            <AltFooter />
        </>
    )
}
