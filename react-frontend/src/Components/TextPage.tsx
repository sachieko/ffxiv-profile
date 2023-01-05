interface ITextPage {
  title?: string;
  subtitle?: string;
  text?: string;
  onClick?: (a: string) => void; // Used to reset state view
};

const TextPage = ({title, subtitle, text, onClick}: ITextPage) => {
  return (
    <>
    {onClick && (
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
    )}
    {!onClick && (
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
    )}
    </>
  );
};

export default TextPage;