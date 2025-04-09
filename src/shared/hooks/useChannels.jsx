import { useState } from "react";
import toast from "react-hot-toast"
import { getChannels as getChannelRequest, getFollowedChannels } from "../../services/api";
 
export const useChannels = () => {
 
    const [channels, setChannels] = useState(null)
 
    const getChannels = async (isLoged = false) => {
 
        const channelsData = await getChannelRequest()
       
        if(channelsData.error){
            return toast.error(
                channelData.e?.response?.data || 'Ocurrio un error al leer los canales'
            )
        }
 
        if(!isLoged){
            return setChannels({
                channels: channelsData.data.channels
            });
        }
 
        const followedChannelsData = await getFollowedChannels ();
 
        if (followedChannelsData.error) {
            return toast.error(
                channelsData.e?.response?.data || 'Ocurrio un error al cargar los canalaes que sigues'
            )
        }
        
        setChannels ({
            channels : channelsData.data.channels, 
            followedChannels: channelsData.data.channels.filter( channel=>
                followedChannelsData.data.followedChanels.includes(channel.id)
            )
        });
    }

    return {
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels

    }
}