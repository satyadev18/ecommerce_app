import axios from 'axios'

const BASEURL = process.env.REACT_APP_BASE_URL
console.log('BASEuRL', BASEURL)

const getBaseUrl = (url:string)=>`${BASEURL}${url}`

export const get = (url:string)=>axios.get(getBaseUrl(url)).catch(error => {


    return error.response;
  });
;

export const post = (url:string,payload:any) => axios.post(getBaseUrl(url), payload);

export const put = (url:string, payload:any) => axios.put(getBaseUrl(url), payload);

export const Delete = (url:string)=> axios.delete(getBaseUrl(url))
