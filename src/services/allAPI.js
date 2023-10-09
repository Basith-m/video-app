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