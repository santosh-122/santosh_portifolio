import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import picture from "../../assets/images/_DSC07031.jpg"

function ProfilePicture() {
    return (
      <Container fluid >
        <Image src={picture} width="141" height="130" alt="img" roundedCircle style={{ marginBottom: '10px' }} />
      </Container>
    );
  }

export default ProfilePicture;