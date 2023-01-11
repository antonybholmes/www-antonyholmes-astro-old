import Header from "../components/header/header"
import type ILayoutProps from "../interfaces/layout-props"
import cn from "../lib/class-names"

interface IProps extends ILayoutProps {
  headerChildren?: any
}

export default function BaseLayout({
  title,
  tab,
  className,
  headerChildren,
  children,
}: IProps) {
  return (
    <>
      {/* <Meta />
      <Seo title={title} />*/}
      <Header title={title} tab={tab}>
        {headerChildren}
      </Header>

      <main className={cn("min-h-screen w-full", className)}>{children}</main>
      {/* <Footer className={footerClassName} /> */}
    </>
  )
}
