export default interface IProject {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  status: 'Completed' | 'In Progress' | 'Queue' | 'Cancelled';
  repoUrl?: string;
  liveUrl?: string;
  tags: string[];
}
