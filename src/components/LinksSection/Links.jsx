import LinkComponent from "./LinkComponent"
import "./links.css"
import git from "../../assets/Icon.png"
import slackIcon from "../../assets/slack.png"

function Links({slackName}) {
    const linkArray = [
        {name:"Twitter Link",id:"",address:"https://twitter.com/ezeonyemaechi51",title:""},
        {name:"Zuri Team",id:"btn__zuri",address:"https://training.zuri.team/",title:""},
        {name:"Zuri Books",id:"books",address:"http://books.zuri.team",title:"this is where you find books about design and coding"},
        {name:"Python Books",id:"book__python",address:`https://books.zuri.team/python-for-beginners?ref_id=${slackName}`,title:""},
        {name:"Background Check for Coders",id:"pitch",address:"https://background.zuri.team",title:""},
        {name:"Design Books",id:"book__design",address:"https://books.zuri.team/design-rules",title:""},
]

  return (
    <div className="links">
        {linkArray.map((link)=>(
            <LinkComponent name={link.name} id={link.id} address={link.address} title={link.title} />
        ))}
        <div className="social__links">
            <a href="https://slack.com/exony"><img src={slackIcon} alt="slack"/></a>
            <a href="https://github.com/iamExony"><img src={git} alt="git"/></a>
        </div>
    </div>
  )
}

export default Links
