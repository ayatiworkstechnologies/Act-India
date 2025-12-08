import React from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Chennai",
    address:
      "No.5/55, Forest Range Road, Kolathurambakkam Post & Village, Poonamallee Taluk, Thiruvallur Dist., Chennai, Tamil Nadu, 600124.",
  },
  {
    city: "Tirunelveli",
    address:
      "No.165/2, D.No.8/4/5-E1, Valli Illam, Madurai Main Road, Sankar Nagar, Tirunelveli - 627001.",
  },
  {
    city: "Coimbatore - Sulur",
    address:
      "S.F NO. 560/241, Periya Kadu, Kanuvampalayam, Near Kathayai Toll Plaza, Sulur (Tk), Coimbatore - 641659.",
  },
  {
    city: "Hosur",
    address: "Plot No: 81 & 93, Elumalai Nagar, Muthalli Road, Hosur - 635109.",
  },
  {
    city: "Karur",
    address:
      "DVN Building, 1st Floor, Kovai Road, Near Periyar Arch, Karur - 639002.",
  },
  {
    city: "Salem",
    address:
      "4/335-1st Floor, Raman Illam, Chinnayagoundar Kadu, Pallapatti, Lajapathrai Bazaar, Salem - 636009.",
  },
  {
    city: "Trichy",
    address:
      "No.6/257/1, Nandhi Nagar, No.1 Toll Gate, Pitchandarkovil, Manachanallur, Trichy - 621216.",
  },
  {
    city: "Madurai",
    address:
      "Flat No:15, Sowbhagya Nagar, 4th Street, Seethakathi Nagar, Thirupparankundram, Madurai - 625006.",
  },
  {
    city: "Kozhikode",
    address: "15/224 C7, Vallikkunnu, Pantheerankavu P.O, Kozhikode - 673019.",
  },
  {
    city: "Trivandrum",
    address:
      "T.C.24/2497, MN Towers, Vettu Road, Near Sakthi School, Karamana, Trivandrum - 695583.",
  },
  {
    city: "Aluva",
    address:
      "Door No. VI/267A, Second Floor, Rayyan Tower, Mukkampeedika, Aluva - 683511.",
  },
];

export default function OfficeLocations() {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Map */}
        <div className="w-full h-[500px]">
          <iframe
            title="office-map"
            className="w-full h-full shadow-lg border rounded-md"
            src="https://www.google.com/maps?q=13.0827,80.2707&z=12&output=embed" // Chennai center
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right: Locations List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md p-5 rounded-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                {/* Icon container */}
                <div className="flex items-center justify-center w-6 h-6 shrink-0">
                  <MapPin className="text-secondary w-8 h-8" />
                </div>

                {/* Text section */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
