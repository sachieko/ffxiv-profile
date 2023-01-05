import { useState } from 'react';
import TextPage from './TextPage';
import bushidoValues from '../static/bushidoValues';
import Widget from './Widget';

interface Iviews {
  [key: string]: JSX.Element;
};

const ProfileMenu = () => {
  const [view, setView] = useState<null | string>(null);

  // const { meiyo, makoto, rei, yu, jin, chuugi, giri } = bushidoValues;

  const views: Iviews = {};
  const widgets: JSX.Element[] = [];
  for (const value in bushidoValues) {
    views[value] = <TextPage 
      title={bushidoValues[value].kanji} 
      subtitle={bushidoValues[value].subtitle} 
      text={bushidoValues[value].text}
      onClick={setView} />;
    widgets.push(<Widget
      title={bushidoValues[value].kanji}
      text={bushidoValues[value].subtitle}
      onClick={setView}
      widgetName={value}
      key={value} />);
  }

  return (
    <>
    <div className={'profile-menu'}>
      <span>Nagisa's Path</span>
      {view ? views[view] : <div className={'widget-menu'}>{widgets}</div>}
    </div>
    </>
  );
};

export default ProfileMenu;