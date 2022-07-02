import { useEffect } from 'react';
import useSelectCoin from '../hooks/useSelectCoin';
import { currencies } from '../data/currencies.js';
import styled from '@emotion/styled';

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

const Form = () => {
  const [coin, SelectCoin] = useSelectCoin('Select your currency', currencies);
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.Data);
    };
    consultAPI();
  }, []);

  return (
    <form>
      <SelectCoin />

      {/* <SelectCrypto /> */}
      <InputSubmit type='submit' value='Convert' />
    </form>
  );
};

export default Form;
