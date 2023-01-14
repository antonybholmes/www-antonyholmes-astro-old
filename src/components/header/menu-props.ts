import { MouseEventHandler } from "preact/hooks"

export default interface IMenuProps {
  showMenu: boolean
  onClick?: MouseEventHandler
}
