import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import DateFormatter from "./date-formatter"
import Avatars from "../person/avatars"
import VCenterRow from "../v-center-row"
import IReadingStats from "../../interfaces/IReadingStats"

interface IProps extends IPostProps {
  stats: IReadingStats
}

const PostDetailsHoz = ({ post, stats, className }: IProps) => (
  <section
    className={cn(
      "flex flex-row items-center justify-between border-b-2 border-blue-500 pb-4",
      className
    )}
  >
    <Avatars authors={post.authors} />

    <div className="flex flex-col gap-2 border-l border-slate-300 py-1 pl-4 text-sm text-slate-500 md:flex-row md:items-center md:gap-3 md:pl-6">
      <DateFormatter date={post.fields.date} />
      <span className="hidden h-1 w-1 rounded-full bg-slate-400 md:inline" />
      <span>{stats.text}</span>
    </div>
    {/* <PostTags post={post} /> */}

    {/* <PostSocialMedia post={post} /> */}
  </section>
)

export default PostDetailsHoz
