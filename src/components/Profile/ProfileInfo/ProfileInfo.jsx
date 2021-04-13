import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <img src="https://clockwise.software/img/blog/how-to-build-a-social-network-website/header-background.png" alt="top-img" className={classes.main__topImg} />
            <div className={classes.post}>
                Ava + descriptions
            </div>
        </div>
    );
}
export default ProfileInfo;