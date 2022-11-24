interface menuButtonProps {
  title: string;
};

const MenuButton = ({ title }: menuButtonProps) => {

  return (
  <div className={'menu-link'}>{title}
  </div>
  );
};

export default MenuButton;