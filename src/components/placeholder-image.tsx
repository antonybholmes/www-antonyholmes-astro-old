import { gsap } from "gsap"
import { useEffect, useRef } from "preact/hooks"
import type IClassProps from "../interfaces/class-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import BaseImage from "./base-image"

export interface IProps extends IImageProps, IClassProps {
  containerClassName?: string
  imgClassName?: string
  duration?: number
}

export default function PlaceholderImage({
  src,
  alt,
  size = [640, 320],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  className,
  containerClassName,
  imgClassName,
  duration = 0.4,
  style,
}: IProps) {
  //const [isLoaded, setIsLoaded] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    gsap.timeline().to(
      containerRef.current,
      {
        duration: duration,
        opacity: 1,
      },
      0
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("opacity-0", className, containerClassName)}
    >
      {/* <div
        style={{ gridArea: "1/1" }}
        className={cn(
          "delay-1000 duration-1000 transition-opacity h-full w-full backdrop-blur",
          [isLoaded, "opacity-0"]
        )}
      /> */}

      {/* <div ref={ref1}
        className={cn("h-full w-full"
        )}
        style={{ gridArea: "1/1" }}
      > */}
      <BaseImage
        src={src}
        size={size}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        alt={alt}
        className={cn(className, imgClassName)}
        style={style}
        //onLoad={() => setIsLoaded(true)}
      />
      {/* </div> */}
    </div>
  )
}
