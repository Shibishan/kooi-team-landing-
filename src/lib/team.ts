export type Player = { name: string; role: string; style: string; tag?: string; photo?: string; hype?: string };

// To add a photo later: set photo: "https://..." on a player.
export const squad: Player[] = [
  { name: "Vithushan", role: "Wicket Keeper Batsman", style: "Left-hand bat", tag: "Captain", photo: "/vithu.jpeg", hype: "The general behind the stumps. Reads the game before it happens, leads from the front and never lets KOOI TEAM back down." },
  { name: "Niroshan", role: "All-rounder", style: "Left-hand bat · Right-arm bowl", tag: "Vice Captain", photo: "/niro.jpeg", hype: "Bat or ball — he changes the match either way. The calm right hand of the captain and the spark when the team needs fire." },
  { name: "Shibishan", role: "Batting All-rounder", style: "Right-hand", tag: "The Finisher", photo: "/shibishan.jpeg", hype: "When the run rate climbs and the pressure peaks, the crowd waits for one name. Shibishan walks in, the field spreads, and the ball keeps disappearing over the rope. Game changer. Match finisher. Poompukar's storm." },
  { name: "Kithushan", role: "Bowling All-rounder", style: "Right-hand", photo: "/kithu.jpeg" },
  { name: "Mathurangan", role: "Fast Bowler", style: "Right-hand" },
  { name: "Kishan", role: "Batsman", style: "Right-hand bat" },
  { name: "Abishek", role: "Batsman", style: "Right-hand bat" },
  { name: "Thanushan", role: "Batsman", style: "Left-hand bat" },
  { name: "Satheesh", role: "Batsman", style: "Right-hand bat" },
  { name: "Praveen", role: "Batsman", style: "Right-hand bat" },
  { name: "PK", role: "Batting All-rounder", style: "Right-hand bat" },
  { name: "Rijithman", role: "Batsman", style: "Right-hand bat", photo: "/riji.jpeg" },
  { name: "Thanumithan", role: "Batting All-rounder", style: "Left-hand" },
  { name: "Gowtham", role: "Wicket Keeper Batsman", style: "Right-hand bat" },
  { name: "Arutchan", role: "Batsman", style: "Left-hand bat" },
  { name: "Jewarman", role: "Batsman", style: "Right-hand bat" },
  { name: "Thimothi", role: "Batsman", style: "Left-hand bat" },
];

export const timeline = [
  { years: "2010 – 2012", title: "Where it all began", text: "On the streets of Poompukar, Batticaloa, Nivethan, Mathyuran, Nithrshon, Rajeevan, Rithan and Hamsarupan started playing cricket together as a team. A taped tennis ball, a hand-made bat and stones for stumps — that was all it took to start a story." },
  { years: "2012 – 2014", title: "The pack grows", text: "Vithushan, Niroshan, Gowtham, Jewarman, Arutchan, Thinmothi and many more Poompukar locals joined the game. Evening matches turned into weekend battles, and the street got too small for the crowd." },
  { years: "2013 – 2014", title: "KOOI TEAM is born", text: "The group officially took the name KOOI TEAM. Same friends, same streets — but now with one name and one identity to fight for." },
  { years: "2016", title: "Sinna Valavu — Our Sacred Ground", text: "In 2016, KOOI TEAM discovered a piece of land in the Poompukar area and named it \"Sinna Valavu\". The team began playing test cricket there with a softball, turning an open patch into their very own arena. Sinna Valavu created a big impact on Poompukar youngsters, cricket lovers and KOOI TEAM alike — a place where friendships deepened, skills sharpened and the spirit of the game truly came alive." },
  { years: "2020 – 2021", title: "Cricket in the curfew times", text: "When Corona locked the country down, the game didn't stop. Whenever the curfew lifted, even for a few hours, the boys rushed out and played together as a team. Those short free windows kept KOOI TEAM united through the hardest days." },
  { years: "After Corona", title: "From the street to our own ground", text: "The team that started on the road stepped onto its own ground. More practice, bigger matches and a new generation of players ready to carry the name forward." },
  { years: "Today", title: "Still going strong", text: "KOOI TEAM runs successfully under captain Vithushan and vice captain Niroshan, with stars like Shibishan leading a hungry pack." },
];
