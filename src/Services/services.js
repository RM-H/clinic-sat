
import axios from "axios"; axios
export const url = 'https://server.clinicdrsattarzadeh.com/api/v1'
export const baseurl = "https://server.clinicdrsattarzadeh.com"

export const getSplash = ( ) => {
    return axios.get(`${url}/splash`)
}
export const getBlogs = (config ) => {
    return axios.get(`${url}/blogs`,config)
}
export const getBlog = (config ) => {
    return axios.get(`${url}/blog`,config)
}
