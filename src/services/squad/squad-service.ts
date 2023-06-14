import { api } from "@/lib/axios";

export const squadQuery = async () => {
  const response = await api.get("/squad");

  return response.data;
};
