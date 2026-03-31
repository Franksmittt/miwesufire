/**
 * Wood species data for educational "Meet our woods" pages.
 * Content is derived from dendrological research and written for customers
 * so they know what they are buying.
 */

export interface WoodSpecies {
  slug: string;
  name: string;
  scientificName: string;
  aka: string[];
  /** Short tagline for cards and meta */
  tagline: string;
  /** What this wood is: origin, tree type, why the name */
  intro: string;
  /** What to expect when you look at the wood (bark, colour, shape) */
  appearance: {
    bark: string;
    heartwood: string;
    sapwood: string;
    shape?: string;
  };
  /** How it burns: heat, coals, smoke, ease of lighting */
  burnProfile: {
    heat: string;
    coals: string;
    smoke: string;
    lighting: string;
  };
  /** Best uses: braai, fire pit, pizza oven, etc. */
  bestFor: string[];
  /** Which Miwesu product(s) contain this wood, if any */
  inOurRange: string | null;
  /** One-line visual identifier for quick recognition */
  identifier: string;
}

export const WOODS: WoodSpecies[] = [
  {
    slug: "geelhaak",
    name: "Geelhaak",
    scientificName: "Vachellia erubescens",
    aka: ["Blue Thorn", "Geelhaak"],
    tagline: "The balanced burn: bright flames and steady coals.",
    intro:
      "Geelhaak (Yellow Hook) is the Blue Thorn, a dense bushveld hardwood. The name comes from its peeling, yellowish bark and the distinctive hooked thorns on the branches. It’s a common species in our mix and is prized as an all-rounder: it gives a lively flame and transitions into reliable, long-lasting coals. When you buy Geelhaak, you’re getting a versatile wood that works for almost any fire.",
    appearance: {
      bark: "The bark is thin and papery, peeling in curling strips. Logs can look a bit ragged or scruffy. Under the peeling layers you’ll see a pale yellow to grey-yellow colour; that’s the ‘geel’ (yellow) the name refers to. Paired, hooked thorns (or their scars) are often visible.",
      heartwood: "Warm golden-brown to russet when split. It’s dense but not as dark as the ironwoods. It's more of a uniform, earthy tone, sometimes honey-gold in younger wood, deepening to reddish-brown.",
      sapwood: "A clear creamy-white to pale yellow band around the darker core, with a relatively soft transition.",
      shape: "Standard round or split logs; no unusual shape.",
    },
    burnProfile: {
      heat: "Strong, consistent heat. Dense wood means it burns hot and steady.",
      coals: "Forms good, long-lasting coals, ideal for cooking through once the flames die down.",
      smoke: "Moderate. Not the smokiest; not the cleanest. A solid middle ground.",
      lighting: "Lights reasonably well; benefits from a bit of kindling or a firelighter.",
    },
    bestFor: [
      "Weekend braais and family fires",
      "Fire pits and outdoor gatherings",
      "Anyone who wants a visible, crackling flame and coals that last",
    ],
    inOurRange: "We sell Geelhaak as a standalone product (12 kg bags) and it also appears in our Braai Mix.",
    identifier: "Peeling papery bark and hooked thorns; golden to russet heartwood.",
  },
  {
    slug: "knoppiesdoring",
    name: "Knoppiesdoring",
    scientificName: "Senegalia nigrescens",
    aka: ["Knob Thorn", "Knoppiesdoring"],
    tagline: "Iron-hard coals and minimal smoke.",
    intro:
      "Knoppiesdoring (Knob Thorn) is one of the heaviest, densest braai woods. The trunk is covered in woody knobs or bosses (hence the name), and the heartwood is very dark, almost black. It’s extremely resistant to termites and impact, and that density translates into intense, long-lasting heat and coals that keep going. When you buy wood that contains Knoppiesdoring, you’re buying maximum burn time and minimal fuss.",
    appearance: {
      bark: "Studded with raised, conical knobs (about 1–3 cm high). Between the knobs the bark is tough and fibrous, yellowish-grey to dark grey-brown. It doesn’t peel like Geelhaak. Knob tips often look dark or black.",
      heartwood: "Very dark chocolate brown to almost black, sometimes with darker streaks. Looks heavy and antique.",
      sapwood: "A thin, stark band of pale cream or off-white, with high contrast with the dark heartwood.",
      shape: "The knobs give the log an undulating, non-smooth silhouette.",
    },
    burnProfile: {
      heat: "Very high. One of the hottest woods; heat lasts a long time.",
      coals: "Exceptional. Forms intense, long-lasting coals with minimal ash.",
      smoke: "Low. Burns clean for such a dense wood.",
      lighting: "Slower to catch; best with a good bed of kindling or another faster-burning wood to get it going.",
    },
    bestFor: [
      "Long braais and all-day fires",
      "Cooking that needs sustained heat (low and slow)",
      "Anyone who wants coals that outlast the party",
    ],
    inOurRange: "Knoppiesdoring is a core component of our Braai Mix (12 kg and 30 kg), where it’s blended with Snuifpeul for flavour and heat.",
    identifier: "Conical knobs on the bark; near-black heartwood with a thin pale sapwood ring.",
  },
  {
    slug: "sekelbos",
    name: "Sekelbos",
    scientificName: "Dichrostachys cinerea",
    aka: ["Sickle Bush", "Sekelbos"],
    tagline: "High heat, clean burn, fast ignition.",
    intro:
      "Sekelbos (Sickle Bush) is a shrubby legume that often grows in dense, encroaching thickets. The logs are usually smaller in diameter than big tree species, and the heartwood has a unique reddish to violet-purple hue when freshly split. It’s naturally very dry when seasoned (baked by the sun), so it lights easily and burns hot and clean. When you buy Sekelbos, you’re buying a braai favourite: quick to light, high heat, minimal smoke.",
    appearance: {
      bark: "Rough, with deep vertical fissures and a fibrous, stringy quality. Often peels in narrow vertical strips. Grey-brown to café noir.",
      heartwood: "Reddish-brown to a distinctive violet or purple when fresh; settles to dark reddish-brown with a purple undertone as it oxidises.",
      sapwood: "Yellowish-brown or buff, not as starkly white as Knoppiesdoring.",
      shape: "Often crooked or twisted; logs are typically smaller (about 5–12 cm diameter). Straight, solitary spines (not paired hooks).",
    },
    burnProfile: {
      heat: "High. Rich in natural oils; burns with a hot, bright flame.",
      coals: "Good coals; burns through at a steady rate.",
      smoke: "Very low when properly seasoned. One of the cleanest burns.",
      lighting: "Lights easily. Ideal to get a fire going or for quick, hot sears.",
    },
    bestFor: [
      "Quick braais and high-heat searing",
      "Camping and portable fires",
      "Steaks and anything that benefits from a hot, clean flame",
    ],
    inOurRange: "We sell Premium Sekelbos in 30 kg bulk bags, and it may appear in our Braai Mix.",
    identifier: "Small-diameter logs, purple-tinted heartwood, and solitary straight spines.",
  },
  {
    slug: "snuifpeul",
    name: "Snuifpeul",
    scientificName: "Vachellia nilotica",
    aka: ["Scented Pod", "Lekkerruikpeul", "Black Thorn / Swart-peuldoring"],
    tagline: "Sweet, musky smoke and gourmet flavour.",
    intro:
      "Snuifpeul (Scented Pod) is a widespread thorn tree; the pods were historically used for snuff, but the wood is what we care about for braai. The bark is deeply fissured and very dark, almost black, and the heartwood is a rich brick-red to reddish-brown. It’s a key species in our Braai Mix because it infuses meat with a distinct, sweet, musky bushveld smoke. When you buy wood that contains Snuifpeul, you’re buying flavour.",
    appearance: {
      bark: "Deeply fissured, non-peeling, with a ‘cracked mud’ look. Very dark: black or blackish-grey, with reddish-brown visible in the cracks. Sometimes amber gum nodules in the fissures. Paired, straight, white to greyish thorns.",
      heartwood: "Rich brick-red to reddish-brown; oxidises to a deep maroon-brown in air.",
      sapwood: "A wide, distinct band of yellowish-white or ivory with a sharp boundary against the red heart.",
      shape: "Standard round or split logs.",
    },
    burnProfile: {
      heat: "Strong. Hard, heavy, and durable, with good heat output.",
      coals: "Solid coals; works well in a blend for long cooks.",
      smoke: "Distinctive. Sweet, musky aroma. This is the wood that gives braai its famous flavour.",
      lighting: "Moderate; lights well with kindling or in a mix.",
    },
    bestFor: [
      "Braai masters who care about smoke flavour",
      "Red meat and lamb",
      "Any fire where you want that classic bushveld aroma",
    ],
    inOurRange: "Snuifpeul is a core component of our Braai Mix (12 kg and 30 kg), blended with Knoppiesdoring for flavour and long-lasting coals.",
    identifier: "Black, deeply fissured bark; brick-red heartwood; straight white spines.",
  },
  {
    slug: "mopane",
    name: "Mopane",
    scientificName: "Colophospermum mopane",
    aka: ["Mopanie", "Ironwood", "Mopane"],
    tagline: "Extreme density and long-lasting coals.",
    intro:
      "Mopane (Ironwood) dominates hot, low-lying river valleys in Limpopo, Namibia, and Zimbabwe. It has no thorns (unlike many other braai woods), and the bark forms long, rope-like ridges running up the trunk. The heartwood is very dense (it sinks in water), often with dark streaks, and it’s notoriously difficult to split. When you buy Mopane, you’re buying one of the heaviest, longest-burning woods available; it’s ideal for coals that last for hours.",
    appearance: {
      bark: "Unmistakable: deeply vertically fissured, forming long ridges like coarse ropes or cables. Dark grey to charcoal, often dusty-looking. No thorns.",
      heartwood: "Dark reddish-brown with darker brown or black streaks (growth rings/mineral). Figured look, a bit like rosewood. Very dense.",
      sapwood: "A narrow, sharp band of pale yellow to off-white.",
      shape: "Stems are often fluted, lobed, or kidney-shaped in cross-section, rarely a perfect circle.",
    },
    burnProfile: {
      heat: "Very high and sustained. One of the densest woods; heat output is exceptional.",
      coals: "Outstanding. Forms coals that last for hours; ideal for long braais.",
      smoke: "Low when well seasoned. The oily wood can give a slight sheen when split.",
      lighting: "Slow to catch; needs a good base of kindling or faster wood.",
    },
    bestFor: [
      "Long, slow braais and all-day fires",
      "Cooking that relies on steady coal heat",
      "Fire pits where you want coals that keep going",
    ],
    inOurRange: "We do not currently sell pure Mopane as a standalone product. It may be included in special or seasonal mixes; check with us if you’re looking for it.",
    identifier: "No thorns; ropey bark; dark heartwood with black streaks; often fluted or lobed logs.",
  },
  {
    slug: "rooibos",
    name: "Rooibos",
    scientificName: "Combretum apiculatum",
    aka: ["Red Bushwillow", "Rooibos (firewood)"],
    tagline: "Classic coaling wood for long-lasting heat.",
    intro:
      "Rooibos in firewood terms is the Red Bushwillow (not the tea plant). It’s a dominant bushveld tree and a traditional favourite for ‘coaling’; wood that produces long-lasting coals. The bark is scaly or tessellated (blocky, grid-like), and the heartwood is very dark, dense, and heavy. When you buy Rooibos, you’re buying a classic, no-nonsense wood for steady heat and coals that hold.",
    appearance: {
      bark: "Scaly or tessellated: distinct square or rectangular blocks/scales in a grid-like pattern. Grey to brownish-grey, often lighter than Snuifpeul or Mopane. No thorns.",
      heartwood: "Dark brown to blackish; very dense, fine-grained, and heavy. Dried firewood usually looks dark brown-black.",
      sapwood: "Yellowish-white, sharp contrast with the dark heart.",
      shape: "Standard round or split logs; splits relatively cleanly compared to Mopane.",
    },
    burnProfile: {
      heat: "High and steady. Dense wood means sustained heat.",
      coals: "Excellent. Traditionally used for long-lasting coals.",
      smoke: "Moderate; matte split face (no oily sheen like Mopane).",
      lighting: "Moderate; benefits from kindling or a hot start.",
    },
    bestFor: [
      "Traditional braais and coaling",
      "Fires where steady heat and long-lasting coals matter",
      "Bushveld-style cooking",
    ],
    inOurRange: "We do not currently sell pure Rooibos as a standalone product. It may appear in blends or seasonal offerings; contact us if you’re interested.",
    identifier: "No thorns; scaly, blocky bark; very dark heartwood.",
  },
];

export function getWoodBySlug(slug: string): WoodSpecies | undefined {
  return WOODS.find((w) => w.slug === slug);
}

export function getAllWoodSlugs(): string[] {
  return WOODS.map((w) => w.slug);
}
