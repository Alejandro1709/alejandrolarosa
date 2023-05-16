import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return <section className='border border-slate-700'>{children}</section>;
}

export default Section;
