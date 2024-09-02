import { createHooks } from "hookable";
import linkfn from "./md-lint-checkLink.mjs";
import disidfn from "./md-lint-discussionID.mjs";
import releasefn from "./md-lint-release.mjs";

export const hooks = createHooks();

hooks.hook("lint", disidfn);
hooks.hook("lint", releasefn);
hooks.hook("lint", linkfn);
