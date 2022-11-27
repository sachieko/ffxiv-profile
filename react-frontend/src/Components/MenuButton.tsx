import { MenuCtx } from '../Providers/MenuContext'
interface menuButtonProps {
  title: string;
};

const MenuButton = ({ title }: menuButtonProps) => {
  const [, setMode] = MenuCtx(); // Only need setter for the button
  return (
  <div className={'menu-link'} onClick={() => setMode({ mode: title })}>{title}
  </div>
  );
};

export default MenuButton;