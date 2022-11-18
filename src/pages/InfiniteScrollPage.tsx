import React from "react";
import useSWRInfinite from "swr/infinite";

const getKey = (postIndex: any, previousPostData: any) => {
  return `https://jsonplaceholder.typicode.com/todos/${postIndex + 1}`;
};

export default function InfiniteScrollPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    fetcher
  );

  if (error) return <div>error occured</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button
        disabled={isLoading ? true : false}
        onClick={() => setSize(size + 1)}
      >
        더 불러오기
      </button>
    </div>
  );
}
