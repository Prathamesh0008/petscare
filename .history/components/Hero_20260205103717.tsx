import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
      <div>
        <h2 className="text-5xl font-bold leading-tight">
          Every Paw <br />
          Deserves a Home
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Rescuing, sheltering & rehoming dogs in Vashi.
          Paid services help us save street dogs for free.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#E07A5F] text-white px-6 py-3 rounded-full">
            Adopt a Dog
          </button>
          <button className="border border-[#E07A5F] text-[#E07A5F] px-6 py-3 rounded-full">
            Help a Street Dog
          </button>
        </div>
      </div>

      <Image
        src="/hero-dog.jpg"
        alt="Rescued dog"
        width={500}
        height={500}
        className="rounded-3xl"
      />
    </section>
  );
}
