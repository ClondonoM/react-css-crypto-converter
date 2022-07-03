import styled from '@emotion/styled';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Text = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
  display: block;

  width: 120px;
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Image
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='crypto symbol'
      />
      <div>
        <Price>
          Price: <span>{PRICE}</span>
        </Price>
        <Text>
          High Day Price: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Low Day Price: <span>{LOWDAY}</span>
        </Text>
        <Text>
          24 Hours Change Price: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last Update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
