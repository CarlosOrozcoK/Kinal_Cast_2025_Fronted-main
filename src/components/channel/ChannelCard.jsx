const imageUrl = '';
 
const ChannelAvatar = ({url}) => {
    return (
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width= '100%' alt='Default avatar'/>
        </div>
    )
}
 
export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateTOChannelHandler
}) => {
    const handleNavigate = () => {
 
        navigateToChannelHandler(id)
       
    }
 
    return(
        <div className="className channels-card">
            <ChannelAvatar url={avatarUrlUrl}/>
            <span className="className channels-card-title">{title}</span>
            <span className="className channels-card-title">{username}</span>
            <span className="className channels-card-title"style={{color: isOnline ? 'green': 'red'}}>
                {isOnline ? 'online' : 'ofline'}
               
            </span>
        </div>
    )
}
 