import axios from "axios";

export default async function myURL() {
    try{
        const BASE_URL = "https://hn.algolia.com/api/v1/search?query=redux"
        const response = await axios.get(BASE_URL);
        const { hits } = response.data;
        return hits
    }
    catch (error) {
        console.log(error);
    }
    
}