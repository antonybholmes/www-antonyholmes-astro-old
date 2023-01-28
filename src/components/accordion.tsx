import { useState } from "preact/hooks"
import AccordionButton from "./accordion-button"
import ExpandDetails from "./expand-details"
import { IButtonProps } from "./link/anchor-button"

interface IProps extends IButtonProps {
  title: string
  isExpanded?: boolean
  btnClassName?: string
}

export default function Accordion({
  title,
  isExpanded = false,
  className,
  btnClassName = "rounded-lg",
  children,
  onClick,
}: IProps) {
  const [expanded, setExpanded] = useState(isExpanded)

  function _onClick(e: MouseEvent) {
    if (onClick) {
      onClick(e)
    } else {
      setExpanded(!expanded)
    }
  }

  const status = onClick ? isExpanded : expanded

  return (
    <div className={className}>
      <AccordionButton
        isExpanded={status}
        onClick={_onClick}
        ariaLabel={`${status ? "Show" : "Hide"} ${title}`}
        className={btnClassName}
      >
        {title}
      </AccordionButton>

      <ExpandDetails isExpanded={status}>
        <div className="px-4 py-2">{children}</div>
      </ExpandDetails>
    </div>
  )
}
