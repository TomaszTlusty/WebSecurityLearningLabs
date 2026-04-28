export default function PathHeader() {
    return (
        <>
            <header className={"mx-auto w-sm mt-16"}>
                <div className="flex flex-col gap-4 mx-auto ">
                    <div className="flex flex-col">
                        <h1 className={"text-2xl"}>Getting Started</h1>
                        <h3 className={"text-sm text-white/40"}>0001</h3>
                    </div>
                    <div className="flex flex-row gap-4 mx-auto ">
                        <span className={"border-r border-white/30 pr-4"}>easy</span>
                        <span className={"border-r border-white/30 pr-4"}>6h</span>
                        <span>modules count</span>
                    </div>
                </div>
            </header>
        </>
    )
}