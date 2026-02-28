export interface Product {
  id: string;
  name: string;
  artist: string;
  price: number;
  image: string;
  category: 'Arts' | 'Crafts';
  description: string;
  city: string;
  rating: number;
  reviews: number;
}

export interface Tutorial {
  id: string;
  title: string;
  seller: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: 'Free' | 'Paid';
  thumbnail: string;
}

export interface Event {
  id: string;
  title: string;
  city: string;
  date: string;
  type: string;
  image: string;
}

export interface Seller {
  id: string;
  name: string;
  bio: string;
  city: string;
  image: string;
  isVerified: boolean;
}

export const artsProducts: Product[] = [
  {
    id: 'a1',
    name: 'Sunset Over Lahore',
    artist: 'Ahmed Khan',
    price: 15000,
    image: 'https://picsum.photos/seed/art1/800/600',
    category: 'Arts',
    description: 'Original oil painting capturing the vibrant colors of Lahore at dusk.',
    city: 'Lahore',
    rating: 4.8,
    reviews: 12,
  },
  {
    id: 'a2',
    name: 'Abstract Souls No. 3',
    artist: 'Saira Malik',
    price: 12000,
    image: 'https://picsum.photos/seed/art2/800/600',
    category: 'Arts',
    description: 'Modern abstract piece exploring human emotions through textures.',
    city: 'Karachi',
    rating: 4.5,
    reviews: 8,
  },
  {
    id: 'a3',
    name: 'Mughal Miniature Modern',
    artist: 'Zainab Bibi',
    price: 25000,
    image: 'https://picsum.photos/seed/art3/800/600',
    category: 'Arts',
    description: 'A contemporary take on traditional Mughal miniature art.',
    city: 'Islamabad',
    rating: 4.9,
    reviews: 15,
  },
  {
    id: 'a4',
    name: 'Karachi Streets',
    artist: 'Bilal Ahmed',
    price: 8000,
    image: 'https://picsum.photos/seed/art4/800/600',
    category: 'Arts',
    description: 'Sketch of the busy streets of Saddar, Karachi.',
    city: 'Karachi',
    rating: 4.2,
    reviews: 5,
  },
  {
    id: 'a5',
    name: 'Calligraphy of Peace',
    artist: 'Hassan Ali',
    price: 18000,
    image: 'https://picsum.photos/seed/art5/800/600',
    category: 'Arts',
    description: 'Intricate Arabic calligraphy on canvas.',
    city: 'Multan',
    rating: 4.7,
    reviews: 20,
  },
  {
    id: 'a6',
    name: 'The Indus Flow',
    artist: 'Fatima Noor',
    price: 22000,
    image: 'https://picsum.photos/seed/art6/800/600',
    category: 'Arts',
    description: 'Waterfall landscape painting inspired by the Indus River.',
    city: 'Peshawar',
    rating: 4.6,
    reviews: 10,
  },
  {
    id: 'a7',
    name: 'Truck Art Canvas',
    artist: 'Gul Khan',
    price: 5000,
    image: 'https://picsum.photos/seed/art7/800/600',
    category: 'Arts',
    description: 'Vibrant Pakistani truck art miniature on canvas.',
    city: 'Rawalpindi',
    rating: 4.4,
    reviews: 30,
  },
  {
    id: 'a8',
    name: 'Sufi Whirling',
    artist: 'Omar Sheikh',
    price: 30000,
    image: 'https://picsum.photos/seed/art8/800/600',
    category: 'Arts',
    description: 'Grand painting depicting a Sufi dervish in spiritual motion.',
    city: 'Lahore',
    rating: 5.0,
    reviews: 25,
  },
  {
    id: 'a9',
    name: 'Himalayan Peaks',
    artist: 'Sara Jahan',
    price: 13500,
    image: 'https://picsum.photos/seed/art9/800/600',
    category: 'Arts',
    description: 'Cold winter landscape of the northern mountains.',
    city: 'Quetta',
    rating: 4.5,
    reviews: 7,
  },
  {
    id: 'a10',
    name: 'The Old Banyan Tree',
    artist: 'Imran Malik',
    price: 9500,
    image: 'https://picsum.photos/seed/art10/800/600',
    category: 'Arts',
    description: 'Detailed charcoal drawing of an ancient Banyan tree.',
    city: 'Faisalabad',
    rating: 4.3,
    reviews: 11,
  },
  {
    id: 'a11',
    name: 'Digital Desi Futurism',
    artist: 'Ali Raza',
    price: 4500,
    image: 'https://picsum.photos/seed/art11/800/600',
    category: 'Arts',
    description: 'Digital art print merging tech and Pakistani culture.',
    city: 'Lahore',
    rating: 4.8,
    reviews: 40,
  },
  {
    id: 'a12',
    name: 'Floral Serenity',
    artist: 'Mina Bakshi',
    price: 7000,
    image: 'https://picsum.photos/seed/art12/800/600',
    category: 'Arts',
    description: 'Watercolor painting of local Pakistani flora.',
    city: 'Sialkot',
    rating: 4.5,
    reviews: 9,
  },
];

