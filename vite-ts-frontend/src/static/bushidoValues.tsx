const meiyoKanji = "名誉";
const makotoKanji = "誠";
const reiKanji = "礼";
const yuKanji = "勇";
const jinKanji = "仁";
const chuugiKanji = "忠義";
const giriKanji = "義理";

const meiyoSubtitle = "Honor";
const makotoSubtitle = "Sincerity";
const reiSubtitle = "Respect";
const yuSubtitle = "Courage";
const jinSubtitle = "Compassion";
const chuugiSubtitle = "Loyalty";
const giriSubtitle = "Duty";

const meiyoText = `
A samurai is the only one who can hold themselves to a standard.
`;

const makotoText = `
There is strength in others being able to trust your words,
and samurai are those who demonstrate that strength.
`;

const reiText = `A samurai who is not respectful is a samurai who doubts their ability.`;

const yuText = `
There is no virtue in walking the easier path, that path
is reserved for those who aren't warriors.
`;

const jinText = `
A weapon by definition is designed for but one purpose,
the person who carries a weapon determines what to use it in service of.
`;

const chuugiText = `
Be loyal to those you are responsible for.
`;

const giriText = `
A samurai's ability to adapt is not limited strictly to battle but in all of their dealings
with people.
`;

type Ivalue = {
  [key: string]: string;
};

type IbushidoValues = {
  [key: string]: Ivalue;
};
const bushidoValues: IbushidoValues = {
  meiyo: {
    kanji: meiyoKanji,
    subtitle: meiyoSubtitle,
    text: meiyoText,
  },
  makoto: {
    kanji: makotoKanji,
    subtitle: makotoSubtitle,
    text: makotoText,
  },
  rei: {
    kanji: reiKanji,
    subtitle: reiSubtitle,
    text: reiText,
  },
  yu: {
    kanji: yuKanji,
    subtitle: yuSubtitle,
    text: yuText,
  },
  jin: {
    kanji: jinKanji,
    subtitle: jinSubtitle,
    text: jinText,
  },
  chuugi: {
    kanji: chuugiKanji,
    subtitle: chuugiSubtitle,
    text: chuugiText,
  },
  giri: {
    kanji: giriKanji,
    subtitle: giriSubtitle,
    text: giriText,
  },
};

export default bushidoValues;
