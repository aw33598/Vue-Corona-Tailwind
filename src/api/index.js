import axios from 'axios';

export const getCovidData = async (country) => {

  const url = 'https://covid19.mathdro.id/api';

  if (country === "Global") {
    const data = await axios.get(url);
    return data.data;
  } else {
    const data = await axios.get(`${url}/countries/${country}`);
    return data.data;
  }
}