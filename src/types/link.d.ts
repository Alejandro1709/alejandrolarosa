export default interface ILink {
  id: number;
  name: string;
  label: string;
  href: string;
}

export interface ISocialLink extends ILink {
  Icon: React.FC;
  href: string;
}
