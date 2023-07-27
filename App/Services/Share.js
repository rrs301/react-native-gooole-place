import { Share } from "react-native"

const SharePlace=(place)=>{
        Share.share({
            title:'Share Business',
            message:"Business Name: "+place.name+"\n"+"Address: "
            +place.vicinity?place.vicinity:place.formatted_address,
        })
}



export default{
    SharePlace
}