export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Starbucks Rebrand. All rights reserved.</p>
        <p className="text-sm">Brewed fresh with ❤️ for coffee lovers.</p>
      </div>
    </footer>
  );
}
