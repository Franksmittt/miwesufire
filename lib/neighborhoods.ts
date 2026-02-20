/**
 * Alberton-area neighborhoods for targeted ad copy.
 * Used in the ad generator to show e.g. "Meyersdal? We Deliver for FREE!"
 */

export interface Neighborhood {
  id: string;
  name: string;
  /** Short description (for reference / tooltips). */
  description: string;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  { id: "alberante", name: "Alberante", description: "Upmarket, leafy suburb with large properties and estates." },
  { id: "albertsdal", name: "Albertsdal", description: "Growing area with new developments and affordable housing." },
  { id: "alberton-north", name: "Alberton North", description: "One of the oldest parts of town, historical homes, close to CBD." },
  { id: "brackenhurst", name: "Brackenhurst", description: "Large, popular family suburb with many schools and Hennie Alberts Street." },
  { id: "brackendowns", name: "Brackendowns", description: "Well-established family-oriented area next to Brackenhurst." },
  { id: "florentia", name: "Florentia", description: "Central, close to N12, convenient for commuters." },
  { id: "mayberry-park", name: "Mayberry Park", description: "Quiet residential area on the southern edge of Alberton." },
  { id: "meyersdal", name: "Meyersdal", description: "One of the most affluent suburbs; exclusive eco and nature estates." },
  { id: "new-redruth", name: "New Redruth", description: "Central suburb with recent development in townhouses and clusters." },
  { id: "raceview", name: "Raceview", description: "Popular for proximity to shopping centers and the hospital." },
  { id: "randhart", name: "Randhart", description: "Sought-after, well-maintained suburb with parks and quality schools." },
  { id: "south-crest", name: "South Crest", description: "Perched on a hill with great views of the city." },
  { id: "verwoerdpark", name: "Verwoerdpark", description: "Well-established suburb near the N3 highway." },
];

/** Template for the neighborhood headline. {name} is replaced with the neighborhood name. */
export const NEIGHBORHOOD_HEADLINE_TEMPLATE = "{name}? We Deliver for FREE!";

export function getNeighborhoodHeadline(neighborhood: Neighborhood): string {
  return NEIGHBORHOOD_HEADLINE_TEMPLATE.replace("{name}", neighborhood.name);
}

export function getNeighborhoodById(id: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.id === id);
}
