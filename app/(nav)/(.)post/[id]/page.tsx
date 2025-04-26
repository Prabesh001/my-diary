import React from "react";
import PostModalComponent from "./PostModalComponent";

const ModalPost = async ({ params }: { params: { id: number } }) => {
  const param = await params;
  const id = param?.id;
  return (
      <PostModalComponent id={id} />
  );
};

export default ModalPost;
