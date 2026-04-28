import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import AltNavbar from "@/components/Base/AltNavbar";
import AltFooter from "@/components/Base/AltFooter";
import PathHeader from "@/components/path/PathHeader";


export default async function Module({
                                         params,
                                     }: {
    params: Promise<{ id: number }>
}) {
    const {id} = await params

    return (
        <>
            <AnimatedBackground/>
            <div className="2xl:flex flex-row">
                <aside className={"flex-col"}>
                    <AltNavbar/>
                </aside>
                <main className="flex flex-col ">
                    <PathHeader/>
                </main>
            </div>
            <h4>{id}</h4>
            <AltFooter/>
        </>
    )
}