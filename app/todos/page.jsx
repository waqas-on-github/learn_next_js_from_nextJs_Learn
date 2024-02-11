export const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("failed to get todos");
  console.log(res);
  return res.json();
};

const page = async () => {
  const todos = await getTodos();

  return (
    <div className="container p-10">
      <h1 className="font-bold p-4 text-[30px] ">Todos</h1>
      {todos.slice(0, 10).map((todo) => {
        return (
          <div className="p-2" key={todo.id}>
            {" "}
            {todo.title}
          </div>
        );
      })}
    </div>
  );
};

export default page;
