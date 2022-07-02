import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectCoin from '../hooks/useSelectCoin';
import { currencies } from '../data/currencies.js';
import Error from './Error';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCoins }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [coin, SelectCoin] = useSelectCoin('Select your currency', currencies);
  const [cryptoCoin, SelectCryptoCoin] = useSelectCoin(
    'Select your crypto',
    cryptos
  );
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const response = await fetch(url);
      const result = await response.json();
      const arrayCryptos = result.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return object;
      });
      setCryptos(arrayCryptos);
    };
    consultAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptoCoin].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({ coin, cryptoCoin });
  };

  return (
    <>
      {error && <Error>please select currency and crypto</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoin />
        <SelectCryptoCoin />

        <InputSubmit type='submit' value='Convert' />
      </form>
    </>
  );
};

export default Form;
