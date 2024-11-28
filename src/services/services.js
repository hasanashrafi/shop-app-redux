import axios from "axios"


/* This code snippet is creating an instance of Axios with a base URL set to
"https://fakestoreapi.com". 
It then sets up an interceptor on the response to transform the response
data before it is returned.
The interceptor takes a success callback function that extracts the data
from the response object and a failure 
callback function that rejects the promise with the error object.
This setup allows for consistent handling of responses and errors from the API. */

const api = axios.create({ baseURL: "https://fakestoreapi.com" })

api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

export default api