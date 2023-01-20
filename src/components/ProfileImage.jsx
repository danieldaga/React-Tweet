const ProfileImage = (props) =>{
    return(
        <img
        src={props.tweet.image}
        className="profile"
        alt="profile"
    />
    )
}

export default ProfileImage