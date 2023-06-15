import { SquadInfo } from "../squadInfo/squadInfo";

export interface User {
  fullName: string;
  email: string;
  description: string;
  hardSkills: string[];
  squad: SquadInfo[];
  biography?: string;
  inactiveUser?: boolean;
  imagePath?: string | null;
}
