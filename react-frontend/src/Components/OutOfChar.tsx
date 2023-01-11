import TextPage from "./TextPage";
import './OutOfChar.scss';
import oocInfo from '../static/oocInfo';


const OutOfChar = () => {

  const oocList = oocInfo.map((infoItem, index) => {
    return <TextPage title={infoItem.title} text={infoItem.text} key={index} />;
  });

  return (
  <div className={'ooc'}>
    {oocList}
  </div>
  );
};

export default OutOfChar;