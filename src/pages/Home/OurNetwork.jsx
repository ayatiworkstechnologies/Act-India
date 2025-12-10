export default function OurNetwork() {
  return (
    <section className="max-w-7xl mx-auto py-8 px-3 sm:py-12 sm:px-8">
      <div className="w-full flex justify-center">
        {/* Mobile Image */}
        <img
          src="/assets/our-network-mob.jpg"
          alt="Our Network Map Mobile"
          className="block sm:hidden w-full rounded-lg"
        />

        {/* Desktop Image */}
        <img
          src="/assets/our-network-new.png"
          alt="Our Network Map"
          className="hidden sm:block w-4/5 md:max-w-6xl rounded-lg"
        />
      </div>
    </section>
  );
}