export const craftsProducts: Product[] = [
  {
    id: 'c1',
    name: 'Hand-Crocheted Lavender Blanket',
    artist: 'Farah Ahmed',
    price: 6500,
    image: 'https://picsum.photos/seed/craft1/800/600',
    category: 'Crafts',
    description: 'Soft, hand-knitted lavender blanket for chilly evenings.',
    city: 'Lahore',
    rating: 4.9,
    reviews: 45,
  },
  {
    id: 'c2',
    name: 'Embroidered Floral Tote Bag',
    artist: 'Nida Jamil',
    price: 2500,
    image: 'https://picsum.photos/seed/craft2/800/600',
    category: 'Crafts',
    description: 'Durable canvas tote bag with hand-embroidered floral patterns.',
    city: 'Karachi',
    rating: 4.7,
    reviews: 32,
  },
  {
    id: 'c3',
    name: 'Blue Pottery Vase',
    artist: 'Saeed Multani',
    price: 4000,
    image: 'https://picsum.photos/seed/craft3/800/600',
    category: 'Crafts',
    description: 'Traditional Multani blue pottery vase, hand-painted.',
    city: 'Multan',
    rating: 5.0,
    reviews: 18,
  },
  {
    id: 'c4',
    name: 'Handmade Silver Jhumkas',
    artist: 'Nazia Shah',
    price: 5500,
    image: 'https://picsum.photos/seed/craft4/800/600',
    category: 'Crafts',
    description: 'Exquisite silver earrings with traditional Pakistani design.',
    city: 'Hyderabad',
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 'c5',
    name: 'Woolen Shawl from Swat',
    artist: 'Gul Meena',
    price: 8500,
    image: 'https://picsum.photos/seed/craft5/800/600',
    category: 'Crafts',
    description: 'Warm, hand-woven woolen shawl with Swati embroidery.',
    city: 'Swat',
    rating: 4.9,
    reviews: 12,
  },
  {
    id: 'c6',
    name: 'Macrame Wall Hanging',
    artist: 'Hina Pervez',
    price: 3200,
    image: 'https://picsum.photos/seed/craft6/800/600',
    category: 'Crafts',
    description: 'Boho-style macrame wall decor made from cotton rope.',
    city: 'Islamabad',
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 'c7',
    name: 'Ceramic Serving Bowl',
    artist: 'Asif Clay',
    price: 2800,
    image: 'https://picsum.photos/seed/craft7/800/600',
    category: 'Crafts',
    description: 'Hand-thrown ceramic bowl with sea-foam glaze.',
    city: 'Gujrat',
    rating: 4.5,
    reviews: 9,
  },
  {
    id: 'c8',
    name: 'Leather Handcrafted Wallet',
    artist: 'Usman Ghani',
    price: 2200,
    image: 'https://picsum.photos/seed/craft8/800/600',
    category: 'Crafts',
    description: 'Genuine leather wallet, hand-stitched for durability.',
    city: 'Sialkot',
    rating: 4.7,
    reviews: 28,
  },
  {
    id: 'c9',
    name: 'Sindhi Ajrak Ralli',
    artist: 'Bakhtawar',
    price: 7500,
    image: 'https://picsum.photos/seed/craft9/800/600',
    category: 'Crafts',
    description: 'Traditional Sindhi patchwork quilt (Ralli) with Ajrak patterns.',
    city: 'Hala',
    rating: 5.0,
    reviews: 7,
  },
  {
    id: 'c10',
    name: 'Terracotta Planters',
    artist: 'Bashir Ahmed',
    price: 1200,
    image: 'https://picsum.photos/seed/craft10/800/600',
    category: 'Crafts',
    description: 'Set of three hand-painted terracotta pots for indoor plants.',
    city: 'Lahore',
    rating: 4.4,
    reviews: 40,
  },
  {
    id: 'c11',
    name: 'Knitted Baby Booties',
    artist: 'Ayesha Khan',
    price: 1500,
    image: 'https://picsum.photos/seed/craft11/800/600',
    category: 'Crafts',
    description: 'Adorable pink and white knitted booties for infants.',
    city: 'Karachi',
    rating: 4.8,
    reviews: 55,
  },
  {
    id: 'c12',
    name: 'Beaded Festive Clutch',
    artist: 'Saima Ali',
    price: 4800,
    image: 'https://picsum.photos/seed/craft12/800/600',
    category: 'Crafts',
    description: 'Elegant hand-beaded clutch for weddings and events.',
    city: 'Lahore',
    rating: 4.6,
    reviews: 14,
  }
];

