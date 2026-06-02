import {Link} from "react-router-dom"

export default function LinkButton(url){
  return(
      <div className = "flex justify-center border border-red-200">
        <Link to = {url}>
        Github
        </Link>
      </div>
  )
}