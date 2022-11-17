import { Link } from "react-router-dom";
import useSWR from "swr";

export default function SecondPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>error occured</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div>
        {data.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <Link to="/">Go to Main Page</Link>
    </>
  );
}
