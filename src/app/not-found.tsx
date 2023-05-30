import Link from "next/link"

export const metadata = {
  title: 'Alejandro LR | 404'
}

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">404 Page Not Found</h1>
        <p className="max-w-md">The page you&apos;re trying to seek does not exists.</p>
      </div>
      <Link className="p-2 bg-slate-800 rounded-md hover:bg-slate-700" href='/'>Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage