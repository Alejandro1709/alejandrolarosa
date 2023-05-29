import Skill from './Skill';

function Skills() {
  return (
    <ul className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
      <Skill language='Javascript' level={68} />
      <Skill language='Typescript' level={50} />
      <Skill language='Ruby' level={68} />
      <Skill language='Swift' level={65} />
      <Skill language='Objective-C' level={50} />

      <Skill language='React JS' level={78} />
      <Skill language='Next JS' level={78} />
      <Skill language='Redux' level={68} />
      <Skill language='Tailwind CSS' level={75} />
      <Skill language='Node JS' level={80} />

      <Skill language='TRPC' level={58} />
      <Skill language='Express JS' level={78} />
      <Skill language='Ruby On Rails' level={50} />
      <Skill language='Mongoose' level={75} />
      <Skill language='Prisma' level={75} />

      <Skill language='Jest' level={58} />
      <Skill language='Cypress' level={78} />
      <Skill language='Storybook' level={50} />
      <Skill language='MongoDB' level={75} />
      <Skill language='PostgreSQL' level={75} />

      <Skill language='MySQL' level={75} />
      <Skill language='Git' level={80} />
      <Skill language='Github' level={80} />
      <Skill language='Docker' level={55} />
    </ul>
  );
}

export default Skills;
