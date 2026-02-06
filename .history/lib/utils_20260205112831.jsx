export const PLACEHOLDER_IMAGES = {
  animals: [
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w-800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w-800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w-800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w-800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w-800&auto=format&fit=crop&q=60',
  ],
  testimonials: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=60',
  team: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
};

export function getAnimalImage(index: number): string {
  const images = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60', // Dog 1
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&auto=format&fit=crop&q=60', // Cat 1
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60', // Dog 2
    'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w=800&auto=format&fit=crop&q=60', // Cat 2
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60', // Dog 3
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60', // Cat 3
  ];
  return images[index % images.length];
}