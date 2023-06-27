import { Option } from "./Option";

export interface UserProps {
  id: number;
  imagePath: string;
  fullName: string;
  jobPosition: string;
  hardSkills: Option[];
  squad?: {
    squadName: string;
    squadLeaderName: string;
    squadMembers: string[];
  };
  bio?: string;
}
