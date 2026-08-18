/**
 * Public visibility switches for in-progress sections.
 *
 * Flip a value to `true` to put that section back on the live site: it restores
 * the homepage nav tile, the Mind Map room link, and the route itself. Content
 * under `content/` and `src/data/` is left untouched while a section is hidden,
 * so nothing is lost by turning one off.
 */
export const SECTIONS_LIVE = {
  activity: false,
  projects: false,
} as const;
