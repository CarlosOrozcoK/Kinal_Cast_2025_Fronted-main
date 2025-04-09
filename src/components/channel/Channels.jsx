import { useNavighate } from "react-router-dom"
import { ChannelCard } from "./ChannelCard";
 
export const Channels = ({channels}) => {
 
    const navigate = useNavigate()
 
    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`)
    }
 
    return (
        <div className="className channels-container">
            { channels.map((c) => (
                <CHannelCard
                key={c.id}
                id={c.id}
                title={c.title}
                username={c.username}
                isOnline={c.isOnline}
                avatarUrl={c.avatarUrl}
                navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    )
 
}