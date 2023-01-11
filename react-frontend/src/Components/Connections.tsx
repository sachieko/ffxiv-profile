import TextPage from "./TextPage";
import connectInfo from "../static/connectInfo";
import './Connections.scss';

const Connections = () => {

  const connectItems = connectInfo.map((item, index) => {
    return <TextPage title={item.title} text={item.text} subtitle={item.subtitle} key={index}/>;
  });

  return (
    <div className='connect'>
      {connectItems}
    </div>
  );
};

export default Connections;