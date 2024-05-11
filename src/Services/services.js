
import axios from "axios"; axios
export const url = 'https://clinic.safirannoavari.com/api/v1'
export const baseurl = "https://clinic.safirannoavari.com"

export const getSplash = ( ) => {
    return axios.get(`${url}/splash`)
}
export const getBlogs = (config ) => {
    return axios.get(`${url}/blogs`,config)
}
export const getBlog = (config ) => {
    return axios.get(`${url}/blog`,config)
}
