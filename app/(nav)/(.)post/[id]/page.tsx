import React from "react";
import PostModalComponent from "./PostModalComponent";

const ModalPost = async ({ params }: { params: { id: string } }) => {
  
  const param = await params;
  const id = param?.id;
  return (
      <PostModalComponent id={Number(id)} />
  );
};

export default ModalPost;
