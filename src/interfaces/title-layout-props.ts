import ICrumbProps from "./crumb-props"
import ILayoutProps from "./layout-props"

export interface ITitleLayoutProps extends ILayoutProps, ICrumbProps {
  showTitle?: boolean
  subtitle?: string
  supertitle?: string
}
