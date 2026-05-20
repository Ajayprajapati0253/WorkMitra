import {
  Phone,
  Mail,
  MapPin,
  Star,
  Heart,
  Briefcase
} from "lucide-react";

function Footer() {
  return (

    <footer className="bg-black text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>

          <h1 className="text-3xl font-bold text-yellow-400">
            WorkMitra
          </h1>

          <p className="mt-4 text-gray-400 leading-7">

            Find trusted local workers near your location.
            Mistri, Electrician, Painter, Beauty Parlor and more.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-yellow-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Workers
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Categories
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact Info */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">

              <Phone size={18} />

              <span>+91 9301793395</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail size={18} />

              <span>support@workmitra.com</span>

            </div>

            <div className="flex items-center gap-3">

              <MapPin size={18} />

              <span>Vidisha, Madhya Pradesh</span>

            </div>

          </div>

        </div>

        {/* Social Media */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Follow Us
          </h2>

          <div className="flex gap-4">

            <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">

              <Heart />

            </div>

            <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">

              <Star />

            </div>

            <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">

              <Briefcase />

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">

        © 2026 WorkMitra. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;