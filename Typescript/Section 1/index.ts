import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
} //This interface allows us to make a "template" for the properties and datatypes that exist in an object

axios.get(url).then((response) => {
  const toDo = response.data as Todo;

  const id = toDo.id;
  const title = toDo.title;
  const completed = toDo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
};
