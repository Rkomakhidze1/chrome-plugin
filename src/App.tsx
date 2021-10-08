import React, { useEffect, useState } from 'react';

function App() {
  const [storyCount, setStoryCount] = useState(0);
  const url = 'http://localhost:3001/test';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((storyList) => {
        console.log(storyList);
        setStoryCount(storyList.length);
      })
      .catch((e) => {
        console.log('something went wrong');
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>Hello chrome</h1>
      <p>story count: {storyCount}</p>
    </>
  );
}

export default App;
