import { api } from "@/lib/axios";

export const getSquadQuery = async () => {
  const response = await api.get("/squad");

  return response.data;
};