export const tutorials: Tutorial[] = [
  {
    id: 't1',
    title: 'Beginner Crochet: Your First Granny Square',
    seller: 'Farah Ahmed',
    duration: '45 mins',
    level: 'Beginner',
    price: 'Free',
    thumbnail: 'https://picsum.photos/seed/tut1/800/600',
  },
  {
    id: 't2',
    title: 'Watercolour Basics for Complete Beginners',
    seller: 'Mina Bakshi',
    duration: '1.5 hours',
    level: 'Beginner',
    price: 'Paid',
    thumbnail: 'https://picsum.photos/seed/tut2/800/600',
  },
  {
    id: 't3',
    title: 'Advanced Embroidery: Texturing with Silk',
    seller: 'Nida Jamil',
    duration: '2 hours',
    level: 'Advanced',
    price: 'Paid',
    thumbnail: 'https://picsum.photos/seed/tut3/800/600',
  },
  {
    id: 't4',
    title: 'Pottery Wheel: Centering Skills',
    seller: 'Saeed Multani',
    duration: '30 mins',
    level: 'Intermediate',
    price: 'Free',
    thumbnail: 'https://picsum.photos/seed/tut4/800/600',
  },
  {
    id: 't5',
    title: 'Modern Abstract Composition',
    seller: 'Saira Malik',
    duration: '1 hour',
    level: 'Intermediate',
    price: 'Paid',
    thumbnail: 'https://picsum.photos/seed/tut5/800/600',
  },
  {
    id: 't6',
    title: 'Jewelry Making: Working with Silver',
    seller: 'Nazia Shah',
    duration: '2.5 hours',
    level: 'Advanced',
    price: 'Paid',
    thumbnail: 'https://picsum.photos/seed/tut6/800/600',
  }
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Winter Craft Fair — Karachi',
    city: 'Karachi',
    date: 'Dec 15, 2026',
    type: 'Exhibition',
    image: 'https://picsum.photos/seed/event1/800/600',
  },
  {
    id: 'e2',
    title: 'Watercolour Workshop — Lahore',
    city: 'Lahore',
    date: 'Jan 10, 2027',
    type: 'Workshop',
    image: 'https://picsum.photos/seed/event2/800/600',
  },
  {
    id: 'e3',
    title: 'Islamabad Art Pop-up',
    city: 'Islamabad',
    date: 'Feb 05, 2027',
    type: 'Pop-up Shop',
    image: 'https://picsum.photos/seed/event3/800/600',
  },
  {
    id: 'e4',
    title: 'Traditional Pottery Festival',
    city: 'Multan',
    date: 'March 20, 2027',
    type: 'Festival',
    image: 'https://picsum.photos/seed/event4/800/600',
  },
  {
    id: 'e5',
    title: 'Embroidery Enthusiasts Meetup',
    city: 'Rawalpindi',
    date: 'April 12, 2027',
    type: 'Meetup',
    image: 'https://picsum.photos/seed/event5/800/600',
  },
  {
    id: 'e6',
    title: 'Faisalabad Textile Expo',
    city: 'Faisalabad',
    date: 'May 18, 2027',
    type: 'Expo',
    image: 'https://picsum.photos/seed/event6/800/600',
  }
];

