import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0"


const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
    "/nearbysearch/json?"+
    "&location="+lat+","+lng+"&radius=1500&type="+type
    +"&key="+API_KEY)


    const searchByText=(searchText)=>axios.get(BASE_URL+
        "/textsearch/json?query="+searchText+
  "&key="+API_KEY)

export default{
    nearByPlace,
    searchByText
}