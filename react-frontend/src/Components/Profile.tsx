import './Profile.scss';
import phImage from '../img/test1.jpg';
import ProfileMenu from './ProfileMenu';

const Profile = () => {
  return (
  <div className={'profile'}>
    <div className={'profile-info'}>
    <img src={phImage} alt='headshot' />
      <p>
        Race: Raen (Au'ra).<br/>
        Origin: Bukyo, Hingashi.<br/>
        Duties: Shibata Family, Hingashi. Ornstein Family, Ishgard.<br/>
        Occupations: Samurai, Ninja.<br/>
        Nicknames: Nagi, Shibata Bread.<br/>
        Description: Confident, Deliberate, Slow to Anger,<br/> Strong-willed.<br/>
        Themes: Cultural Influence, Bushido, Yakuza, Uchi and Soto.<br/>
        Residence: (TBA)<br/>
        <b>Server: Balmung</b><br/>
      </p>
    </div>
      <ProfileMenu />
  </div>
  );
};

export default Profile;