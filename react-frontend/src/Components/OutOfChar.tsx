import TextPage from "./TextPage";
import './OutOfCharacter.scss';
import oocInfo from '../static/oocInfo';


const OutOfChar = () => {

  const oocList = oocInfo.map(infoItem => {
    return <TextPage title={infoItem.title} text={infoItem.text} />;
  });

  return (
  <div className={'ooc'}>
    {oocList}
  </div>
  );
};

export default OutOfChar;