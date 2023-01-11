import IChildrenProps from "../../interfaces/children-props"

export default interface IHeaderProps extends IChildrenProps {
  title: string
  tab?: string
  headerMode?: string
  navLightBg?: string
}
