import axios from "axios";

const doGetDataPost = async () => {
  const { data, status } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (status !== 200) throw new Error(`[getDataPost] ${status}`);
  return data ?? [];
};

const doGetDetailPost = async (id: number | null) => {
  const { data, status } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (status !== 200) throw new Error(`[getDataPost] ${status}`);
  return data ?? {};
};

export { doGetDataPost, doGetDetailPost };
