import Header from "./Header";
import ProfilePicture from "./ProfilePicture";
import profilepic from "../../assets/images/headersbg.jpg";
function Firsthalf() {
    const backgroundImageUrl = profilepic;
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