interface IWidget {
  title: string;
  text: string;
  widgetName: string;
  onClick: (a: string) => void; // Used to set state view
};

const Widget = ({title, text, widgetName, onClick}: IWidget) => {
  return (
    <div className='widget' onClick={() => onClick(widgetName.toLowerCase())}>
      {title && <div className='title'>
        {title}
      </div>
      }
      {text && <div className='text'>
        {text}
      </div>
      }
    </div>
  );
};

export default Widget;