import React from "react";
import PostById from "./PostById";

const page = async ({ params }: { params: { id: number } }) => {
  const param = await params;
  const id = param?.id;
  return <PostById id={id} />;
};

export default page;
