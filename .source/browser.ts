// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"atomic-habits.mdx": () => import("../content/docs/atomic-habits.mdx?collection=docs"), "guide.mdx": () => import("../content/docs/guide.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "quotes.mdx": () => import("../content/docs/quotes.mdx?collection=docs"), }),
};
export default browserCollections;