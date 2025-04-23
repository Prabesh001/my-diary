import Image, { StaticImageData } from "next/image";
import React from "react";
import avatar from "@/public/avatar.jpg";

interface avatar {
  src?: string | StaticImageData;
  alt: string;
  size?: number;
}

const Avatar = ({ src, alt, size = 40 }: avatar) => {
  return (
    <Image
      style={{
        width: size,
        aspectRatio: 1,
        borderRadius: "50%",
        objectFit: "cover",
      }}
      src={src || avatar}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
