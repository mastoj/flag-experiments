import { flag } from "flags/next";

export const flagPrecomputed = flag<boolean>({
  key: "precomputed",
  description: "Precomputed flag",
  identify({ headers }) {
    const precomputedCookie = headers.get("x-precomputed");
    console.log("==> [flagPrecomputed identify]:", precomputedCookie);
    return { precomputed: precomputedCookie && precomputedCookie === "true" };
  },
  decide({ entities }) {
    console.log("==> [flagPrecomputed decide] entities:", entities);
    return entities.precomputed;
  },
});

export const flagDynamic = flag<boolean>({
  key: "dynamic",
  description: "Dynamic flag",
  identify({ headers }) {
    const precomputedCookie = headers.get("x-dynamic");
    console.log("==> [flagDynamic identify]:", precomputedCookie);
    return { precomputed: precomputedCookie && precomputedCookie === "true" };
  },
  decide({ entities }) {
    console.log("==> [flagDynamic decide] entities:", entities);
    return entities.precomputed;
  },
});

export const precomputedFlags = [flagPrecomputed] as const;
