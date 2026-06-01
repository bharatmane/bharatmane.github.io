export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="content-width py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-2xl text-text-primary tracking-tight">BM</span>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/bharatmane' },
            { label: 'Medium', href: 'https://bharatmane.medium.com' },
            { label: 'Flickr', href: 'https://www.flickr.com/photos/bharatmane/' },
            { label: 'WordPress', href: 'https://bharatmane.wordpress.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>

        <p className="font-sans text-xs text-text-secondary">
          © {year} Bharat Mane
        </p>
      </div>
    </footer>
  )
}
