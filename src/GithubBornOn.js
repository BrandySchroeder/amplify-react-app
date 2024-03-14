import './App.css';
import React, { useState, useEffect } from 'react';
import { get } from 'aws-amplify/api';

import './App.css';

const App = () => {
    // NEW SECTION to Create born variable and set to empty array
  const [born, updateBorn] = useState([]);

  console.log(updateBorn);

  // Define function to all API
  const fetchBorn = async() => {
    updateLoading(true);

    console.log(fetchBorn);

  //Get request with latest Amplify
  const restOperation = await get({
  apiName: "borndate",
  path: "/born",
  });

  // Source: https://docs.amplify.aws/react/build-a-backend/restapi/fetch-data/#accessing-response-payload
  const { body } = await restOperation.response;
  const json = await body.json();
  updateBorn(json.born);
  updateLoading(false);
}

  // Call fetchBorn function when component loads
  useEffect(() => {
    fetchBorn()
  }, [])

  return (
    <div className="App">
        <p onLoad={fetchBorn}>my github name goes here - my github created at goes here{born.created_at}</p>
    </div>
  );
}

export default App
