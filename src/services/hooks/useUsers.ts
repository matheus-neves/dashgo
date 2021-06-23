import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: String;
  email: string;
  createdAt: string;
  formattedCreatedAt?: string;
}

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');

  const users = data.users.map(user => ({
    ...user,
    formattedCreatedAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  })
}