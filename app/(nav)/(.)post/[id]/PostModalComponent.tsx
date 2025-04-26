"use client";
import Popup from "@/components/Popup";
import React from "react";
import PostById from "../../post/[id]/PostById";
import { useRouter } from "next/navigation";

const PostModalComponent = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <Popup
      isOpen={true}
      content={<PostById id={id} />}
      onClose={() => {
        router.back();
      }}
    />
  );
};

export default PostModalComponent;
