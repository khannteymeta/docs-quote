import Link from "next/link";
import LandingBackground from "./components/LandingBackground";
import VideoShowcase from "./components/VideoShowcase";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-zinc-800 overflow-hidden font-sans">
      <LandingBackground />


      {/* Decorative ambient natural glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-[#ebdccb]/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#d0dbd0]/30 blur-[130px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-[#e2dacb] bg-[#faf8f5]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider text-[#526352]">
              LIBRIS<span className="text-[#a88760] font-light">.insights</span>
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm font-semibold text-[#5a6b5a] hover:text-[#384238] transition-colors"
            >
              Library
            </Link>
            <Link
              href="/docs/quotes"
              className="text-sm font-semibold text-[#5a6b5a] hover:text-[#384238] transition-colors"
            >
              Quotes
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cbd5cb] bg-[#f0f4f0] text-xs text-[#4c5c4c] mb-6 font-semibold">
            🌱 Active Reading & Knowledge Journal
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-zinc-900">
            Grow your mind,
            <span className="block mt-2 text-[#6b7a6b]">
              one distilled book at a time.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-600 mb-8 leading-relaxed">
            Welcome to my cozy library. Here, I share summaries, life lessons, and key quotes from books that have changed my habits, mindset, and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#6b7a6b] text-white font-semibold hover:bg-[#5a6b5a] transition-all shadow-[0_4px_14px_rgba(107,122,107,0.2)] text-center"
            >
              Start Reading Insights
            </Link>
            <Link
              href="/docs/quotes"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#faf8f5] border border-[#cbd5cb] text-zinc-700 font-semibold hover:bg-[#f3eee5] transition-all text-center"
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
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-[#e2dacb] pt-16">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-[#ebe6dc] border border-[#e2dacb] relative shadow-lg">
              {/* Decorative paper background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6b7a6b]/20 to-transparent pointer-events-none" />
              <div className="absolute inset-8 flex flex-col justify-end text-zinc-800 z-10">
                <span className="text-xs uppercase tracking-widest text-[#6b7a6b] font-bold mb-1">Curator</span>
                <h3 className="text-2xl font-extrabold mb-1">A Passionate Reader</h3>
                <p className="text-xs text-zinc-600">Distilling knowledge, sharing experiences.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a88760] px-3 py-1 bg-[#f5eeda] rounded-full">
              About the Platform
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              I believe in reading actively, not passively.
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Reading books is wonderful, but retaining and applying that knowledge is where the magic happens. I built this library to compile lessons from my journeys through pages, keeping key concepts easily accessible for everyone.
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              From remote productivity frameworks and habit systems to mindfulness guides, every page compiled here holds a piece of wisdom worth remembering and living by.
            </p>
            <div>
              <Link
                href="/docs/guide"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6b7a6b] hover:text-[#5a6b5a]"
              >
                Read my active reading guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Quote Block */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#f5f2eb] border border-[#e2dacb] shadow-sm overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl text-zinc-300/30 font-serif pointer-events-none select-none">
              “
            </div>
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#a88760] mb-4 block">
                Featured Insight
              </span>
              <p className="text-xl md:text-2xl font-medium italic text-zinc-800 mb-6 leading-relaxed">
                &ldquo;You do not rise to the level of your goals. You fall to the level of your systems.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#6b7a6b] rounded-full" />
                <span className="text-sm font-semibold text-zinc-600">
                  James Clear, <span className="text-zinc-500 font-medium">Atomic Habits</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Book Insights Preview Grid */}
        <section className="border-t border-[#e2dacb] pt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-zinc-900">
            Explore the Book Shelves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book Card 1 */}
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e2dacb] hover:border-[#6b7a6b] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs text-[#a88760] font-semibold uppercase tracking-widest mb-3 block">
                  Self-Improvement
                </span>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-[#6b7a6b] transition-colors">
                  Atomic Habits
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Learn how tiny, daily 1% improvements accumulate into massive personal transformations over time.
                </p>
              </div>
              <Link
                href="/docs/atomic-habits"
                className="text-sm font-bold text-[#6b7a6b] group-hover:text-[#5a6b5a] inline-flex items-center gap-1 transition-colors"
              >
                Read Summary &rarr;
              </Link>
            </div>

            {/* Book Card 2 */}
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e2dacb] hover:border-[#6b7a6b] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs text-[#6b7a6b] font-semibold uppercase tracking-widest mb-3 block">
                  Wisdom
                </span>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-[#6b7a6b] transition-colors">
                  Experience & Quotes
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  A compiled list of hand-written highlights, deep reflections, and insights from various books I have read.
                </p>
              </div>
              <Link
                href="/docs/quotes"
                className="text-sm font-bold text-[#6b7a6b] group-hover:text-[#5a6b5a] inline-flex items-center gap-1 transition-colors"
              >
                Explore Quotes &rarr;
              </Link>
            </div>

            {/* Book Card 3 */}
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#e2dacb] hover:border-[#6b7a6b] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs text-[#5a6b5a] font-semibold uppercase tracking-widest mb-3 block">
                  How-To Guide
                </span>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-[#6b7a6b] transition-colors">
                  Reading Framework
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  How to actively read, annotate, highlight, and successfully implement book teachings into your daily life.
                </p>
              </div>
              <Link
                href="/docs/guide"
                className="text-sm font-bold text-[#6b7a6b] group-hover:text-[#5a6b5a] inline-flex items-center gap-1 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup (Cozy style) */}
        <section className="mt-24 p-8 md:p-12 rounded-3xl bg-[#f0f4f0] border border-[#cbd5cb] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Join the Reading List</h3>
          <p className="text-zinc-600 text-sm md:text-base mb-6">
            Get an email once a month containing distilled key takeaways from the best books I read.
          </p>
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e2dacb] py-12 bg-[#faf8f5] mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm gap-6">
          <p>© {new Date().getFullYear()} LIBRIS. Built for sharing knowledge & wisdom responsibly.</p>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-zinc-800 transition-colors">Library</Link>
            <Link href="/docs/quotes" className="hover:text-zinc-800 transition-colors">Quotes</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
