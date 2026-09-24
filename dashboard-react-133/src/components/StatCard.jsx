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
    <div className="stat-card">

      {/* Top */}
      <div className="stat-card-top">

        <div>
          <p className="stat-title">
            {title}
          </p>

          <h2 className="stat-value">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className="stat-icon"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>

      </div>

      {/* Progress */}
      {progress !== undefined && (
        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>
      )}

      {/* Bottom */}
      {percentage !== undefined && (
        <div className="stat-bottom">

          <span
            className={
              type === "up"
                ? "percentage up"
                : "percentage down"
            }
          >

            {type === "up" ? (
              <ArrowUp size={18} />
            ) : (
              <ArrowDown size={18} />
            )}

            {percentage}%

          </span>

          <span className="description">
            {description}
          </span>

        </div>
      )}

    </div>
  );
}

export default StatCard;