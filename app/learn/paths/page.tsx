import AltNavbar from "@/components/Base/AltNavbar"
import AltFooter from "@/components/Base/AltFooter"
import { AnimatedBackground } from "@/components/Base/AnimatedBackground"
import PathsBox from "@/components/learnDashBoardComponents/paths/BoxOfPaths"

export default function Paths() {
    return (
        <>
            <AnimatedBackground />
            <AltNavbar />
            <main className="2xl:pl-64 min-h-screen flex flex-col">
                <div className="max-w-5xl mx-auto w-full px-6 py-10">
                    <PathsBox />
                </div>
            </main>
            <AltFooter />
        </>
    )
}
