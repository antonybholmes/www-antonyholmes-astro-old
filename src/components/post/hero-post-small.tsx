import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import BaseCol from "../base-col"
import CompactAvatars from "../person/compact-avatars"
import HTML from "../html"
import DateFormatter from "./date-formatter"
import PostCategoryLink from "./post-category-link"
import PostImage from "./post-image"
import PostTitleLink from "./post-title-link"
import CondComp from "../component"
import { getDateFromSlug } from "../../lib/slug"
import IImageLoadProps from "../../interfaces/image-load-props"

interface IProps extends IPostProps, IImageLoadProps {
  showAvatar?: boolean
}

export default function HeroPostSmall({
  post,
  showAvatar = true,
  loading = "lazy",
  className,
}: IProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-1 gap-y-2 md:grid-cols-4 md:gap-x-6 lg:grid-cols-5 xl:grid-cols-3",
        className
      )}
    >
      <div className="col-span-1">
        <PostImage
          post={post}
          className="h-48 w-full md:h-32"
          loading={loading}
        />
      </div>
      <BaseCol className="col-span-3 gap-y-1 lg:col-span-3 xl:col-span-2 ">
        <BaseCol>
          <PostCategoryLink post={post} textSize="text-xl md:text-base" />
          <PostTitleLink post={post} className="text-2xl lg:text-xl" />
        </BaseCol>
        {/* <CondComp cond={showDescription}>
          <HTML html={post.excerpt} className="text-sm text-slate-600" />
        </CondComp> */}

        <BaseCol className="xl:gap-y-1">
          <CondComp cond={showAvatar}>
            <CompactAvatars people={post.data.authors} showImages={false} />
          </CondComp>
          <DateFormatter date={getDateFromSlug(post.slug)} />
        </BaseCol>
      </BaseCol>
    </article>
  )
}
