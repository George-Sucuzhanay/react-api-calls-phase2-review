import { useState, useEffect } from 'react';
import myURL from '../services/apiCall';

function DisplayCalls() {

 
  const [data, setInfo] = useState([]);

  const testApi = async () => {
    const hitsexample = await myURL();
    setInfo(hitsexample);
  }
  useEffect(() => {
    testApi()
  }, [])

  return (
    <ul>
      {(data || []).map((item) => {
        //keys
        //React requires a unique key for each element
        return(
        <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
        </li>
        )
        
      })}
   </ul>
  );
}
export default DisplayCalls;