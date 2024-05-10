import Header from "./Header";
import ProfilePicture from "./ProfilePicture";
import { BackgroundUrl } from "../../utils/constants";
function Firsthalf() {
    const backgroundImageUrl = BackgroundUrl;
    return (
      <div style={{
        backgroundImage: `url(${backgroundImageUrl})`, backgroundattachment: "fixed",
        backgroundPosition: "center 30%"
      }}>
        <Header />
        <ProfilePicture />
      </div>
    );
  
  }
export default Firsthalf;