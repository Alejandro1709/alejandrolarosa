type ProgressBarProps = {
  current: number;
};

function ProgressBar({ current }: ProgressBarProps) {
  return (
    <div className='relative h-6 w-2/4 overflow-hidden rounded-full border border-white text-black transition-all duration-300'>
      <span
        className={`absolute flex h-full items-center justify-center bg-white text-center text-sm`}
        style={{ width: `${current}%` }}
      >
        {current}%
      </span>
    </div>
  );
}

export default ProgressBar;
