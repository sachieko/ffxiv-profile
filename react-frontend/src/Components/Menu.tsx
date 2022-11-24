import MenuButton from './MenuButton';
import './Menu.scss';

interface MenuProps {
  message: string;
  menuLinks: string[];
};
const Menu = ({ message, menuLinks }: MenuProps) => {
  const links: JSX.Element[] = menuLinks.map((title: string) => {
    return <MenuButton title={title} />
  });
  return (
    <>
    <div className='menu-header'>{message}</div>
    <div className='menu'>
    {links}
    </div>
    </>
  );
};

export default Menu;