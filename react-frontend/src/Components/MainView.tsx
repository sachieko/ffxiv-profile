import Profile from "./Profile"; 
import Gallery from "./Gallery";
import OutOfChar from "./OutOfChar";
import Connections from "./Connections";
import { MenuCtx } from "../Providers/MenuContext";

interface IcontentView {
  [key: string]: JSX.Element;
}

const MainView = () => {
  const [mode] = MenuCtx();

  const contentView: IcontentView = {
    profile: <Profile />,
    gallery: <Gallery />,
    connect: <Connections />,
    ooc: <OutOfChar />
  };

  return (
    <section className='main-content'>
      {contentView[`${mode.mode}`]}
    </section>
  );
};

export default MainView;