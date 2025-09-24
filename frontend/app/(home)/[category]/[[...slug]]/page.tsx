import CategoryWrapper from "@/components/category/CategoryWrapper";
import NoNewsFound from "@/components/category/NoNewsFound";
import Details from "@/components/details/Details";
import { notFound } from "next/navigation";

// ---------- Types ----------
type Post = {
  id: string;
  title: string;
  slug: string;
  category: string;
  subCategory?: string;
  excerpt?: string;
  body?: string;
};

//  Mock data (no backend needed)
const POSTS: Post[] = [
  {
    id: "1",
    title: "Bangladesh GDP hits record",
    slug: "bd-gdp-2025",
    category: "national",
    subCategory: "economy",
    excerpt: "GDP rises on manufacturing and remittances.",
    body: "Full article about GDP growth…",
  },
  {
    id: "2",
    title: "Election Commission briefing",
    slug: "ec-briefing-sept",
    category: "national",
    subCategory: "politics",
    excerpt: "Key dates and guidelines announced.",
    body: "Full article about EC briefing…",
  },
  {
    id: "3",
    title: "National Day celebrations",
    slug: "national-day",
    category: "national",
    excerpt: "Parades, concerts and ceremonies nationwide.",
    body: "Full article about celebrations…",
  },
  // Extra category just to prove dynamic category works:
  {
    id: "4",
    title: "World Cup opener set",
    slug: "wc-opener",
    category: "sports",
    subCategory: "cricket",
    excerpt: "Schedule confirmed by organizers.",
    body: "Full article about WC opener…",
  },
];

//  Tiny “data layer” helpers
const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

async function getPostsByCategory(category: string): Promise<Post[]> {
  return POSTS.filter((p) => p.category === category);
}
async function getSubCategories(category: string): Promise<string[]> {
  return uniq(
    POSTS.filter((p) => p.category === category && p.subCategory).map(
      (p) => p.subCategory!
    ) // non-null since filtered
  );
}
async function getPostsBySubCategory(
  category: string,
  subCategory: string
): Promise<Post[]> {
  return POSTS.filter(
    (p) => p.category === category && p.subCategory === subCategory
  );
}
async function getPostBySlug(args: {
  category: string;
  postSlug: string;
  subCategory?: string;
}): Promise<Post | null> {
  const { category, postSlug, subCategory } = args;

  // If subCategory is provided
  if (subCategory) {
    return (
      POSTS.find(
        (p) =>
          p.category === category &&
          p.slug === postSlug &&
          p.subCategory === subCategory
      ) ?? null
    );
  }

  // If no subCategory → just find by category + slug
  return (
    POSTS.find((p) => p.category === category && p.slug === postSlug) ?? null
  );
}

const titleCase = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// handles all 4 URL shapes
export default async function Page({
  params,
}: {
  params: { category: string; slug?: string[] };
}) {
  const { category, slug } = await params;

  //   console.log(category, slug);

  // 0 segments → /[category] → LIST (all news in category)
  if (!slug) {
    const posts = await getPostsByCategory(category);
    if (posts.length === 0) return <NoNewsFound />;

    //   return <PostList title={titleCase(category)} posts={posts} />;
    return <CategoryWrapper />;
  }

  // 1 segment → could be SUBCATEGORY LIST or NEWS DETAILS (category-only post)
  if (slug.length === 1) {
    const [one] = slug;

    // [category]/[subCategory] -> LIST (all news in subCategory)
    const subs = await getSubCategories(category);
    // console.log("subcategory", subs);

    if (subs.includes(one)) {
      const posts = await getPostsBySubCategory(category, one);
      //   console.log("posts subcategory", posts);

      if (posts.length === 0) return <NoNewsFound />;

      return <CategoryWrapper />;
    }

    // [category]/[news] -> DETAILS (category's news)
    console.log("slug", one);
    const post = await getPostBySlug({ category, postSlug: one });
    // console.log("post form category with slug", post);

    if (!post) return <NoNewsFound />;

    return <Details />;
  }

  // [category]/[subCategory]/[news] -> DETAILS (subCategory's news)
  if (slug.length === 2) {
    const [subCategory, postSlug] = slug;
    const post = await getPostBySlug({ category, subCategory, postSlug });

    if (!post) return notFound();

    return <Details />;
  }

  // More than 2 segments → 404
  notFound();
}
