import Profile from "./Profile"; 
import Gallery from "./Gallery";
import OutOfChar from "./OutOfChar";
import Wipview from "./Wipview";
import { MenuCtx } from "../Providers/MenuContext";

const MainView = () => {
  const [mode] = MenuCtx();
  return (
    <section className='main-content'>
      {mode.mode === 'profile' && <Profile />}
      {mode.mode === 'gallery' && <Gallery />}
      {mode.mode === 'ooc' && <OutOfChar />}
      {mode.mode === 'view4' && <Wipview />}
    </section>
  );
};

export default MainView;