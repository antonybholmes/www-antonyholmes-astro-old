import cn from "../../lib/class-names"
import type { ICheckBoxProps } from "./check-box"

export default function ToggleSwitch({
  index = -1,
  isSelected,
  onClick,
  className,
  children,
}: ICheckBoxProps) {
  return (
    <button
      onClick={() => onClick(index, !isSelected)}
      className={cn(
        "group flex cursor-pointer flex-row items-center justify-between gap-x-4",
        className
      )}
    >
      <div>{children}</div>

      <svg
        viewBox="0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9"
      >
        <rect
          width="24"
          height="16"
          rx="8"
          className={cn("transition-ani transition-colors", [
            isSelected,
            "fill-blue-600",
            "fill-slate-200 group-hover:fill-slate-300",
          ])}
        />
        <circle
          cx="8"
          cy="8"
          r="7"
          className={cn("transition-ani fill-white transition-transform", [
            isSelected,
            "translate-x-toggle",
          ])}
        />
      </svg>
    </button>
  )
}
