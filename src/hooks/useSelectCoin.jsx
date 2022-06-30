import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
`;

const useSelectCoin = (label, coins) => {
  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value=''>Select</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
      select
    </>
  );
  return [SelectCoin];
};

export default useSelectCoin;
