import { notFound } from "next/navigation";
import Image from "next/image";
import { successStories } from "@/lib/successStories";
import { FaHeart, FaHome, FaStar } from "react-icons/fa";

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = successStories.find((s) => s.id === params.id);

  if (!story) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Image Section */}
          <div className="relative h-80 w-full">
            <Image
              src={story.image}
              alt={story.animalName}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">
            <div className="flex items-center gap-2 mb-4">
              <FaHeart className="text-red-500" />
              <span className="text-gray-500">{story.duration}</span>
            </div>

            <h1 className="text-4xl font-bold mb-6">
              {story.title}
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              {story.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-red-600 font-semibold mb-2">Before</h3>
                <p>{story.before}</p>
              </div>

              <div>
                <h3 className="text-green-600 font-semibold mb-2 flex items-center gap-2">
                  <FaStar className="text-yellow-500" /> After
                </h3>
                <p>{story.after}</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <div>
                <div className="text-sm text-gray-500">Adopted by</div>
                <div className="font-bold">{story.adopterName}</div>
              </div>
              <FaHome className="text-3xl text-amber-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}