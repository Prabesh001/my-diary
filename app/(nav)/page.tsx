import EventCard from "@/components/EventCard";
import NewPost from "@/components/NewPost";
import PostScroller from "@/components/PostScroller";
import posts from "@/data/posts";

const Home = () => {
  return (
    <div className="w-full flex gap-2">
      <div className="flex w-full flex-col">
        <NewPost />
        <PostScroller posts={posts} />
      </div>
      <div className="min-w-[250px] h-screen sticky top-20 hidden lg:flex px-2 py-1 bg-gray-900 rounded">
        <div className="overflow-y-auto w-full noscroll">
          <h1 className="text-xl font-bold">Events</h1>
          <div className="flex flex-col gap-2 p-1">
            {Array(18)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>
        </div>
      </div>
      <div className="min-w-[250px] bg-white h-screen hidden lg:flex"></div>
    </div>
  );
};
export default Home;
