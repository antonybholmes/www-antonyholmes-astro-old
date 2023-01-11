import getCopyright from "../lib/copyright"
import { INFO_LINKS } from "../menus"
import ContentDiv from "./content-div"
import WhiteLink from "./link/white-link"

const Footer = () => (
  <footer className="pt-32 pb-16">
    <ContentDiv>
      <></>
      <>
        <ul className="flex flex-row justify-center gap-x-8 border-t border-slate-200 pt-16 text-sm  font-semibold">
          <li>{getCopyright()}</li>
        </ul>
      </>
      <></>
    </ContentDiv>

    <ContentDiv className="pt-8">
      <></>
      <ul className="flex flex-col items-center text-xs">
        <li>
          <ul className="flex flex-row gap-y-4 gap-x-8">
            {INFO_LINKS.map(
              (link: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <WhiteLink
                    href={link.url}
                    ariaLabel={`View ${link.name}`}
                    underline={true}
                  >
                    {link.name}
                  </WhiteLink>
                </li>
              )
            )}
          </ul>
        </li>
        {/* <ul className="flex flex-row justify-center gap-x-8">
          <li>{getCopyright()}</li>
        </ul> */}
      </ul>
      <></>
    </ContentDiv>
  </footer>
)

export default Footer
