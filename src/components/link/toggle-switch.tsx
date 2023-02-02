import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"
import BaseCheckBoxButton from "./base-checkbox-button"
import type { ICheckBoxProps } from "./check-box"

export default function ToggleSwitch({
  index = -1,
  isSelected,
  onClick,
  ariaLabel,
  className,
  children,
}: ICheckBoxProps) {
  return (
    <VCenterRow className={cn("justify-between gap-x-4", className)}>
      <span>{children}</span>
      <BaseCheckBoxButton
        isSelected={isSelected}
        onClick={() => onClick(index, !isSelected)}
        className="group cursor-pointer"
        ariaLabel={ariaLabel}
      >
        <svg
          viewBox="0 0 24 16"
          xmlns="http://www.w3.org/2000/svg"
          class="w-9 shrink-0"
        >
          <rect
            width="24"
            height="16"
            rx="8"
            class={cn("trans-300 transition-colors", [
              isSelected,
              "fill-blue-600 group-hover:fill-blue-500",
              "fill-slate-200 group-hover:fill-slate-300 dark:fill-slate-400 dark:group-hover:fill-slate-500",
            ])}
          />
          <circle
            cx="8"
            cy="8"
            r="7"
            class={cn("trans-300 fill-white transition-transform", [
              isSelected,
              "translate-x-[8px]",
            ])}
          />
        </svg>
      </BaseCheckBoxButton>
    </VCenterRow>
  )
}
