import useSWR from "swr";

function App() {
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

export default App;
