import { useState } from "preact/hooks"
import IndexArrow from "../../icons/index-arrow"
import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"
import { BUTTON_CLS } from "./button-link"

export const ARROW_CLS = "group gap-x-1"

export default function ArrowLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn(BUTTON_CLS, ARROW_CLS, className)}
    >
      {children}

      <IndexArrow className="w-4 stroke-2" />
    </BaseLink>
  )
}
