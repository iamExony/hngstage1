import Pic from "../../assets/profile__img.png"
import Share from "../../assets/shareM.png"
import Share2 from "../../assets/Icon2.png"
import "./profile.css"

function Profile({slackName}) {

  return (
    <div className="profile">
      <a href="#" id="share"><img src={Share} alt="share"/></a>
      <a href="#" id="share2"><img src={Share2} alt="share"/></a>
      <div className="profile_img_section">
        <img id="profile__img" src={Pic} alt="profile_img" />
      </div>
      <h1 id="twitter">Eze Onyemaechi</h1>
      <h1 id="slack">{`${slackName}`}</h1>
    </div>
  )
}

export default Profile
