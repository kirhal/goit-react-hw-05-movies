import { useState } from 'react';
import { fetchTrendingDay } from '../instruments/fetchAPI';

export default function Home() {
  const [trending, setTrnding] = useState(fetchTranding());

  fetchTrendingDay().then(console.log);

  const fetchTranding = async () => {
    try {
      return await fetchTrendingDay();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Tranding today</h1>
      <ul>{trending.map()}</ul>
    </>
  );
}