export const sellers: Seller[] = [
  {
    id: 's1',
    name: 'Farah Ahmed',
    bio: 'Professional crocheter with 10 years of experience in creating soft wonders.',
    city: 'Lahore',
    image: 'https://i.pravatar.cc/150?u=farah',
    isVerified: true,
  },
  {
    id: 's2',
    name: 'Ahmed Khan',
    bio: 'Landscape artist specializing in oil paintings of Pakistani cities.',
    city: 'Lahore',
    image: 'https://i.pravatar.cc/150?u=ahmed',
    isVerified: true,
  },
  {
    id: 's3',
    name: 'Nida Jamil',
    bio: 'Embroidery artist bringing traditional patterns to modern fashion.',
    city: 'Karachi',
    image: 'https://i.pravatar.cc/150?u=nida',
    isVerified: true,
  },
  {
    id: 's4',
    name: 'Saeed Multani',
    bio: 'Master of Multani blue pottery with a heritage dating back generations.',
    city: 'Multan',
    image: 'https://i.pravatar.cc/150?u=saeed',
    isVerified: false,
  },
  {
    id: 's5',
    name: 'Saira Malik',
    bio: 'Contemporary abstract painter exploring the soul on canvas.',
    city: 'Karachi',
    image: 'https://i.pravatar.cc/150?u=saira',
    isVerified: true,
  },
  {
    id: 's6',
    name: 'Nazia Shah',
    bio: 'Silver jeweler creating intricate designs inspired by Mughal elegance.',
    city: 'Hyderabad',
    image: 'https://i.pravatar.cc/150?u=nazia',
    isVerified: true,
  }
];

export const messages = {
  'Crochet Corner': [
    { id: 1, user: 'Ayesha', text: 'Just finished my first scarf!', time: '10:30 AM' },
    { id: 2, user: 'Farah', text: 'That looks amazing! Which yarn did you use?', time: '10:35 AM' },
    { id: 3, user: 'Zain', text: 'Has anyone tried the puff stitch?', time: '11:00 AM' },
  ],
  'Painting Pals': [
    { id: 1, user: 'Bilal', text: 'What are the best watercolors for beginners?', time: '09:00 AM' },
    { id: 2, user: 'Mina', text: 'I recommend Winsor & Newton Cotman series.', time: '09:15 AM' },
  ],
  'Embroidery Enthusiasts': [
    { id: 1, user: 'Hina', text: 'Freehand embroidery is so therapeutic.', time: 'Yesterday' },
  ],
  'Pottery People': [
    { id: 1, user: 'Asif', text: 'Firing my first kiln today, wish me luck!', time: 'Just now' },
  ]
};
