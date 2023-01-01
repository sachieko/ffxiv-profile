import { MenuCtx } from '../Providers/MenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faImage, faLink } from '@fortawesome/free-solid-svg-icons'
interface menuButtonProps {
  title: string;
};

interface ImenuButtons {
  [key: string]: JSX.Element | string;
};

const MenuButton = ({ title }: menuButtonProps) => {
  const [, setMode] = MenuCtx(); // Only need setter for the button

  const menuButtons: ImenuButtons = {
    profile: <FontAwesomeIcon icon={faIdCard} />,
    gallery: <FontAwesomeIcon icon={faImage} />,
    connect: <FontAwesomeIcon icon={faLink} />,
    ooc: 'OOC'
  };

  return (
  <div className={'menu-link'} onClick={() => setMode({ mode: title })}>{menuButtons[title]}
  </div>
  );
};

export default MenuButton;