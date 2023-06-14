import { api } from "@/lib/axios";

export const getSkillsQuery = async () => {
  const response = await api.get("/skills");

  return response.data;
};
