// ✅ Add/extend this list with all pages you want searchable.
// id must be unique; path should be a valid react-router path.
export const SEARCH_INDEX = [
  { id: "home", title: "Home", path: "/", tags: ["landing", "act", "construction"] },

  // Top nav
  { id: "services", title: "Services", path: "/services", tags: ["after sales", "support", "maintenance"] },
  { id: "infrastructure", title: "Infrastructure", path: "/infrastructure", tags: ["workshop", "warehouse", "facilities"] },
  { id: "about", title: "About", path: "/about", tags: ["company", "team", "vision"] },
  { id: "contact", title: "Contact", path: "/contact", tags: ["call", "email", "address"] },

  // Dealers dropdown
  { id: "volvo", title: "Volvo Construction Equipment", path: "/volvo", tags: ["excavator", "loader", "volvo", "dealers"] },
  { id: "epiroc", title: "Epiroc", path: "/epiroc", tags: ["drilling", "mining", "tools", "dealers"] },
  { id: "sdlg", title: "SDLG", path: "/sdlg", tags: ["wheel loader", "sdlg", "dealers"] },
  { id: "ammann", title: "Ammann", path: "/ammann", tags: ["asphalt", "compactors", "ammann", "dealers"] },
  { id: "husqvarna", title: "Husqvarna", path: "/husqvarna", tags: ["cutting", "construction tools", "dealers"] },
];
