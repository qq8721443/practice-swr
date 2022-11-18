import { useState } from "react";
import useSWR, { preload } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Info() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>error occured</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default function PreloadTestPage() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        onMouseOver={() =>
          preload("https://jsonplaceholder.typicode.com/todos", fetcher)
        }
      >
        데이터 아무거나 불러오기
      </button>
      {show && <Info />}
    </div>
  );
}
