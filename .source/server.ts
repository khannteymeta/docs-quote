// @ts-nocheck
import * as __fd_glob_3 from "../content/docs/rich-dad-poor-dad.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/quotes.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/atomic-habits.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.docs("docs", "content/docs", {}, {"atomic-habits.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "quotes.mdx": __fd_glob_2, "rich-dad-poor-dad.mdx": __fd_glob_3, });