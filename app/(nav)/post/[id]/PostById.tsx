import UsersPost from "@/components/UsersPost";
import { fetchById } from "@/functions/fetchById";
import React from "react";

const PostById = ({ id }: { id: number }) => {
  const data = fetchById(id);
  return (
    <div>
      <UsersPost
        key={data?._id}
        _id={data?._id}
        username={data?.username}
        profile={data?.profile}
        time={data?.time}
        emotion={data?.emotion}
        description={data?.description}
        image={data?.image}
      />
    </div>
  );
};

export default PostById;
