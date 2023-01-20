import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage tweet={props.tweet.user}/>

      <div className="body">
        <div className="top">
          <User tweet={props.tweet.user} />
          <Timestamp tweet={props.tweet.user}/>
        </div>
        <Message tweet={props.tweet}/>
          <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
