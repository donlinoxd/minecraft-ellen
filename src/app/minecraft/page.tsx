const milestones = [
  {
    year: "2009",
    title: "Cave Game Tech Demo",
    description:
      "Markus 'Notch' Persson shares the first prototype — a blocky cave-exploration demo that would become the most influential sandbox game ever made.",
  },
  {
    year: "2010",
    title: "Alpha Release & Survival Mode",
    description:
      "Minecraft Alpha goes public with Survival mode, crafting, and mobs. A passionate community begins forming around the game's limitless potential.",
  },
  {
    year: "2011",
    title: "Official 1.0 Launch at MineCon",
    description:
      "At the inaugural MineCon in Las Vegas, Minecraft officially launches out of beta. The game already boasts millions of players worldwide.",
  },
  {
    year: "2012",
    title: "Pretty Scary Update (1.4)",
    description:
      "Wither boss, witches, anvils, and beacons arrive — the first of many major themed updates that keep the community engaged year after year.",
  },
  {
    year: "2014",
    title: "Microsoft Acquires Mojang",
    description:
      "Microsoft purchases Mojang for $2.5 billion. Notch departs, and a new chapter begins for Minecraft under one of the world's largest tech companies.",
  },
  {
    year: "2016",
    title: "Realms & Cross-Platform Play",
    description:
      "Minecraft Realms makes multiplayer easy, and the Better Together update lays the groundwork for cross-platform play across consoles, mobile, and PC.",
  },
  {
    year: "2019",
    title: "10th Anniversary & Village & Pillage",
    description:
      "A decade of block-building is celebrated with the massive Village & Pillage update, overhauling villages, adding pillagers, and revitalizing the world.",
  },
  {
    year: "2021",
    title: "Caves & Cliffs Split Release",
    description:
      "The ambitious Caves & Cliffs update is split into two parts, introducing new cave biomes, towering mountains, and the deep-dark Warden's domain.",
  },
  {
    year: "2023",
    title: "15th Anniversary & Ongoing Updates",
    description:
      "Fifteen years on, Minecraft surpasses 300 million copies sold. Regular updates, community events, and spin-offs keep the franchise thriving.",
  },
];

export default function MinecraftPage() {
  return (
    <div className="mc-timeline-page">
      <section id="history">
        <h2 className="mc-timeline-heading">The History of Minecraft</h2>

        <div className="mc-timeline">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`mc-timeline-entry ${i % 2 === 0 ? "mc-left" : "mc-right"}`}
            >
              <div className="mc-timeline-badge">{m.year}</div>
              <div className="mc-timeline-card">
                <h3 className="mc-timeline-title">{m.title}</h3>
                <p className="mc-timeline-desc">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
