interface IconnectItem {
  title: string;
  subtitle?: string;
  text?: string;
}

const connectInfo: IconnectItem[] = [
  {
    title: "Ornstein Retainer",
    text: `She is in service to Lord Julien of House Ornstein in Ishgard, and has been known to contract out.`,
  },
  {
    title: "The Bloodsands",
    text: `She is often watching the fights, or part of them.`,
  },
  {
    title: "The Grindstone",
    text: `A regular participant when she can be.`,
  },
  {
    title: "Scheduling",
    text: `I don't often like to schedule RP in advance, if I'm online then PM.`,
  },
  {
    title: "Future Upgrade",
    subtitle: `At some point I will get around to using this page for something cooler, but at the moment this will do.`,
  },
];

export default connectInfo;
