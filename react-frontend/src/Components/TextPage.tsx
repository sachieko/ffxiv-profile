interface ITextPage {
  title: string;
  subtitle: string;
  text: string;
};

const TextPage = ({title, subtitle, text}: ITextPage) => {
  return (
    <div className='text-page'>
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
  );
};

export default TextPage;