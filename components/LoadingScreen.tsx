import Spinner from "./Spinner";

const LoadingScreen = () => {
  return (
    <div className="h-screen fixed z-imp overflow-hidden text-white bg-[#000000d3] w-screen inset-0 flex items-center justify-center gap-2">
      <Spinner />
      <div>Loading...</div>
    </div>
  );
};

export default LoadingScreen;
