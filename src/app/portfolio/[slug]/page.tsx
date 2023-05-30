import Link from "next/link";

export const metadata = {
  title: 'Alejandro LR | Get That Home',
  description: ''
};

function ProjectPage() {
  return (
    <article className="flex flex-col gap-2">
      <header className="flex flex-col gap-2">
        <div className="h-[135px] bg-slate-800 border border-slate-700">IMAGE</div>
        <div className="flex flex-row gap-2">
          <Link href='/portfolio' className="text-md flex-1 cursor-pointer border border-slate-700 bg-slate-800 p-2.5 text-center hover:border-white">Go Back</Link>
          <button className="text-md flex-1 cursor-pointer border border-slate-700 bg-slate-800 p-2.5 text-center hover:border-white">Open Project</button>
          <button className="text-md flex-1 cursor-pointer border border-slate-700 bg-slate-800 p-2.5 text-center hover:border-white">Github Repo</button>
        </div>
      </header>
    </article>
  )
}

export default ProjectPage