interface IwidgetProps {
  kanji: string;
  text: string;
};

const ProfileWidgets = ({kanji, text}: IwidgetProps) => {
  return (
    <div className='text-widget'>
    </div>
  )
};

export default ProfileWidgets;