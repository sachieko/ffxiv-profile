interface ISelectedProps {
  title: string;
  text: string;
};

const Selected = ({title, text}: ISelectedProps) => {
  return (
  <div className='text-widget-selected'>
    <div className='title'>
    {title}
    </div>
    <div className='text'>
    {text}
    </div>
  </div>
  );
};

export default Selected;