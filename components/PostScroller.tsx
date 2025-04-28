import React from "react";
import UsersPost from "./UsersPost";
import Link from "next/link";

const PostScroller = ({ posts }) => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {posts.map(
        ({ _id, username, profile, time, description, emotion, image }) => (
          <Link href={`/post/${_id}`} key={_id}>
            <UsersPost
              key={_id}
              _id={_id}
              username={username}
              profile={profile}
              time={time}
              emotion={emotion}
              description={description}
              image={image}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default PostScroller;
