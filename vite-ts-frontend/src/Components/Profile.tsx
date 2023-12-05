import './Profile.scss';
import profilePicture from '../img/profilepic1.jpg';
import ProfileMenu from './ProfileMenu';

const Profile = () => {
  return (
  <section className={'profile'}>
    <div className={'profile-info'}>
    <img src={profilePicture} alt='headshot' />
      <p>
        Race: Raen (Au'ra).<br/>
        Origin: Bukyo, Hingashi.<br/>
        Duties: Shibata Family, Hingashi.<br/>
        Occupations: Samurai, Ninja, Reaper.<br/>
        Nicknames: Nagi, Shibata Bread.<br/>
        Description: Confident, Deliberate, Slow to Anger,<br/> Strong-willed.<br/>
        Themes: Cultural Influence, Bushido, Yakuza, Uchi and Soto.<br/>
        Residence: Shirogane.<br/>
        <b>Server: Balmung</b><br/>
      </p>
    </div>
      <ProfileMenu />
  </section>
  );
};

export default Profile;