export interface UserProps {
  id: number;
  imagePath: string;
  fullName: string;
  jobPosition: string;
  hardSkills: { value: string; label: string; }[];
  squad?: {
    squadName: string;
    squadLeaderName: string;
    squadMembers: string[];
  };
  bio?: string;
}
