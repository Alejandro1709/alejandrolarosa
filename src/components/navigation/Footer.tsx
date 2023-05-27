import getYear from "@/utils/getCurrentYear"
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaTiktok, FaTwitch } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex flex-row bg-slate-800 justify-between items-center p-4 rounded shadow">
      <p className="font-medium">&copy; {getYear()} Alejandro LR.</p>
      <div className="flex flex-row gap-4">
        <a href="https://www.github.com/Alejandro1709" target="_blank" className="hover:text-blue-400">
          <AiFillGithub />
        </a>
        <a href="https://www.youtube.com/@alefsdev" target="_blank" className="hover:text-blue-400">
          <AiFillYoutube />
        </a>
        <a href="https://www.twitch.tv/alefsdev" target="_blank" className="hover:text-blue-400">
          <FaTwitch />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-la-rosa-4497a995" target="_blank" className="hover:text-blue-400">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer