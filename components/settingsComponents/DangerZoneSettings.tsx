export default function UserSettings() {
    return (
        <>
            <div className={"bg-white/2 mb-8 border border-white/10 mt-4 w-full p-8 max-w-xl 2xl:min-w-4xl mx-auto rounded-3xl backdrop-blur-md"}>
                <p className={"text-red-500 mb-8 font-bold"}>You can&#39;t reverse the changes</p>

                <button className={"items-center border-2  bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 font-bold  text-black sm:text-lg text-sm w-fit px-3 py-1 rounded-full cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2"}>Delete Account</button>
            </div>
        </>
    )
}