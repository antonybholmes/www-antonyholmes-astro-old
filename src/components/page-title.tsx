import cn from "../lib/class-names"
import IClassProps from "../interfaces/class-props"
import IPageTitleProps from "../interfaces/page-title-props"

interface IProps extends IPageTitleProps, IClassProps {
  subClassName?: string
}

const PageTitle = ({
  title,
  superTitle,
  subTitle,
  className,
  subClassName,
}: IProps) => (
  <header className={cn("flex flex-col gap-y-1", className)}>
    {superTitle && <h3 className="text-lg font-normal">{superTitle}</h3>}

    <h1 className="text-4xl font-bold capitalize">{title}</h1>

    {subTitle && (
      <h2 className={cn("text-lg font-normal", subClassName)}>{subTitle}</h2>
    )}
  </header>
)

export default PageTitle
