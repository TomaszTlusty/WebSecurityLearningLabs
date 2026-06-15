import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import { AnimatedBackground } from "@/components/Base/AnimatedBackground"
import BoxOfBadges from "@/components/learnDashBoardComponents/badges/BoxOfBadges"

export default function Badges() {
    return (
        <>
            <AnimatedBackground />
            <AltNavbar />
            <main className="2xl:pl-64 min-h-screen flex flex-col">
                <div className="max-w-5xl mx-auto w-full px-6 py-10">
                    <BoxOfBadges />
                </div>
            </main>
            <AltFooter />
        </>
    )
}
