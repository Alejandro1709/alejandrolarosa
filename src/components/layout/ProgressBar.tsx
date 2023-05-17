type ProgressBarProps = {
  current: number;
};

function ProgressBar({ current }: ProgressBarProps) {
  return (
    <div className='relative h-6 w-2/4 overflow-hidden rounded-full border border-white text-black transition-all duration-300'>
      <span
        className={`absolute h-full w-[${current}px] bg-white text-center text-sm`}
      >
        {current}%
      </span>
    </div>
  );
}

export default ProgressBar;
