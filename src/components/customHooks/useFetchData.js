import { useEffect, useState} from 'react';
import Axios from 'axios';

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    Axios({
      url: endpoint,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData, endpoint]);

  return data;
};

// export default useFetchData;