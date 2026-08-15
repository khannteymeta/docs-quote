import Link from "next/link";
import Image from "next/image";
import { FullSearchTrigger } from "fumadocs-ui/layouts/shared/slots/search-trigger";
import LandingBackground from "./components/LandingBackground";
import VideoShowcase from "./components/VideoShowcase";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#ffffff] text-[#001f5c] overflow-hidden font-sans">
      <LandingBackground />

      {/* Decorative ambient brand glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-[#FFCC00]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#001f5c]/10 blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-[rgba(0,31,92,0.1)] bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Dq Logo"
              width={140}
              height={140}
              className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform"
              priority
            />
          </Link>
          <nav className="flex items-center gap-4 md:gap-8">
            <FullSearchTrigger className="w-36 md:w-56 border-[rgba(0,31,92,0.15)] bg-zinc-50/80 hover:bg-zinc-100/90 text-[#001f5c]" />
            <Link
              href="/docs"
              className="text-sm font-bold text-[#001f5c] hover:text-[#FFCC00] transition-colors"
            >
              Library
            </Link>
            <Link
              href="/docs/quotes"
              className="text-sm font-bold text-[#001f5c] hover:text-[#FFCC00] transition-colors"
            >
              Quotes
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,31,92,0.15)] bg-[rgba(0,31,92,0.05)] text-xs text-[#001f5c] mb-6 font-bold uppercase tracking-wider">
            📖 Active Reading & Knowledge Hub
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-[#001f5c]">
            Grow your mind
          
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-600 mb-10 leading-relaxed">
            Welcome to my personal reading space. Here, I share summaries, life lessons, and key quotes from books that have shaped my habits, mindset, and perspective.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#001f5c] text-[#FFCC00] font-bold hover:bg-[#FFCC00] hover:text-[#001f5c] transition-all shadow-[0_4px_15px_rgba(0,31,92,0.2)] hover:-translate-y-0.5 text-center"
            >
              Start Reading
            </Link>
            <Link
              href="/docs/quotes"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border-2 border-[#001f5c] text-[#001f5c] font-bold hover:bg-[#001f5c] hover:text-white transition-all hover:-translate-y-0.5 text-center"
            >
              Explore Quotes
            </Link>
          </div>
        </div>

        {/* Video Showcase Card */}
        <div className="mb-24">
          <VideoShowcase />
        </div>

        {/* Creator Bio Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-[rgba(0,31,92,0.1)] pt-16">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-[#001f5c] border border-[rgba(0,31,92,0.2)] relative shadow-2xl group">
              <Image
                src="/passionate.png"
                alt="A Passionate Reader"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/85 via-[#001f5c]/25 to-transparent pointer-events-none" />
              <div className="absolute inset-8 flex flex-col justify-end text-white z-10">
                <span className="text-xs uppercase tracking-widest text-[#FFCC00] font-bold mb-1"></span>
                <h3 className="text-2xl font-extrabold mb-1">A Passionate Reader</h3>
                <p className="text-xs text-zinc-200">Distilling knowledge, sharing experiences.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#001f5c] px-3.5 py-1 bg-[rgba(0,31,92,0.08)] rounded-full">
              About the Platform
            </span>
            <h2 className="text-3xl font-extrabold text-[#001f5c]">
              I believe in reading actively, not passively.
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Reading books is wonderful, but retaining and applying that knowledge is where the magic happens. I built this library to compile lessons from my journeys through pages, keeping key concepts easily accessible for everyone.
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              From productivity frameworks and habit systems to mindfulness guides, every page compiled here holds a piece of wisdom worth remembering and living by.
            </p>
            <div>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#001f5c] hover:text-[#FFCC00] transition-colors"
              >
                Explore the library &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Quote Block */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-[#FFCC00] transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative p-8 md:p-12 pl-10 md:pl-14 rounded-3xl bg-[#001f5c] border-2 border-[#001f5c] text-white shadow-xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-3" />
              <div className="absolute top-0 right-0 p-8 text-8xl text-white/10 font-serif pointer-events-none select-none">
                “
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFCC00] mb-4 block">
                  Featured Insight
                </span>
                <p className="text-xl md:text-2xl font-medium italic text-white mb-6 leading-relaxed">
                  &ldquo;You do not rise to the level of your goals. You fall to the level of your systems.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#FFCC00] rounded-full" />
                  <span className="text-sm font-semibold text-zinc-300">
                    James Clear, <span className="text-white font-medium">Atomic Habits</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Insights Preview Grid */}
        <section className="border-t border-[rgba(0,31,92,0.1)] pt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-[#001f5c]">
            Explore the Book Shelves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#001f5c] transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
              <div className="relative p-8 rounded-2xl bg-white border-2 border-[#001f5c] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#001f5c] font-bold uppercase tracking-widest mb-3 block">
                    Self-Improvement
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-[#001f5c] group-hover:text-[#FFCC00] transition-colors">
                    Atomic Habits
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Learn how tiny, daily 1% improvements accumulate into massive personal transformations over time.
                  </p>
                </div>
                <Link
                  href="/docs/atomic-habits"
                  className="text-sm font-bold text-[#001f5c] group-hover:text-[#FFCC00] inline-flex items-center gap-1 transition-colors"
                >
                  Read Summary &rarr;
                </Link>
              </div>
            </div>

            {/* Book Card 2 - Rich Dad Poor Dad */}
            <div className="relative group">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#FFCC00] transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
              <div className="relative p-8 rounded-2xl bg-white border-2 border-[#001f5c] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#001f5c] font-bold uppercase tracking-widest mb-3 block">
                    Finance & Mindset
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-[#001f5c] group-hover:text-[#FFCC00] transition-colors">
                    Rich Dad Poor Dad
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Master financial literacy, understand assets vs liabilities, and make money work for you.
                  </p>
                </div>
                <Link
                  href="/docs/rich-dad-poor-dad"
                  className="text-sm font-bold text-[#001f5c] group-hover:text-[#FFCC00] inline-flex items-center gap-1 transition-colors"
                >
                  Read Summary &rarr;
                </Link>
              </div>
            </div>

            {/* Book Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#001f5c] transition-transform group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
              <div className="relative p-8 rounded-2xl bg-white border-2 border-[#001f5c] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#001f5c] font-bold uppercase tracking-widest mb-3 block">
                    Wisdom
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-[#001f5c] group-hover:text-[#FFCC00] transition-colors">
                    Experience & Quotes
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    A compiled list of hand-written highlights, deep reflections, and insights from various books I have read.
                  </p>
                </div>
                <Link
                  href="/docs/quotes"
                  className="text-sm font-bold text-[#001f5c] group-hover:text-[#FFCC00] inline-flex items-center gap-1 transition-colors"
                >
                  Explore Quotes &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup (Styled with user hex colors) */}
        <section className="mt-24 p-8 md:p-12 rounded-3xl bg-[rgba(0,31,92,0.04)] border border-[rgba(0,31,92,0.1)] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#001f5c] mb-2">Join the Reading List</h3>
          <p className="text-zinc-600 text-sm md:text-base mb-6">
            Get an email once a month containing distilled key takeaways from the best books I read.
          </p>
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(0,31,92,0.1)] py-12 bg-white mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm gap-6">
          <p>© {new Date().getFullYear()} LIBRIS. Built for sharing knowledge & wisdom responsibly.</p>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-[#001f5c] transition-colors">Library</Link>
            <Link href="/docs/quotes" className="hover:text-[#001f5c] transition-colors">Quotes</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
