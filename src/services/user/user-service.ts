import { api } from "@/lib/axios";
import { User } from "./user";

const ENDPOINT = "users";

export const getUsersQuery = async () => {
  const response = await api.get(ENDPOINT);
  return response.data;
};

export const addNewUserMutation = async (data: User) => {
  await api.post(ENDPOINT, data);
};

export const deleteUserMutation = async (id: number) => {
  await api.delete(`${ENDPOINT}/${id}`);
};

export const updateUserMutation = async (id: number, data: User) => {
  await api.put(`${ENDPOINT}/${id}`, data);
};

export const getUserIdQuery = async (id: number) => {
  const response = await api.get(`${ENDPOINT}/${id}`);
  return response.data;
};
