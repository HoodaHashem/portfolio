import SocialMedia from "./socialMedia";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="stickFollowMe">
      <SocialMedia />
      <p className="activeText">Follow Me</p>
    </div>
  );
};
export default Sidebar;
