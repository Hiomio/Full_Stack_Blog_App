import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">BlogHorizon</span>
      </div>
      <img
      className="headerImg" src= "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

      about="alt"
      />
    </div>
  ) 
}