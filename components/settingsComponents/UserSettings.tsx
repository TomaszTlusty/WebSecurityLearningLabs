export default function UserSettings() {
    return (
        <div className="bg-white/2 border border-white/10 rounded-3xl backdrop-blur-md p-6 mb-4">
            <h2 className="text-base font-semibold text-white mb-5">Profile</h2>
            <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            defaultValue="[username]"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue="[email]"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-white/85 transition-all duration-200"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}
