import { StaticImageData } from "next/image";

export interface UserPostType {
  _id: string | number | undefined;
  username: string | undefined;
  profile?: string;
  time: string | undefined;
  emotion?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: string | StaticImageData | any;
}
