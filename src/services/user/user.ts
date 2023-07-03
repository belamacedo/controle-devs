import { Option } from "@/models/Option";

export interface User {
  fullName: string;
  email: string;
  jobPosition: string;
  hardSkills: Option[];
  squadName: string;
  squad?: string;
  bio?: string;
  inactiveUser?: boolean;
  imagePath?: File | null;
}
