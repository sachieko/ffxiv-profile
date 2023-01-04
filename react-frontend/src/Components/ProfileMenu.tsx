import { useState } from 'react';

interface Iviews {
  [key: string]: JSX.Element
};

const ProfileMenu = () => {
  const [view, setView] = useState<null | string>(null);
  
  const views: Iviews =  {
    meiyo: <p></p>,
    makoto: <p></p>,
    rei: <p></p>,
    yu: <p></p>,
    jin: <p></p>,
    chu: <p></p>,
    gi: <p></p>
  };

  return (
    <div className={'profile-menu'}>
      {view ? views[view] : <div className={'widget-menu'}></div>}
    </div>
  );
};

export default ProfileMenu;