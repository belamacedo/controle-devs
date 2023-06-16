import { api } from '@/lib/axios';
import { User } from './user';

const ENDPOINT = 'users';

export const getUsers = async () => {
  const response = await api.get(ENDPOINT);
  return response.data;
};

export const addNewUserMutation = async (data: User) => {
  await api.post(ENDPOINT, data);
};

export const deleteUser = async (id: number) => {
  await api.delete(ENDPOINT);
};
