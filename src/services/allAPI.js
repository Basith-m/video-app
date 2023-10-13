import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// Upload a video
export const uploadVideo = async (reqBody)=>{
    // make post http request to http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideos = async ()=>{
    // make post http request to http://localhost:4000/videos to get all videos from json server and return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a videos from json server
export const getAVideos = async (id)=>{
    // make post http request to http://localhost:4000/videos to get a video from json server and return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete all videos from json server
export const deleteAVideos = async (id)=>{
    // make delete http request to http://localhost:4000/videos to remove a video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watching video history to JSON server

export const addToHistory = async (videoDetails) => {
    // make post http request to http://localhost:4000/history to add video history in json server and return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

// get all watching video history from json server
export const getAllHistory = async () => {
    // make get http request to http://localhost:4000/history to get all video history in json server and return response to History component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// add a category to json server
export const addCategory = async (reqBody)=>{
    // make post http request to http://localhost:4000/category to add category in json server and return response to Category component
    return await commonAPI("POST",`${serverURL}/category`,reqBody)
}

// get all category from json server
export const getAllCategory = async ()=>{
    // make get http request to http://localhost:4000/category to get all category from json server and return response to Category component
    return await commonAPI("GET",`${serverURL}/category`,"")
}

// remove a category from json server
export const deleteCategory = async (id)=>{
    // make delete http request to http://localhost:4000/category to detlete category from json server and return response to Category component
    return await commonAPI("DELETE",`${serverURL}/category/${id}`,{})
}

// update a category from json server
export const updateCategory = async (id,body)=>{
    // make put http request to http://localhost:4000/category to update category from json server and return response to Category component
    return await commonAPI("PUT",`${serverURL}/category/${id}`,body)
}

// delete watching history  from json server
export const deleteHistory = async (id)=>{
    // make put http request to http://localhost:4000/history/id to delete video history from json server and return response to History component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}