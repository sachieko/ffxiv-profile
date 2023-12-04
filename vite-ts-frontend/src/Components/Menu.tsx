import MenuButton from "./MenuButton";
import "./Menu.scss";

interface MenuProps {
  message: string;
  menuLinks: string[];
}
const Menu = ({ message, menuLinks }: MenuProps) => {
  const links: JSX.Element[] = menuLinks.map((title: string, i: number) => {
    return <MenuButton title={title} key={i} />;
  });
  return (
    <>
      <div className="menu-header">{message}</div>
      <div className="menu">{links}</div>
    </>
  );
};

export default Menu;
