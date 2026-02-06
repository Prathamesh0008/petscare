export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#E07A5F]">
        PawHaven Vashi
      </h1>

      <ul className="flex gap-6 font-medium">
        <li>Adopt</li>
        <li>Rescue</li>
        <li>Services</li>
        <li>Donate</li>
        <li>Volunteer</li>
      </ul>
    </nav>
  );
}
