import { useState } from "react";
import {
Mail,
  Cloud,
  Database,
  MessageSquare,
  CheckCircle2,
  PlugZap,
} from "lucide-react";

const integrationsData = [
 
  
  {
    id: 3,
    name: "Gmail",
    description: "Connect your Gmail account",
    icon: Mail,
    connected: true,
  },
  {
    id: 4,
    name: "Google Drive",
    description: "Connect your Google Drive",
    icon: Cloud,
    connected: false,
  },
  {
    id: 5,
    name: "MongoDB",
    description: "Connect your MongoDB database",
    icon: Database,
    connected: true,
  },
  {
    id: 6,
    name: "Discord",
    description: "Connect your Discord server",
    icon: MessageSquare,
    connected: false,
  },
];

function Integrations() {
  const [integrations, setIntegrations] =
    useState(integrationsData);

  function handleToggle(id) {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              connected: !integration.connected,
            }
          : integration
      )
    );
  }

  const connectedCount = integrations.filter(
    (integration) => integration.connected
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* ================= HEADER ================= */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Integrations
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Connect your favorite tools and services
          </p>
        </div>

        {/* Connected count */}

        <div className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">

          <CheckCircle2
            size={18}
            className="text-emerald-500"
          />

          <span className="text-sm font-medium text-slate-600">
            {connectedCount} of {integrations.length} connected
          </span>

        </div>

      </div>


      {/* ================= INFO BANNER ================= */}

      <div className="mb-8 flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">

          <PlugZap size={22} />

        </div>

        <div>

          <h2 className="font-semibold text-slate-800">
            Connect your workspace
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Integrate your favorite applications and
            manage everything from one place.
          </p>

        </div>

      </div>


      {/* ================= CARDS ================= */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {integrations.map((integration) => {

          const Icon = integration.icon;

          return (
            <div
              key={integration.id}
              className="group flex min-h-[270px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* TOP */}

              <div className="flex items-start justify-between">

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">

                  <Icon size={28} />

                </div>


                {/* Status */}

                {integration.connected ? (

                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    Connected

                  </span>

                ) : (

                  <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">

                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>

                    Not connected

                  </span>

                )}

              </div>


              {/* CONTENT */}

              <div className="mt-6">

                <h2 className="text-lg font-semibold text-slate-900">
                  {integration.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {integration.description}
                </p>

              </div>


              {/* DIVIDER */}

              <div className="my-5 border-t border-slate-100"></div>


              {/* BUTTON */}

              <button
                onClick={() =>
                  handleToggle(integration.id)
                }
                className={
                  integration.connected
                    ? "mt-auto flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    : "mt-auto flex h-11 w-full items-center justify-center rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
                }
              >

                {integration.connected
                  ? "Disconnect"
                  : "Connect"}

              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Integrations;