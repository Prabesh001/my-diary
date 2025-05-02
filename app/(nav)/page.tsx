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

      {/* Event Section */}
      <section className="min-w-[250px] h-screen sticky top-20 hidden lg:flex px-2 py-1 bg-gray-900 rounded flex-col gap-2 overflow-y-scroll noscroll pb-22">
        {/* Event Group */}
        <div className="w-full bg-gray-800 h-max p-1 rounded-sm">
          <h1 className="text-xl font-bold">Events</h1>
          <div className="flex flex-col gap-2 p-1">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>
        </div>

        {/* Another Group */}
        <div className="w-full bg-gray-800 h-max p-1 rounded-sm">
          <h1 className="text-xl font-bold">Birthdays</h1>
          <div className="flex flex-col gap-2 p-1">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>
        </div>
      </section>

      {/* Group Section */}
      <section className="min-w-[250px] h-screen sticky top-20 hidden lg:flex px-2 py-1 bg-gray-900 rounded flex-col gap-2 overflow-y-scroll noscroll pb-22">
        {/* Event Group */}
        <div className="w-full bg-gray-800 h-max p-1 rounded-sm">
          <h1 className="text-xl font-bold">Community Chats</h1>
          <div className="flex flex-col gap-2 p-1">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>
        </div>

        {/* Another Group */}
        <div className="w-full bg-gray-800 h-max p-1 rounded-sm">
          <h1 className="text-xl font-bold">Group Chats</h1>
          <div className="flex flex-col gap-2 p-1">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
