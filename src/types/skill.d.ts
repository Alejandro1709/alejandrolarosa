export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'DevOps'
  | 'Testing'
  | 'Other'
  | 'Language'
  | 'Design';

export default interface ISkill {
  id: number;
  name: string;
  category: SkillCategory;
}
