import React from "react";
import UsersPost from "./UsersPost";
import posts from "@/data/posts.json";

const PostScroller = () => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {posts.map(
        ({ _id, username, profile, time, description, emotion, image }) => (
          <UsersPost
            key={_id}
            username={username}
            profile={profile}
            time={time}
            emotion={emotion}
            description={description}
            image={image}
          />
        )
      )}
    </div>
  );
};

export default PostScroller;
