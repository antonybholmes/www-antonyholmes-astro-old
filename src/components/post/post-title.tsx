import IChildrenProps from "../../interfaces/children-props"

export default function PostTitle({ children }: IChildrenProps) {
  return (
    <h1 className="mb-12 text-4xl font-bold capitalize tracking-tighter md:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}
