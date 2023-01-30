import CheckIcon from "../../icons/check"
import CloseIcon from "../../icons/close"
import IPostProps from "../../interfaces/post-props"
import Accordion from "../accordion"
import BaseCol from "../base-col"
import HCenterRow from "../h-center-row"
import VCenterRow from "../v-center-row"
import StarRating from "./star-rating"

export default function ProsAndCons({ post }: IPostProps) {
  return (
    <BaseCol className="gap-y-8">
      <VCenterRow className="gap-x-4">
        <span>My rating</span>
        <StarRating rating={post.data.rating} />
        <VCenterRow className="gap-x-1 text-slate-400">
          <span className="text-xl font-bold text-blue-600">
            {post.data.rating}
          </span>
          <span>/</span>
          <span className="text-sm">5</span>
        </VCenterRow>
      </VCenterRow>

      <BaseCol className="rounded-lg border border-slate-200 dark:border-white/20">
        <Accordion
          title="Pros & Cons"
          isExpanded={true}
          btnClassName="rounded-none"
        >
          <div className="my-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ul className="flex flex-col gap-y-2 text-sm">
              {post.data.pros.map((pro: string, index: number) => {
                return (
                  <li
                    className="flex flex-row items-center gap-x-2"
                    key={index}
                  >
                    <HCenterRow className="h-4 w-4 shrink-0 items-center rounded-full bg-emerald-400 stroke-white">
                      <CheckIcon className="w-4 stroke-2" />
                    </HCenterRow>

                    <div>{pro}</div>
                  </li>
                )
              })}
            </ul>

            <ul className="flex flex-col gap-y-2 text-sm">
              {post.data.cons.map((con: string, index: number) => {
                return (
                  <li
                    className="flex flex-row items-center gap-x-2"
                    key={index}
                  >
                    <HCenterRow className="h-4 w-4 shrink-0 items-center rounded-full bg-rose-400 stroke-white">
                      <CloseIcon className="w-3 stroke-2" />
                    </HCenterRow>

                    <div>{con}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Accordion>

        <Accordion
          title="Details"
          isExpanded={true}
          btnClassName="rounded-none"
        >
          <ul className="my-2 flex list-inside list-disc flex-col gap-y-1 text-sm">
            {post.data.details.map((detail: string, index: number) => {
              return <li key={index}>{detail}</li>
            })}
          </ul>
        </Accordion>
      </BaseCol>
    </BaseCol>
  )
}
