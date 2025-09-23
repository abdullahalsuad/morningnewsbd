import CategoryWrapper from "@/components/category/CategoryWrapper";
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

  return (
    POSTS.find(
      (p) =>
        p.category === category &&
        p.slug === postSlug &&
        (subCategory ? p.subCategory === subCategory : !p.subCategory)
    ) ?? null
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

  console.log(category, slug);

  // 0 segments → /[category] → LIST (all posts in category)
  if (!slug) {
    const posts = await getPostsByCategory(category);
    if (posts.length === 0) notFound();
    //   return <PostList title={titleCase(category)} posts={posts} />;
    return <CategoryWrapper />;
  }

  // 1 segment → could be SUBCATEGORY LIST or POST DETAILS (category-only post)
  if (slug.length === 1) {
    const [one] = slug;

    // Is it a known subcategory? → LIST
    const subs = await getSubCategories(category);
    if (subs.includes(one)) {
      const posts = await getPostsBySubCategory(category, one);
      if (posts.length === 0) notFound();

      return <CategoryWrapper />;
    }

    // Otherwise treat as a POST in category (no subcategory) → DETAILS
    const post = await getPostBySlug({ category, postSlug: one });
    if (!post) notFound();
    return <Details />;
  }

  // 2 segments → /[category]/[subCategory]/[post] → DETAILS
  if (slug.length === 2) {
    const [subCategory, postSlug] = slug;
    const post = await getPostBySlug({ category, subCategory, postSlug });
    if (!post) notFound();
    return <Details />;
  }

  // More than 2 segments → 404
  notFound();
}

//  Simple UI components
function PostList({ title, posts }: { title: string; posts: Post[] }) {
  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>{title}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {posts.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
            }}
          >
            <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 8 }}>
              {titleCase(p.category)}
              {p.subCategory ? ` • ${titleCase(p.subCategory)}` : ""}
            </div>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>{p.title}</h2>
            <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 12 }}>
              {p.excerpt ?? "…"}
            </p>
            <a
              href={hrefForPost(p)}
              style={{ fontSize: 14, textDecoration: "underline" }}
            >
              Read
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

function PostDetails({ post }: { post: Post }) {
  return (
    <article style={{ padding: 24, maxWidth: 760, margin: "0 auto" }}>
      <a href={backHref(post)} style={{ textDecoration: "none" }}>
        ← Back
      </a>
      <h1 style={{ margin: "12px 0 8px", lineHeight: 1.2 }}>{post.title}</h1>
      <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 16 }}>
        {titleCase(post.category)}
        {post.subCategory ? ` • ${titleCase(post.subCategory)}` : ""}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.7 }}>
        {post.body ?? "Full article…"}
      </div>
    </article>
  );
}

//  URL helpers
function hrefForPost(p: Post) {
  return p.subCategory
    ? `/${p.category}/${p.subCategory}/${p.slug}`
    : `/${p.category}/${p.slug}`;
}

function backHref(p: Post) {
  return p.subCategory ? `/${p.category}/${p.subCategory}` : `/${p.category}`;
}
