import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchIndex } from "../service/searchUtils";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";

  const results = useMemo(() => searchIndex(q, 50), [q]);

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Search</h1>

      <form
        className="mb-6"
        onSubmit={(e) => {
          e.preventDefault();
          const nextQ = e.currentTarget.q.value;
          // Keep using the browser address bar to manage the query
          window.location.assign(`/search?q=${encodeURIComponent(nextQ)}`);
        }}
      >
        <input
          name="q"
          defaultValue={q}
          placeholder="Search pages, brands, equipment..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-primary/40"
        />
      </form>

      {q ? (
        results.length ? (
          <ul className="space-y-3">
            {results.map((r) => (
              <li key={r.id} className="border rounded-md p-4 hover:shadow-sm transition">
                <Link to={r.path} className="text-primary font-medium underline">
                  {r.title}
                </Link>
                {r.tags?.length ? (
                  <p className="mt-1 text-xs text-gray-600">
                    Tags: {r.tags.join(", ")}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">
            No results for <span className="font-medium">“{q}”</span>. Try “Volvo”, “drilling”, “services”, etc.
          </p>
        )
      ) : (
        <p className="text-gray-600">Type something to search.</p>
      )}
    </main>
  );
}
