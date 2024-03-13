export default function SettingsPage() {
  return (
    <div>
        <div className="m-5 bg-[#588157] p-10 rounded-2xl text-white">
            <h1 className="font-bold text-5xl">Settings</h1>
            <span className="text-lg">Manage your account settings and set your preferences.</span>
        </div>
        <div className="m-5 bg-[#588157] p-10 rounded-2xl text-white">
            <h1 className="font-bold text-4xl">General</h1>
            <div className="grid">
                <span className="text-lg">
                    Update Your Admin Settings
                </span>
                <div className="mt-5 grid gap-5">
                    <form className="border-2 rounded-md p-5">
                        <div className="grid">
                            <label className="text-2xl pl-3 font-bold">Add a Admin Team Email</label>
                            <input type="email" className="border-2 input input-ghost transition-all border-black rounded-lg p-2 m-2" />
                        </div>
                    </form>
                    <div className="grid p-5">
                        <label className="text-2xl font-bold">Change Theme</label>
                        <select className="select select-bordered select-ghost w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
