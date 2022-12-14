// Api.js
import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL : "" // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, csrfToken, request) => {
    const headers = {
      csrfmiddlewaretoken: csrfToken,
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

// function to execute the http get request
const get = (url, csrfToken, request) => apiRequest("get", url, csrfToken, request);

// function to execute the http delete request
const deleteRequest = (url, csrfToken, request) =>  apiRequest("delete", url, csrfToken, request);

// function to execute the http post request
const post = (url, csrfToken, request) => apiRequest("post", url, csrfToken, request);

// function to execute the http put request
const put = (url, csrfToken, request) => apiRequest("put", url, csrfToken, request);

// function to execute the http path request
const patch = (url, csrfToken, request) =>  apiRequest("patch", url, csrfToken, request);

// expose your method to other services or actions
const API ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;