import axios from "axios";
import { User } from "@core/store";
import { Post } from "@core/store";
import { Todo } from "@core/store";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
  getAllTodos: () => axios.get<Todo[]>("/todos"),
  getAllPosts: () => axios.get<Post[]>("/posts"),
  getUserById: (id: string) => axios.get<User>(`/users/${id}`),
  getTodosByUserId: (id: string) => axios.get<Todo[]>(`/todos?userId=${id}`),
  getPostsByUserId: (id: string) => axios.get<Post[]>(`/posts?userId=${id}`),
};

export default ApiService;
