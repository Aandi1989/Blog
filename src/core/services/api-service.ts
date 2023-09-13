import axios, { AxiosResponse } from "axios";
import { User } from "@core/store";
import { Post } from "@core/store";
import { Todo } from "@core/store";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: (): Promise<AxiosResponse<User[]>> => axios.get<User[]>("/users"),
  getAllTodos: (): Promise<AxiosResponse<Todo[]>> => axios.get<Todo[]>("/todos"),
  getAllPosts: (): Promise<AxiosResponse<Post[]>> => axios.get<Post[]>("/posts"),
  getUserById: (id: string): Promise<AxiosResponse<User>> => axios.get<User>(`/users/${id}`),
  getTodosByUserId: (id: string): Promise<AxiosResponse<Todo[]>> => axios.get<Todo[]>(`/todos?userId=${id}`),
  getPostsByUserId: (id: string): Promise<AxiosResponse<Post[]>> => axios.get<Post[]>(`/posts?userId=${id}`),
};

export default ApiService;
