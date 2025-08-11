import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Message component mounted');

    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      // console.log('onMouseMove', coords);
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove); //by reference

    return () => {
      console.log('Message component unmounted');

      window.removeEventListener('mousemove', onMouseMove); //by reference
    };
  }, []);

  return (
    <>
      <h3>User alreay exist</h3>
      {JSON.stringify(coords)}
    </>
  );
};
