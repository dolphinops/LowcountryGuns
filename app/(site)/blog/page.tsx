import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Lowcountry Guns & Range | Shooting Tips & Local Guides",
  description: "Stay informed with shooting tips, local guides for Hardeeville and Hilton Head, and the latest firearms training updates from Lowcountry Guns & Range.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-section">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/IMG_8232.webp"
            alt="Range background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="content-container relative z-10 text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-white border border-[var(--color-primary-base)] text-[var(--color-primary-base)] rounded-full animate-fade-up">
            Our Blog
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-1">
            Shooting <span className="text-gradient">Insights</span> & Local Guides
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-muted-fg)] max-w-2xl mx-auto animate-fade-up delay-2">
            Expert advice, local area guides, and firearms safety information from the premiere indoor range in the SC Lowcountry.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bento-card p-0 flex flex-col overflow-hidden hover:translate-y-[-4px] transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 3)}s` }}
              >
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-110 ${post.imageClass || ""}`}
                    />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/90 text-[var(--color-foreground)] rounded-full border border-[var(--color-card-border)]">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-[var(--color-muted-fg-light)] mb-2">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary-base)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-fg)] line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-[var(--color-primary-base)] group-hover:gap-2 transition-all">
                    Read Article 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Local SEO Footer CTA */}
      <section className="section-spacing bg-[var(--color-surface)]">
        <div className="content-container">
          <div className="bento-card p-8 md:p-12 text-center max-w-4xl mx-auto bg-white">
            <h2 className="text-3xl font-bold mb-4">Planning a trip to Hardeeville?</h2>
            <p className="text-[var(--color-muted-fg)] mb-8 max-w-2xl mx-auto">
              Whether you're visiting from Hilton Head, Savannah, or live right here in the Lowcountry, our range is open 7 days a week to serve you. No membership required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/the-range" className="px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:shadow-lg transition-all text-center">
                View Range Info
              </Link>
              <Link href="/faq" className="px-8 py-4 border border-[var(--color-card-border)] text-[var(--color-foreground)] font-bold rounded-lg hover:bg-gray-50 transition-all text-center">
                Frequently Asked Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
