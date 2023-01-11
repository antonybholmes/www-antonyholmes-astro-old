import BaseRow from "../components/base-row"

interface IProps {
  children: any[]
}

const TwoThirdsColLayout = ({ children }: IProps) => (
  <BaseRow>
    <article className="w-full lg:w-2/3">{children[0]}</article>
    <div className="hidden w-1/3 pl-8 lg:block">{children[1]}</div>
  </BaseRow>
)

export default TwoThirdsColLayout
