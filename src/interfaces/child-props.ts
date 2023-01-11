import { ReactElement } from "preact/hooks"
import IClassProps from "./class-props"

export default interface IChildProps extends IClassProps {
  children?: ReactElement
}
