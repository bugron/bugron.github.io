import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "../contants";
const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("docs");
  
  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.date ?? new Date('2024-01-07'),
      link: post.slug === 'index' ? '/' : `/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    stylesheet: '/rss/pretty-feed-v3.xsl',
  });
}
