import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Lowcountry Guns & Range",
    };
  }

  return {
    title: `${post.metaTitle} | Lowcountry Guns`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate JSON-LD for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [`https://lowcountryguns.com${post.image}`],
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "Lowcountry Guns & Range",
      "url": "https://lowcountryguns.com"
    }]
  };

  return (
    <article className="flex flex-col w-full bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={`object-cover ${post.imageClass || ""}`}
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        <div className="content-container relative z-10 py-12 text-center text-white">
          <Link 
             href="/blog"
             className="inline-flex items-center text-xs font-bold tracking-widest uppercase mb-6 hover:text-[var(--color-primary-base)] transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="text-sm font-medium uppercase tracking-wider mb-2 text-white/80">
            {post.category} • {post.date}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4 tracking-tight drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="section-spacing">
        <div className="content-container max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex items-center justify-between py-6 border-b border-[var(--color-card-border)] mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--color-surface)] relative">
                <Image
                   src="/images/logo-dark.png"
                   alt="LCGUNS Logo"
                   fill
                   className="object-contain p-2"
                />
              </div>
              <div>
                <div className="font-bold text-sm">Lowcountry Guns & Range</div>
                <div className="text-xs text-[var(--color-muted-fg-light)]">Official Training Center</div>
              </div>
            </div>
            
            <div className="hidden sm:flex gap-4">
               {/* Placeholders for social share if needed */}
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-zinc max-w-none 
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:text-[var(--color-foreground)] 
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 
            [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-[var(--color-muted-fg)] [&>p]:mb-6
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:text-[var(--color-muted-fg)]
            [&>li]:mb-3 [&>strong]:text-[var(--color-foreground)] [&>strong]:font-bold
            [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--color-primary-base)] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer CTA */}
          <div className="mt-20 p-8 md:p-12 bento-card bg-[var(--color-surface)] text-center">
             <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit us in Hardeeville, SC</h2>
             <p className="mb-8 text-[var(--color-muted-fg)]">
               Our indoor range is open 7 days a week. Come experience the most professional shooting environment in the Lowcountry.
             </p>
             <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/the-range" className="px-6 py-3 bg-gradient-brand text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                  Visit the Range
                </Link>
                <Link href="/training" className="px-6 py-3 border border-[var(--color-card-border)] bg-white text-[var(--color-foreground)] font-bold rounded-lg hover:bg-gray-50 transition-all">
                   Explore Classes
                </Link>
             </div>
          </div>

          {/* More Articles */}
          <div className="mt-24 border-t border-[var(--color-card-border)] pt-16">
            <h2 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-[var(--color-muted-fg-light)]">More from the Lowcountry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {BLOG_POSTS
                 .filter(p => p.slug !== slug)
                 .slice(0, 2)
                 .map((relatedPost) => (
                   <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-sm border border-[var(--color-card-border)]">
                        <Image src={relatedPost.image} alt={relatedPost.title} fill className={`object-cover group-hover:scale-105 transition-transform duration-500 ${relatedPost.imageClass || ""}`} />
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-[var(--color-primary-base)] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted-fg)] line-clamp-2 mt-2">
                        {relatedPost.excerpt}
                      </p>
                   </Link>
                 ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
