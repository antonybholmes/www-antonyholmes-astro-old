import IImageLoadProps from "./image-load-props"

export default interface IImageProps extends IImageLoadProps {
  size?: number[]
  sizes?: [number, number][]
}
