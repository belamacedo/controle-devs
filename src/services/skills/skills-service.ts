import { api } from "@/lib/axios";

export const skillsQuery = async () => {
  const response = await api.get("/skills");

  return response.data;
};
