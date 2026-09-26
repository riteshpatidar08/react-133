import { ArrowDown, ArrowUp } from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  color,
  percentage,
  type,
  description,
  progress,
}) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Top */}
      <div className="flex items-start justify-between">

        {/* Title + Value */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>

      </div>

      {/* Progress */}
      {progress !== undefined && (
        <div className="mt-5">

          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: color,
              }}
            ></div>

          </div>

          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-400">
              Progress
            </span>

            <span className="text-xs font-medium text-gray-600">
              {progress}%
            </span>
          </div>

        </div>
      )}

      {/* Bottom */}
      {percentage !== undefined && (
        <div className="flex items-center gap-2 mt-5">

          {/* Percentage */}
          <span
            className={`inline-flex items-center gap-1 text-sm font-semibold ${
              type === "up"
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >

            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                type === "up"
                  ? "bg-emerald-50"
                  : "bg-red-50"
              }`}
            >
              {type === "up" ? (
                <ArrowUp size={14} />
              ) : (
                <ArrowDown size={14} />
              )}
            </span>

            {percentage}%

          </span>

          {/* Description */}
          <span className="text-sm text-gray-500">
            {description}
          </span>

        </div>
      )}

    </div>
  );
}

export default StatCard;