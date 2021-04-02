import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        removePost={props.removePost}
        changePostTextArea={props.changePostTextArea}
      />
    </div>
  );
};

export default Profile;
