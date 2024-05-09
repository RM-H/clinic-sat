
import axios from "axios"; axios
export const url = 'https://api.bilitim.net/api/v1'
export const baseurl = "https://api.bilitim.net"

export const getSplash = ( ) => {
    return axios.get(`${url}/splash`)
}
export const getBlogs = (config ) => {
    return axios.get(`${url}/blogs`,config)
}
export const getBlog = (config ) => {
    return axios.get(`${url}/blog`,config)
}
