function ProfileCard(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.picture} alt="picture of the person" />
        </div>
    )
}

export default ProfileCard;