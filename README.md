# Fetching Data from an API

API is an Application Programming Interface
- API Endpoints, these endpoints expose resources/data

Example of an API endpoint;
- https://api.rolandcafe.ug/cakes
- https://api.rolandcafe.ug/drinks
- https://api.rolandcafe.ug/breakfast-combos


# To Fetching Data

FETCH API - this is a browser API
- We fetch data by making HTTP requests and the fetch API is a browser API that helps in making HTTP requests through the browser.

HTTP Requests using the following HTTP verbs/Methods;
- GET (getting resources)
- POST (Creating resources)
- PATCH/PUT (Updating)
- DELETE (Delecting resources)

AXIOS - you get from NPM registry.


# Using the Fetch API

fetch()
- this function takes 2 common params;
- Param1 = API URL
- Param1(optional) = an objects that contains details about the HTTP request that you are making

example:

```js
let apiUrl = "https://api.rolandcafe.ug/breakfast-combos"

fetch(apiUrl)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        return data;
    })
    .catch((error)=>{
        return error 
    })

```

# Async and Await

```js

async function fetchDataFromApi(){
    let apiUrl = "https://api.rolandcafe.ug/breakfast-combos"

    try{
        let response = await fetch(apiUrl);
        let data = await response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
}

```

ApiUrl = "https://randomuser.me/api/?results=10"


