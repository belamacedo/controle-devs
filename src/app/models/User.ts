export interface UserProps {
  id: number;
  imagePath: string;
  fullName: string;
  jobPosition: string;
  hardSkills: string[];
  squad?: {
    squadName: string ,
    squadLeaderName: string,
    squadMembers: string[],
  },
  bio?: string;
}
