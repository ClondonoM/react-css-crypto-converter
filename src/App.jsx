import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';
import CryptoImage from './img/imagen-criptos.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #57b9f8;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Link = styled.a`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
`;

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const convertCrypto = async () => {
        setLoading(true);
        setResult({});
        const { coin, cryptoCoin } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result.DISPLAY[cryptoCoin][coin]);
        setLoading(false);
      };
      convertCrypto();
    }
  }, [coins]);

  return (
    <Container>
      <Image src={CryptoImage} alt='Cryptos image' />
      <div>
        <Heading>Crypto Converter</Heading>
        <Link
          href='https://carlos-londono.dev/'
          target='_blank'
          rel='noreferrer'
        >
          by <span>carlos-londono.dev</span>{' '}
        </Link>
        <Form setCoins={setCoins} />
        {loading && <Spinner />}
        {result.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
}

export default App;
