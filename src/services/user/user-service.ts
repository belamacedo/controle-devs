import { api } from "@/lib/axios";
import { User } from "./user";
import { SquadInfo } from "../squadInfo/squadInfo";

const ENDPOINT = "users";

export const getUsersQuery = async () => {
  const response = await api.get(ENDPOINT);
  return response.data;
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

const generateRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 100) + 1;
  return `https://randomuser.me/api/portraits/women/${randomIndex}.jpg`;
};

export const addNewUserMutation = async (squadInfo: SquadInfo, data: User) => {
  await api.post(ENDPOINT, {
    ...data,
    squad: squadInfo,
    imagePath: data.imagePath !== null ? generateRandomImage() : null,
  });
};
