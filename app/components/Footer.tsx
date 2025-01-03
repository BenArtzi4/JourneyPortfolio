export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-16 shadow-md">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Gal Ben Artzi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
