type SkillCardProps = {
  children: React.ReactNode;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

function SkillCard({ children, Icon }: SkillCardProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 rounded-lg bg-[#181818] p-4 shadow-lg'>
      <h3 className='text-center text-2xl font-medium text-white'>
        {children}
      </h3>
    </div>
  );
}

export default SkillCard;
