export default function WorkshopChennai() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-[36px] leading-[1.25] tracking-wide mb-10">
          Workshop - Chennai
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

          {/* Row 1 - Two Images */}
          <div className="inline-block">
            <img
              src="/assets/workshop-1.jpg"
              alt="Workshop Image 1"
              width={436}
              height={259}
              className=" object-contain"
            />
          </div>

          <div className="inline-block">
            <img
              src="/assets/workshop-2.jpg"
              alt="Workshop Image 2"
              width={436}
              height={259}
              className=" object-contain"
            />
          </div>

          {/* Row 2 - Large Workshop Photo */}
          <div className="inline-block">
            <img
              src="/assets/workshop-3.jpg"
              alt="Workshop Image 3"
              width={436}
              height={259}
              className=" object-contain"
            />
          </div>

          {/* Certificate Image */}
          <div className="inline-block">
            <img
              src="/assets/workshop-4.jpg"
              alt="Certificate"
              width={436}
              height={259}
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
