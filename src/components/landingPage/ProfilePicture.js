import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Profileurl } from '../../utils/constants';

function ProfilePicture() {
    return (
      <Container fluid >
        <Image src={Profileurl} width="141" height="130" alt="img" roundedCircle style={{ marginBottom: '10px' }} />
      </Container>
    );
  }

export default ProfilePicture;