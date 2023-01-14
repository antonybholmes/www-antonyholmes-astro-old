import { ReactNode } from "preact/hooks"
import IClassProps from "./class-props"

export default interface IChildrenProps extends IClassProps {
  children?: ReactNode
}
