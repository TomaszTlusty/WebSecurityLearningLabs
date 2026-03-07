export default function UserSettings() {
    return (
        <>
            <div className={"bg-white/2 mb-8 border border-white/10 mt-4 w-full max-w-xl 2xl:min-w-4xl mx-auto rounded-3xl backdrop-blur-md p-6"}>
                <form className={"w-full max-w-xl mx-auto grid grid-cols-2 gap-8"}>
                    <div className={"grid grid-cols-1"}>
                    <label htmlFor="text" className={"text-white/70"}>username</label>
                    <input type="text" name="username" className={"border border-white/85 p-2"} defaultValue="[username]" />
                    </div>

                    <div className="grid grid-cols-1">
                    <label htmlFor="email" className={"text-white/75"}>email</label>
                    <input type="email" name="email" className={"border border-white/85 p-2"} defaultValue="[email]" />
                    </div>


                    <input type="submit" value="Change" className={"items-center border-2 bg-white border-white text-black sm:text-lg text-sm w-fit px-3 py-1 rounded-full font-bold cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2"} />
                </form>

            </div>
        </>
    )
}