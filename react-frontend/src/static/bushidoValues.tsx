const meiyoKanji = '名誉';
const makotoKanji = '誠';
const reiKanji = '礼';
const yuKanji = '勇';
const jinKanji = '仁';
const chuugiKanji = '忠義';
const giriKanji = '義理';


const meiyoSubtitle = 'Honor';
const makotoSubtitle = 'Sincerity';
const reiSubtitle = 'Respect';
const yuSubtitle = 'Courage';
const jinSubtitle = 'Compassion';
const chuugiSubtitle = 'Loyalty';
const giriSubtitle = 'Duty';

const meiyoText = `
Honor is judged by the individual warrior only, the decisions one makes and how they are carried out reflect their true 
character. This is how Nagisa has defined this aspect for herself, as she feels an individual is the only one who can truly
hold themselves accountable for the actions that one takes. Appeals to her honor from any definition but her own are heard,
but lack purpose to her. Likewise, she extends this same understanding to how others carry themselves, even if they are crass.
`;

const makotoText = `
When Nagisa says she will do something, she commits to it. She thinks that the value of words is determined solely
by the conduct of the person speaking them. If she carries herself exactly as she says, then others will be inclined to
trust in her sincerity. Many people treat words cheaply. To Nagisa there is strength in others being able to trust your
words, and warriors are those who demonstrate that strength.
`;

const reiText = `
There is no reason to be callous to others, even an enemy. Nagisa thinks that warriors do not need to rely on the
provocation of others in order to demonstrate their strength. More concisely, she believes that respect for others
is not an expense owed others. A samurai who is not respectful is a samurai who doubts their own ability.`;

const yuText = `
Nagisa believes that samurai must have the courage to live life to its fullest, to take risks, and not to hide away from duty.
If one wants the ability to govern not just the self, but others, by virtue of their strength - then one must have the courage
to remain steadfast and commit to the path of a warrior at all times. There is no virtue in walking the easier path, that path
is reserved for those who aren't warriors.`;

const jinText = `
Those with power have the responsibility to be compassionate to those they might govern with it. While she holds this
same opinion for politicians, lords, and kings - she considers it most vital for those who carry a weapon. A weapon by 
definition is designed for but one purpose, but the person who carries a weapon determines the rest. If one has power,
they should endeavor to use it in service of her fellow people.`;

const chuugiText = `
Nagisa is most cautious here as a character dancing on the edge of acceptable society, as to whom she feels responsible for.
She is indeed very loyal to those in her care, but at times this means it can be difficult to get to know the woman. Her
view on loyalty is that to strangers she represents those she is loyal to, and this means that she can often not speak her mind.
`;

const giriText = `
Nagisa commits fully to the decisions she makes, and strives to not regret. If she decides to extend her duty to someone,
she has done so with deep and thoughtful consideration. She continuously dwells on her own definitions of justice and
morality, believing that a samurai's ability to adapt is not limited strictly to battle but in all of their dealings
with people.`;

interface Ivalue {
  [key: string]: string;
};

interface IbushidoValues {
  [key: string]: Ivalue;
}
const bushidoValues: IbushidoValues= {
  meiyo: {
    kanji: meiyoKanji,
    subtitle: meiyoSubtitle,
    text: meiyoText
  },
  makoto: {
    kanji: makotoKanji,
    subtitle: makotoSubtitle,
    text: makotoText
  },
  rei: {
    kanji: reiKanji,
    subtitle: reiSubtitle,
    text: reiText
  },
  yu: {
    kanji: yuKanji,
    subtitle: yuSubtitle,
    text: yuText
  },
  jin: {
    kanji: jinKanji,
    subtitle: jinSubtitle,
    text: jinText
  },
  chuugi: {
    kanji: chuugiKanji,
    subtitle: chuugiSubtitle,
    text: chuugiText
  },
  giri: {
    kanji: giriKanji,
    subtitle: giriSubtitle,
    text: giriText
  }
};

export default bushidoValues;