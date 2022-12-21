import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 370,
  site: "linktree",
  domains: ["linktree.deco.site"],
});