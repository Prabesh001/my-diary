import posts from "@/data/posts.json";

export const fetchById = (id: number) => {
  const data = posts.filter((post) => post._id == id);
  if (data.length === 0) {
    return null;
  }
  return data[0];
};
