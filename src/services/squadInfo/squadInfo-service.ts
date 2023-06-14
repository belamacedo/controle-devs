import { api } from "@/lib/axios";

export const getSquadInfoQuery = async () => {
  const response = await api.get("/squadInfo");

  return response.data;
};
