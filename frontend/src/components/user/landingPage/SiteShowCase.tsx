import { FC } from "react"
import banck_img from "/blank-h9v8oske8iey8nkq.jpg"

const SiteShowCase: FC = () => {
  return (
    <div className="flex flex-1 p-2">
    <img 
      src={banck_img}
      alt="Platform Dashboard"
      className="rounded-lg shadow-xl mx-auto max-h-[700px]"
    />
  </div>
  )
}

export default SiteShowCase
