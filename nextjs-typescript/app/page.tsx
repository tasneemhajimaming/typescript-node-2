"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

interface Data {
  id: number;
  title: string;
  body: string;
}

export default function Home() {

  const [data, setData] = useState<Data[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  
  const myPlusFunction = (num1: number, num2: number) => {
    return num1 * num2;
  }

  const result = myPlusFunction(5, 158)

  console.log(data);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch(error) {
        console.error("Error fetching data: ",error);
      }
    }

    fetchData();

  }, [])

  return (
    <main>
      <p>My result:{result}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
