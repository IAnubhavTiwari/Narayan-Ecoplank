import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream dark:bg-forest-dark flex items-center justify-center px-6 transition-colors">
      <div className="text-center">
        <p className="font-mono-caps text-[10px] tracking-[0.3em] text-gold uppercase mb-6">
          404 — Page Not Found
        </p>
        <h1
          className="font-display text-forest dark:text-white font-semibold mb-6 leading-tight"
          style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
        >
          Lost in the{' '}
          <em className="text-gold not-italic">Forest?</em>
        </h1>
        <p className="text-gray-500 dark:text-white/60 text-lg font-light max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary-nep">
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-forest dark:border-white/30 text-forest dark:text-white font-mono-caps text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-forest hover:text-white transition-all"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
