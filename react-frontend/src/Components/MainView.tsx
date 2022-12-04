import Profile from "./Profile"; 
import Gallery from "./Gallery";
import OutOfChar from "./OutOfChar";
import Wipview from "./Wipview";
import { MenuCtx } from "../Providers/MenuContext";

interface IcontentView {
  [key: string]: JSX.Element;
}

const MainView = () => {
  const [mode] = MenuCtx();

  const contentView: IcontentView = {
    profile: <Profile />,
    gallery: <Gallery />,
    ooc: <OutOfChar />,
    view4: <Wipview />
  };

  return (
    <section className='main-content'>
      {contentView[`${mode.mode}`]}
    </section>
  );
};

export default MainView;