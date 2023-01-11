import Breadcrumb from "../components/breadcrumb"
import ContentDiv from "../components/content-div"
import PageTitle from "../components/page-title"
import type ICrumbProps from "../interfaces/crumb-props"
import type ILayoutProps from "../interfaces/layout-props"
import type IPageTitleProps from "../interfaces/page-title-props"
import BaseLayout from "./base-layout"

export interface IProps extends ILayoutProps, ICrumbProps, IPageTitleProps {
  headerClassName?: string
}

export default function ContentLayout({
  title = "",
  subTitle,
  superTitle,
  showTitle = false,
  tab,
  isIndexed,
  headerClassName, //"text-white bg-card-blue lg:text-slate-900 lg:bg-white",
  crumbs,
  className,
  headerChildren,
  children,
}: IProps) {
  return (
    <BaseLayout
      title={title}
      tab={tab}
      isIndexed={isIndexed}
      className={className}
      headerChildren={headerChildren}
    >
      <ContentDiv className={headerClassName}>
        <></>
        <div className="mt-28">
          {crumbs && <Breadcrumb crumbs={crumbs} className="mb-8" />}

          {showTitle && title !== "" && (
            <PageTitle
              title={title}
              subTitle={subTitle}
              superTitle={superTitle}
              className="mb-8"
            />
          )}

          {
            // @ts-ignore
            children[0]
          }
        </div>
        <></>
      </ContentDiv>
      <ContentDiv>
        <></>
        <>
          {
            // @ts-ignore
            children[1]
          }
        </>
        <></>
      </ContentDiv>
    </BaseLayout>
  )
}
