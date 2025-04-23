import NewPost from "@/components/NewPost";
import PostScroller from "@/components/PostScroller";

const Home = () => {
  return (
    <div className="w-full flex gap-2">
      <div className="flex w-full flex-col">
        <NewPost />
        <PostScroller />
      </div>
      <div className="w-[300px] bg-white h-screen hidden lg:flex"></div>
      <div className="w-[300px] bg-white h-screen hidden lg:flex"></div>
    </div>
  );
};
export default Home;
