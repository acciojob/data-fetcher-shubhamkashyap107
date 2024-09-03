
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {


  const[text, setText] = useState()

  // useEffect(() => {
  //   const getData = async() => {
  //     const data = await fetch("https://dummyjson.com/products")
  //     const json = await data.json()
  //     setText(json)
  //   }
  //   getData()
  // }, [])

  useEffect(() => {
    const getData = () => {
      fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((json) => {
          setText(json);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    getData();
  }, []);



  return (
    <div>
        <pre>
         {JSON.stringify(text, null, 2)}
        </pre>
    </div>
  )
}

export default App
