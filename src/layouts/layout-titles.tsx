import BaseCol from "../components/base-col"
import Breadcrumb from "../components/breadcrumb"
import PageTitle from "../components/page-title"
import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"

export interface IProps extends ILayoutProps, ICrumbProps {}

export default function LayoutTitles({
  title,
  showTitle = false,
  showCrumbs = true,
  superTitle,
  subTitle,
  crumbs,
}: IProps) {
  return (
    <BaseCol className="gap-y-4 mb-8">
      {showCrumbs && <Breadcrumb crumbs={crumbs} />}

      {showTitle && (
        <PageTitle title={title} subTitle={subTitle} superTitle={superTitle} />
      )}
    </BaseCol>
  )
}
