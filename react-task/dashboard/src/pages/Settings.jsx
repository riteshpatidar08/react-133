import { useEffect, useState } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
  RotateCcw,
} from "lucide-react";

function Settings() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("settings");

    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          name: "Virendra Jangir",
          email: "virendra@gmail.com",
          company: "My Company",
          timezone: "Asia/Kolkata",
          emailNotifications: true,
          pushNotifications: false,
          weeklyReport: true,
          darkMode: false,
        };
  });

  const [saved, setSaved] = useState(false);

  // =========================
  // INPUT CHANGE
  // =========================

 function handleChange(e) {
  const { name, value, type, checked } = e.target;

  setSettings((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));

  setSaved(false);
}

  // =========================
  // SAVE
  // =========================

  function handleSave() {
  localStorage.setItem(
    "settings",
    JSON.stringify(settings)
  );

  // Dark mode immediately apply
  if (settings.darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  setSaved(true);

  setTimeout(() => {
    setSaved(false);
  }, 2000);
}

  // =========================
  // RESET
  // =========================

  function handleReset() {
    const defaultSettings = {
      name: "Virendra Jangir",
      email: "virendra@gmail.com",
      company: "My Company",
      timezone: "Asia/Kolkata",
      emailNotifications: true,
      pushNotifications: false,
      weeklyReport: true,
      darkMode: false,
    };

    setSettings(defaultSettings);

    localStorage.setItem(
      "settings",
      JSON.stringify(defaultSettings)
    );

    setSaved(false);
  }

  // =========================
  // DARK MODE
  // =========================

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* ================= HEADER ================= */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your account and application preferences
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={handleReset}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          >
            <RotateCcw size={17} />

            Reset
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Save size={17} />

            {saved ? "Saved!" : "Save Changes"}
          </button>

        </div>

      </div>


      {/* ================= PROFILE ================= */}

      <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center gap-4 border-b border-slate-100 p-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <User size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              Profile
            </h2>

            <p className="text-sm text-slate-500">
              Update your personal information
            </p>
          </div>

        </div>


        <div className="grid gap-5 p-6 md:grid-cols-2">

          {/* NAME */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* EMAIL */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* COMPANY */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={settings.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* TIMEZONE */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Timezone
            </label>

            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="Asia/Kolkata">
                India — Asia/Kolkata
              </option>

              <option value="America/New_York">
                New York
              </option>

              <option value="Europe/London">
                London
              </option>

              <option value="Asia/Dubai">
                Dubai
              </option>
            </select>
          </div>

        </div>

      </div>


      {/* ================= NOTIFICATIONS ================= */}

      <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center gap-4 border-b border-slate-100 p-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Bell size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Choose how you want to receive notifications
            </p>
          </div>

        </div>


        <div className="divide-y divide-slate-100">

          {/* EMAIL */}

          <label className="flex cursor-pointer items-center justify-between p-6">

            <div>
              <p className="font-medium text-slate-800">
                Email Notifications
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Receive important updates through email
              </p>
            </div>

            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className="h-5 w-5 accent-indigo-600"
            />

          </label>


          {/* PUSH */}

          <label className="flex cursor-pointer items-center justify-between p-6">

            <div>
              <p className="font-medium text-slate-800">
                Push Notifications
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Receive notifications directly in your browser
              </p>
            </div>

            <input
              type="checkbox"
              name="pushNotifications"
              checked={settings.pushNotifications}
              onChange={handleChange}
              className="h-5 w-5 accent-indigo-600"
            />

          </label>


          {/* WEEKLY */}

          <label className="flex cursor-pointer items-center justify-between p-6">

            <div>
              <p className="font-medium text-slate-800">
                Weekly Report
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Receive a summary of your weekly activity
              </p>
            </div>

            <input
              type="checkbox"
              name="weeklyReport"
              checked={settings.weeklyReport}
              onChange={handleChange}
              className="h-5 w-5 accent-indigo-600"
            />

          </label>

        </div>

      </div>


      {/* ================= APPEARANCE ================= */}

      <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center gap-4 border-b border-slate-100 p-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <Palette size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              Appearance
            </h2>

            <p className="text-sm text-slate-500">
              Customize the look of your dashboard
            </p>
          </div>

        </div>


        <label className="flex cursor-pointer items-center justify-between p-6">

          <div>
            <p className="font-medium text-slate-800">
              Dark Mode
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Use dark theme throughout the application
            </p>
          </div>

          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
            className="h-5 w-5 accent-indigo-600"
          />

        </label>

      </div>


      {/* ================= SECURITY ================= */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center gap-4 border-b border-slate-100 p-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
            <Shield size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              Security
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account security
            </p>
          </div>

        </div>


        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-medium text-slate-800">
              Password
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Last changed recently
            </p>
          </div>

          <button
            onClick={() =>
              alert("Password change feature coming soon")
            }
            className="w-fit rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;