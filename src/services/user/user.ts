import { SquadInfo } from "../squadInfo/squadInfo";

export interface User {
  fullName: string;
  email: string;
  jobPosition: string;
  hardSkills: { value: string; label: string; }[];
  squadName: string;
  squad?: string;
  bio?: string;
  inactiveUser?: boolean;
  imagePath?: File | null;
}
