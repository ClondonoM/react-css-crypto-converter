import styled from '@emotion/styled';

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <div>
      <p>
        Price: <span>{PRICE}</span>
      </p>
      <p>
        High Day Price: <span>{HIGHDAY}</span>
      </p>
      <p>
        Low Day Price: <span>{LOWDAY}</span>
      </p>
      <p>
        24 Hours Change Price: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Symbol: <span>{IMAGEURL}</span>
      </p>
      <p>
        Last Update: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Result;
