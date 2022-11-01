
import "./link_component.css"

function LinkComponent({name,id,address,title}) {

  return (
    <div className="link__component">
        <a id={`${id}`} title={`${title ? title : ""}`} href={`${address}`} target="__blanck">{name}</a>
    </div>
  )
}

export default LinkComponent
