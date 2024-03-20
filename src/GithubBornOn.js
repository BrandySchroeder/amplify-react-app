import './App.css';
import { useState, useEffect } from 'react';
import { get } from 'aws-amplify/api';


// NEW SECTION to Create born variable and set to empty array
export const GithubBornOn = () => {
console.log(GithubBornOn);

  const [born, updateBorn] = useState(['']);

  // Define function to all API
  const fetchBorn = async() => {

  //Get request with latest Amplify
  const restOperation = await get({
  apiName: "borndate",
  path: "/born",
  });

  // Source: https://docs.amplify.aws/react/build-a-backend/restapi/fetch-data/#accessing-response-payload
  const { body } = await restOperation.response;
  const json = await body.json();
  updateBorn(json.born);
}

// Call fetchBorn function when component loads
  useEffect(() => {
    fetchBorn()
  }, [])

  return (
    <p /*onLoad={fetchBorn}*/>The Github user BrandySchroeder was born on {born.created_at}</p>
  );
}
