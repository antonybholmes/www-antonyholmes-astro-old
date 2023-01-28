import { useEffect, useMemo, useState } from "preact/hooks"
import { memo } from "preact/compat"
import IChildrenProps from "../interfaces/children-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import { parse } from "../lib/path"
import {
  getPlaceholderSrc,
  getSizes,
  getSizeStr,
  getSrc,
  getSrcSet,
} from "./base-image"

export interface IPlaceholderProps extends IChildrenProps {
  containerClassName?: string
  imgClassName?: string
}

interface IProps extends IImageProps, IPlaceholderProps {}

//based on ideas from https://blog.logrocket.com/progressive-image-loading-react-tutorial/#:~:text=With%20progressive%20image%20loading%2C%20the,images%20are%20coming%20up%20momentarily.

export default memo(function PlaceholderImage({
  src,
  alt,
  size = [640, 320],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  className,
  containerClassName,
  imgClassName,
  style,
  children,
}: IProps) {
  const p = useMemo(() => parse(src), [src])

  const currentSrc = useMemo(
    () => getSrc(src, p.name, p.dir, p.ext, size),
    [src]
  )

  const placeholderSrc = useMemo(
    () => getPlaceholderSrc(src, p.name, p.dir, p.ext),
    [src]
  )

  const currentSizes = useMemo(
    () => (sizes.length === 0 ? getSizes(size) : sizes),
    [src]
  )

  const currentSrcSet = useMemo(
    () => getSrcSet(src, p.name, p.dir, p.ext, currentSizes),
    [src]
  )

  const currentSizeStr = useMemo(() => getSizeStr(size), [src])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Based on https://codeburst.io/how-to-progressively-load-images-in-react-using-hooks-80c50fd447cd

    // start loading original image
    const imageToLoad = new Image()
    imageToLoad.src = currentSrc
    imageToLoad.onload = () => {
      setIsLoaded(true)
    }
  }, [src])

  return (
    <figure
      className={cn(
        "relative z-20 overflow-hidden",
        className,
        containerClassName
      )}
    >
      <img
        src={placeholderSrc}
        width={size[0]}
        height={size[1]}
        loading={loading}
        decoding={decoding}
        alt={alt}
        className={cn("absolute z-10 h-full w-full object-cover", [
          isLoaded,
          "placeholder-hide invisible opacity-0",
          "opacity-100",
        ])}
      />

      <picture>
        <img
          src={currentSrc}
          srcSet={currentSrcSet}
          sizes={currentSizeStr}
          width={size[0]}
          height={size[1]}
          className={cn(
            "trans-ani-700 absolute z-0 h-full w-full object-cover transition-placeholder",
            className,
            imgClassName
          )}
          style={style}
          loading={loading}
          decoding={decoding}
          alt={alt}
        />
      </picture>

      {children && children}
    </figure>
  )
})
