export default function DangerZoneSettings() {
    return (
        <div className="bg-white/2 border border-red-500/20 rounded-3xl backdrop-blur-md p-6 mb-8">
            <h2 className="text-base font-semibold text-red-400 mb-1">Danger Zone</h2>
            <p className="text-white/40 text-sm mb-5">These actions are permanent and cannot be reversed.</p>
            <div className="flex items-center justify-between gap-4 border border-white/8 rounded-2xl p-4">
                <div>
                    <p className="text-sm font-medium text-white">Delete Account</p>
                    <p className="text-xs text-white/40 mt-0.5">Permanently removes your account and all progress.</p>
                </div>
                <button className="shrink-0 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200">
                    Delete Account
                </button>
            </div>
        </div>
    )
}
