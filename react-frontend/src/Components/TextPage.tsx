interface ITextPage {
  title: string;
  subtitle: string;
  text: string;
  onClick: (a: string) => void;
};

const TextPage = ({title, subtitle, text, onClick}: ITextPage) => {
  return (
    <>
    <div className='text-page' onClick={() => onClick('')}>
      {title && <div className='title'>
        {title}
      </div>
      }
      {subtitle && <div className='subtitle'>
        {subtitle}
      </div>
      }
      {text && <div className='text'>
        {text}
      </div>
      }
    </div>
    </>
  );
};

export default TextPage;