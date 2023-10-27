import axios from 'axios'

const BASEURL = process.env.REACT_APP_BASE_URL

export const Get = (url:string)=>axios.get(`${BASEURL}${url}`);

export const Post = (url:string,payload:any) => axios.post(`${BASEURL}${url}`, payload);

export const Put = (url:string, payload:any) => axios.put(`${BASEURL}${url}`, payload);

export const Delete = (url:string)=> axios.delete(`${BASEURL}${url}`)