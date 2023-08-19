import { Circles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles_loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Container>
  );
};

export default Loader;
