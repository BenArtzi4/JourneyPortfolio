export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background/50 backdrop-blur-sm mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <p className="text-center text-sm text-foreground-subtle">
          &copy; {new Date().getFullYear()} Gal Ben Artzi
        </p>
      </div>
    </footer>
  );
}
