import { ImgHTMLAttributes } from "react";

export interface ImageThumbProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  altText: string;
  aspectRatio?: string;
  placeholder?: string;
  className?: string;
}