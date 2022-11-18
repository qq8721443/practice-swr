import { Link } from "react-router-dom";
import useSWR from "swr";

export default function MainPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>error occured</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div>Data List</div>
      <Link to="/second">Go to Second Page</Link>
      <Link to="/preload">Go to Preload Page</Link>
      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.completed}</div>
          </div>
        ))}
      </div>
    </>
  );
}
