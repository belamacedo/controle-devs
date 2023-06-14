import { api } from "@/lib/axios";

export const squadInfoQuery = async () => {
  const response = await api.get("/squadInfo");

  return response.data;
};
