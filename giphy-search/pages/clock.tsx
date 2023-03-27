import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    const fetchit = async() => { 

   
        const _MY_KEY="kTMbZAITpPus5hBdq9q9rx8jK1tghIob";
        const url = "https://api.giphy.com/v1/gifs/search"
      // const queryStrong=`?api_key=${_MY_KEY}&q=sunsets&limit=25&offset=0&rating=g&lang=en`'
      // const queryStrong=`?api_key=${_MY_KEY}&q=sunsets&limit=25&offset=0&rating=g&lang=en`
        const response = await fetch(url+`?api_key=${_MY_KEY}&q=sunsets&limit=25&offset=0&rating=g&lang=e`);
        console.log(url+`?api_key=${_MY_KEY}&q=sunsets&limit=25&offset=0&rating=g&lang=e`)
        console.log(response)
        console.log(await response.json());
    
      
      
    }


  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
