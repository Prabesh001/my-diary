import { StaticImageData } from "next/image";

export interface UserPostType {
  username: string;
  profile?: string;
  time: string;
  emotion?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: string | StaticImageData | any;
}
