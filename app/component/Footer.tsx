export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 Luca3. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
