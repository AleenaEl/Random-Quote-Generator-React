import axios from "axios";

export const fetchRandomQuoteAPI = async () => {
    
    try {
        const response = await axios.get("https://dummyjson.com/quotes")
        return response.data
    } catch (error) {
        console.log(`error in fetching ,${error}`);
    }
    
}