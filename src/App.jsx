import {useEffect, useState} from 'react';
import ProfileCard from "./components/ProfileCard";

function App(){

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  async function fetchUserData(){
    let apiUrl = "https://randomuse.me/api/?results=10"
    try{
      let response = await fetch(apiUrl);
      let data = await response.json();
      setUserData(data);
    }
    catch(error){
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchUserData();
  },[])

  return(
    <div>
      {
        userData ? (
          <div>
            {
              userData.results.map((user)=>{
                return (
                  <ProfileCard 
                    name={`${user.name.first} ${user.name.last}`}
                    picture={user.picture.large}
                  />
                )
              })
            }
          </div>
        )
        : <h1>{error || "Loading..."}</h1>
      }
      
    </div>
  )
}

export default App;