import axios from 'axios';
import { useEffect, useState } from 'react';

const usefetchData = (fromcurrency) => {
  const [dataOBJ, setDataOBJ] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromcurrency}.json`
        );
        setDataOBJ(response.data[fromcurrency]);
      } catch (error) {
        console.error(error);
      }
    };

    console.log('useeffect is running for fetching', fromcurrency);
    fetchData();
  }, [fromcurrency]);

  return dataOBJ;
};

export default usefetchData;
