import { SquadInfo } from "../squadInfo/squadInfo";

export interface User {
  id: number;
  fullName: string;
  email: string;
  description: string;
  hardSkills: string[];
  squad: SquadInfo;
  biography?: string;
  inactiveUser?: boolean;
  imagePath?: string | File | null;
}
