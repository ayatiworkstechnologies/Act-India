import { SEARCH_INDEX } from "./searchIndex";

// simple normalization
const norm = (s) => (s || "").toLowerCase().trim();

// naive scorer: title hits weigh more than tag hits
function scoreItem(q, item) {
  const query = norm(q);
  if (!query) return 0;

  const title = norm(item.title);
  const tags = (item.tags || []).map(norm);

  let score = 0;
  if (title.includes(query)) score += 3;
  for (const t of tags) if (t.includes(query)) score += 1;

  // slight boost if the word starts with query
  if (title.startsWith(query)) score += 1.5;

  return score;
}

export function searchIndex(query, limit = 20) {
  const results = SEARCH_INDEX
    .map((item) => ({ ...item, _score: scoreItem(query, item) }))
    .filter((x) => x._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);

  return results;
}
