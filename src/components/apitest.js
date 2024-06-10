import React, { useEffect, useState } from "react";
import { useGetAllFoodQuery } from "../features/food/foodApiSlice"

const Food = () => {

  const { data, error, isLoading } = useGetAllFoodQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);


  // useEffect( () => {
  //     const fetchData = async () => {
  //         try{

  //             const resp = await fetch('http://localhost:2500/food');
  //             if (!resp.ok){
  //                 throw new Error('Failed to fetch data');
  //             }

  //             const result = await resp.json();
  //             setData(result);
  //         }catch (error){
  //             setError(error.message);
  //         } finally{
  //             setIsLoading(false);
  //         }
  //     };

  //     fetchData();
  // },[]);

  return (

    <div>
      <h1>Food List</h1>
      <ul>
        {data.map((foodItem) => (
          <li key={foodItem.__id}>{foodItem.foodName}</li>
        ))}
      </ul>
    </div>
  );
        // <div>
        //   <h2>API Data</h2>
        //   {isLoading && <p>Loading...</p>}
        //   {error && <p>Error: {error}</p>}
        //   {data && (
        //     <ul>
        //       {data.map((foodItem,index) => (
        //         <p key={foodItem._id}>{foodItem.foodName} : {foodItem.description}</p>

        //       ))}
        //     </ul>
        //   )}
        // </div>

}

export default Food;