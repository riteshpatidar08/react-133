import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Shield,
  Pencil,
  Save,
  LogOut,
  Eye,
  EyeOff,
} from "lucide-react";

function Account() {
  // =========================
  // USER DATA
  // =========================

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("account");

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Virendra Kumar",
          email: "virendra@gmail.com",
          phone: "+91 9876543210",
          location: "Jaipur, Rajasthan",
          company: "My Company",
          role: "Administrator",
        };
  });

  const [isEditing, setIsEditing] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [password, setPassword] = useState("");

  const [saved, setSaved] = useState(false);


  // =========================
  // HANDLE CHANGE
  // =========================

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  }


  // =========================
  // SAVE PROFILE
  // =========================

  function handleSave() {
    localStorage.setItem(
      "account",
      JSON.stringify(user)
    );

    setIsEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }


  // =========================
  // LOGOUT
  // =========================

  function handleLogout() {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("user");

    alert("Logged out successfully!");

    // Agar login page available hai
    window.location.href = "/login";
  }


  // =========================
  // INITIAL
  // =========================

  const initial = user.name
    ? user.name.charAt(0).toUpperCase()
    : "U";


  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* =================================
          HEADER
      ================================= */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Account
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your profile and account settings
          </p>
        </div>


        {/* EDIT / SAVE */}

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Pencil size={17} />

            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <Save size={17} />

            {saved ? "Saved!" : "Save Changes"}
          </button>
        )}

      </div>


      {/* =================================
          PROFILE CARD
      ================================= */}

      <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* COVER */}

        <div className="h-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 sm:h-40"></div>


        {/* PROFILE */}

        <div className="px-5 pb-6 sm:px-8">

          <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

            {/* AVATAR */}

            <div className="flex items-end gap-4">

              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-3xl font-bold text-indigo-600 shadow-md sm:h-28 sm:w-28 sm:text-4xl">
                {initial}
              </div>


              <div className="pb-1">

                <h2 className="text-xl font-bold text-slate-900">
                  {user.name}
                </h2>

                <p className="text-sm text-slate-500">
                  {user.role}
                </p>

              </div>

            </div>


            {/* STATUS */}

            <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">

              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

              Active Account

            </div>

          </div>

        </div>

      </div>


      {/* =================================
          MAIN GRID
      ================================= */}

      <div className="grid gap-6 lg:grid-cols-3">


        {/* =================================
            PERSONAL INFORMATION
        ================================= */}

        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* HEADER */}

            <div className="flex items-center gap-4 border-b border-slate-100 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">

                <User size={21} />

              </div>

              <div>

                <h2 className="font-semibold text-slate-900">
                  Personal Information
                </h2>

                <p className="text-sm text-slate-500">
                  Your personal account details
                </p>

              </div>

            </div>


            {/* FORM */}

            <div className="grid gap-5 p-6 md:grid-cols-2">


              {/* NAME */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </div>


              {/* PHONE */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </div>


              {/* LOCATION */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Location
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="location"
                    value={user.location}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </div>


              {/* COMPANY */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Company
                </label>

                <div className="relative">

                  <Building2
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="company"
                    value={user.company}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </div>


              {/* ROLE */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Role
                </label>

                <input
                  type="text"
                  value={user.role}
                  disabled
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500"
                />

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="space-y-6">


          {/* ACCOUNT STATUS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

                <Shield size={20} />

              </div>

              <h2 className="font-semibold text-slate-900">
                Account Status
              </h2>

            </div>


            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Account
                </span>

                <span className="font-medium text-emerald-600">
                  Active
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Role
                </span>

                <span className="font-medium text-slate-800">
                  {user.role}
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Security
                </span>

                <span className="font-medium text-emerald-600">
                  Protected
                </span>

              </div>

            </div>

          </div>


          {/* PASSWORD */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-1 font-semibold text-slate-900">
              Password
            </h2>

            <p className="mb-5 text-sm text-slate-500">
              Update your account password
            </p>


            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />


              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>


            <button
              onClick={() => {
                if (!password) {
                  alert("Please enter a password");
                  return;
                }

                alert("Password updated successfully");
                setPassword("");
              }}
              className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Update Password
            </button>

          </div>


          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
}

export default Account;