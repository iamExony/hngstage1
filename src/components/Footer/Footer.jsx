
import I4G from "../../assets/I4G.png"
import Zuri from "../../assets/zurilogo.png"
import "./footer.css"

function Footer() {

  return (
    <div className="footer">
        <div>
          <a><img src={Zuri} alt="Zuri"/></a>
          <h1 id="footer__text">HNG Internship 9 Frontend Task</h1>
          <a><img src={I4G} alt="I4G"/></a>
        </div>
        
    </div>
  )
}

export default Footer
