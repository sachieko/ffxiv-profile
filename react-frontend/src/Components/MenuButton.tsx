import { MenuCtx } from '../Providers/MenuContext';
interface menuButtonProps {
  title: string;
};

interface ImenuButtons {
  [key: string]: string;
};

const MenuButton = ({ title }: menuButtonProps) => {
  const [, setMode] = MenuCtx(); // Only need setter for the button

  const menuButtons: ImenuButtons = {
    profile: 'Info',
    gallery: 'Gallery',
    connect: 'Connect',
    ooc: 'OOC'
  };

  return (
  <div className={'menu-link'} onClick={() => setMode({ mode: title })}>{menuButtons[title]}
  </div>
  );
};

export default MenuButton;