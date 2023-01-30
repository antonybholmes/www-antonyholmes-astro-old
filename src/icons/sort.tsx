import type IIconProps from "../interfaces/icon-props"
import cn from "../lib/class-names"

const FILL_OFF_CLS = "fill-slate-300 dark:fill-white/20"

const FILL_CLS = "fill-slate-900 dark:fill-white"

interface IProps extends IIconProps {
  descending?: boolean
}

export default function SortIcon({ descending = true, className }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      {/* <path d="M 0,8 L 16,8" /> */}
      <path
        d="M 3,8 L 10,1 L 17,8 Z"
        className={cn([descending, FILL_OFF_CLS, FILL_CLS])}
      />
      <path
        d="M 3,12 L 10,19 L 17,12 Z"
        className={cn([descending, FILL_CLS, FILL_OFF_CLS])}
      />
    </svg>
  )
}
