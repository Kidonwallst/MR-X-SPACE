import { Product } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'iphones', name: 'iPhones', icon: 'Smartphone' },
  { id: 'samsung', name: 'Samsung Galaxy', icon: 'Tablet' },
  { id: 'laptops', name: 'Laptops', icon: 'Laptop' },
  { id: 'audio', name: 'Audio & Music', icon: 'Volume2' },
  { id: 'wearables', name: 'Wearables', icon: 'Watch' },
  { id: 'accessories', name: 'Accessories', icon: 'Plug' },
  { id: 'gaming', name: 'Gaming Gear', icon: 'Gamepad2' }
];

export const BRANDS = ['Apple', 'Samsung', 'Dell', 'Sony', 'Generic'];

export const MOCK_PRODUCTS: Product[] = [
  // --- iPHONE 17 SERIES ---
  {
    id: 'ip17-promax',
    name: 'iPhone 17 Pro Max 256GB',
    category: 'iphones',
    price: 1800000,
    brand: 'Apple',
    image: '📱',
    description: 'The upcoming pinnacle of Apple craftsmanship. Featuring the revolutionary next-generation A19 Pro chip, an expansive high-frequency ProMotion display, and a sleek titanium design with enhanced camera capabilities.',
    rating: 5.0,
    reviewsCount: 3,
    colors: ['Titanium Gold', 'Titanium Black', 'Titanium Silver'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple A19 Pro (2nm)',
      'Display': '6.9-inch Super Retina XDR OLED, 120Hz',
      'Camera': '48MP Triple Camera System with advanced Zoom',
      'Battery': 'Ultimate battery life with rapid charging',
      'Build': 'High-grade polished Titanium',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 'ip17-pro',
    name: 'iPhone 17 Pro 256GB',
    category: 'iphones',
    price: 1500000,
    brand: 'Apple',
    image: '📱',
    description: 'The futuristic Pro model offering high-tier productivity and design. Powered by Apple’s upcoming A19 Pro silicon, a fluid 120Hz display, and specialized photography tools in a compact shape.',
    rating: 4.9,
    reviewsCount: 2,
    colors: ['Titanium Gold', 'Titanium Space', 'Titanium White'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple A19 Pro (2nm)',
      'Display': '6.3-inch Super Retina XDR OLED, 120Hz',
      'Camera': '48MP Triple Pro Camera System',
      'Battery': 'Superb day-long power support',
      'Build': 'Titanium alloy frame, Ceramic Shield front',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 'ip17-base',
    name: 'iPhone 17 256GB',
    category: 'iphones',
    price: 1250000,
    brand: 'Apple',
    image: '📱',
    description: 'Apple’s flagship model for the modern user. Delivering advanced processing speeds, crystal clear displays, and long-lasting performance for everyday life.',
    rating: 4.8,
    reviewsCount: 1,
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Apple A19 Bionic',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': 'Dual 48MP Advanced Camera Matrix',
      'Battery': 'Up to 22 hours playback',
      'Build': 'Aerospace-grade Aluminum',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 'ip17-air',
    name: 'iPhone 17 Air 256GB',
    category: 'iphones',
    price: 1200000,
    brand: 'Apple',
    image: '📱',
    description: 'The highly-anticipated ultra-slim lifestyle iPhone. Striking the absolute finest balance between featherlight thickness and performance.',
    rating: 4.9,
    reviewsCount: 4,
    colors: ['Champagne Gold', 'Satin Black', 'Silver Frost'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple A19 Silicon',
      'Display': '6.6-inch Ultra-Slim Dynamic AMOLED',
      'Build': 'Featherweight high-tensile alloy frame',
      'Camera': 'Dual 48MP Lifestyle Camera',
      'Thickness': 'Redefined thin design format',
      'Condition': 'Brand New Sealed'
    }
  },

  // --- iPHONE 16 SERIES ---
  {
    id: 'ip16-promax-used',
    name: 'iPhone 16 Pro Max 256GB',
    category: 'iphones',
    price: 1170000,
    brand: 'Apple',
    image: '📱',
    description: 'Premium titanium flagship in pristine used condition. Features the revolutionary A18 Pro chip, the new physical Camera Control button, and a stunning 6.9-inch display.',
    rating: 4.9,
    reviewsCount: 88,
    colors: ['Desert Titanium', 'Natural Titanium', 'Black Titanium', 'White Titanium'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: true,
    specs: {
      'Processor': 'Apple A18 Pro (3nm)',
      'Display': '6.9-inch Super Retina XDR OLED, 120Hz',
      'Camera': '48MP Main + 48MP Ultra-Wide + 12MP 5x Telephoto',
      'Battery Health': 'Guaranteed 90%+ health, fully verified',
      'Build': 'Grade 5 Titanium, absolute mint condition',
      'Condition': 'Pre-owned (Foreign Used, Mint 10/10)'
    }
  },
  {
    id: 'ip16-pro-new',
    name: 'iPhone 16 Pro 128GB',
    category: 'iphones',
    price: 1180000,
    brand: 'Apple',
    image: '📱',
    description: 'Get the latest titanium beast brand new and sealed. Packed with the superfast A18 Pro silicon chip and a pro-grade triple-camera array with Camera Control.',
    rating: 4.9,
    reviewsCount: 42,
    colors: ['Desert Titanium', 'Natural Titanium', 'Black Titanium', 'White Titanium'],
    storageOptions: ['128GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple A18 Pro (3nm)',
      'Display': '6.3-inch Super Retina XDR OLED, 120Hz',
      'Camera': '48MP Main + 48MP Ultra-Wide + 12MP 3x Telephoto',
      'Battery': 'Up to 23 hours video playback',
      'Build': 'Grade 5 Titanium, sealed box',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 'ip16-base-new',
    name: 'iPhone 16 128GB',
    category: 'iphones',
    price: 890000,
    brand: 'Apple',
    image: '📱',
    description: 'The brand new iPhone 16 sealed. Highlights include the A18 chip, Camera Control, and the vibrant custom back-infused glass design.',
    rating: 4.7,
    reviewsCount: 30,
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    storageOptions: ['128GB'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Apple A18 (3nm)',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': '48MP Fusion + 12MP Ultra-Wide',
      'Battery': 'Up to 22 hours video playback',
      'Build': 'Aluminum and color-infused glass',
      'Condition': 'Brand New Sealed'
    }
  },

  // --- iPHONE 15 SERIES ---
  {
    id: 'ip15-promax-used',
    name: 'iPhone 15 Pro Max 256GB',
    category: 'iphones',
    price: 800000,
    brand: 'Apple',
    image: '📱',
    description: 'Stunning 15 Pro Max in verified clean condition. Experience Apple\'s initial titanium build, Action button, and 5x optical telephoto camera.',
    rating: 4.8,
    reviewsCount: 95,
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium', 'White Titanium'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: true,
    specs: {
      'Processor': 'Apple A17 Pro (3nm)',
      'Display': '6.7-inch Super Retina XDR, 120Hz ProMotion',
      'Camera': '48MP Main + 12MP Ultra-Wide + 12MP 5x Zoom',
      'Battery Health': 'Tested 88% - 95% battery capacity',
      'Build': 'Titanium Frame, spotless back glass',
      'Condition': 'Pre-owned (Foreign Used, Grade A+)'
    }
  },
  {
    id: 'ip15-pro-used',
    name: 'iPhone 15 Pro 128GB',
    category: 'iphones',
    price: 730000,
    brand: 'Apple',
    image: '📱',
    description: 'Superb pocketable titanium flagship in excellent grade condition. Fully unlocked, tested, and guaranteed ready for any carrier.',
    rating: 4.8,
    reviewsCount: 71,
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium', 'White Titanium'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A17 Pro (3nm)',
      'Display': '6.1-inch Super Retina XDR, 120Hz ProMotion',
      'Camera': '48MP Main + 12MP Ultra-Wide + 12MP 3x Zoom',
      'Battery Health': 'Fully tested 85%+ battery health',
      'Build': 'Titanium body with standard minor bezel wear if any',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip15-base-used',
    name: 'iPhone 15 128GB',
    category: 'iphones',
    price: 570000,
    brand: 'Apple',
    image: '📱',
    description: 'Get Dynamic Island and USB-C at an incredible price point in pristine foreign used condition. Spotless screen and fully functional.',
    rating: 4.6,
    reviewsCount: 54,
    colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A16 Bionic (4nm)',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': '48MP Main + 12MP Ultra-Wide',
      'Battery Health': 'Verified 87%+ original battery capacity',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- iPHONE 14 SERIES ---
  {
    id: 'ip14-promax-used',
    name: 'iPhone 14 Pro Max 128GB',
    category: 'iphones',
    price: 650000,
    brand: 'Apple',
    image: '📱',
    description: 'The phone that pioneered the Dynamic Island. Highly sought-after used model with beautiful 48MP main sensor and outstanding battery life.',
    rating: 4.8,
    reviewsCount: 112,
    colors: ['Deep Purple', 'Space Black', 'Gold', 'Silver'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A16 Bionic',
      'Display': '6.7-inch Super Retina XDR, Dynamic Island, 120Hz',
      'Camera': '48MP Main + 12MP Ultra-Wide + 12MP 3x Telephoto',
      'Battery Health': 'Tested 85%+ capacity guaranteed',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip14-pro-used',
    name: 'iPhone 14 Pro 128GB',
    category: 'iphones',
    price: 550000,
    brand: 'Apple',
    image: '📱',
    description: 'Dynamic Island, Always-On Display, and a stunning 48MP camera in a pristine, foreign-used 6.1-inch form factor.',
    rating: 4.7,
    reviewsCount: 89,
    colors: ['Deep Purple', 'Space Black', 'Gold', 'Silver'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A16 Bionic',
      'Display': '6.1-inch Super Retina XDR with ProMotion',
      'Camera': '48MP Pro Camera System',
      'Battery Health': 'Tested 85%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip14-base-used',
    name: 'iPhone 14 128GB',
    category: 'iphones',
    price: 460000,
    brand: 'Apple',
    image: '📱',
    description: 'Extremely robust performance, gorgeous lightweight feel, and stellar camera system in pristine pre-owned status.',
    rating: 4.6,
    reviewsCount: 65,
    colors: ['Midnight', 'Purple', 'Starlight', 'Blue', 'Red'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A15 Bionic with 5-core GPU',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': 'Dual 12MP Advanced Cameras',
      'Battery Health': 'Guaranteed 85%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- iPHONE 13 SERIES ---
  {
    id: 'ip13-promax-used',
    name: 'iPhone 13 Pro Max 256GB',
    category: 'iphones',
    price: 490000,
    brand: 'Apple',
    image: '📱',
    description: 'Widely praised for legendary battery life and 120Hz screen. Clean, scratch-free, and fully verified hardware.',
    rating: 4.8,
    reviewsCount: 140,
    colors: ['Sierra Blue', 'Graphite', 'Gold', 'Alpine Green'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A15 Bionic',
      'Display': '6.7-inch Super Retina XDR, ProMotion 120Hz',
      'Camera': 'Triple 12MP Pro Camera (Cinematic Mode)',
      'Battery Health': 'Tested 85%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip13-pro-used',
    name: 'iPhone 13 Pro 128GB',
    category: 'iphones',
    price: 470000,
    brand: 'Apple',
    image: '📱',
    description: 'The first iPhone to introduce ProMotion 120Hz display refresh. Exceptional raw performance and gorgeous styling.',
    rating: 4.7,
    reviewsCount: 99,
    colors: ['Sierra Blue', 'Graphite', 'Gold', 'Silver'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A15 Bionic',
      'Display': '6.1-inch Super Retina XDR, ProMotion 120Hz',
      'Camera': 'Triple 12MP with Telephoto, Macro features',
      'Battery Health': 'Tested 84%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip13-base-used',
    name: 'iPhone 13 128GB',
    category: 'iphones',
    price: 430000,
    brand: 'Apple',
    image: '📱',
    description: 'Excellent premium budget iPhone. Diagonal camera layout, solid battery performance, and gorgeous vibrant displays.',
    rating: 4.7,
    reviewsCount: 105,
    colors: ['Midnight', 'Blue', 'Pink', 'Starlight', 'Red'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A15 Bionic',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': 'Dual 12MP with Sensor-shift stabilization',
      'Battery Health': 'Tested 85%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- iPHONE 12 SERIES ---
  {
    id: 'ip12-promax-used',
    name: 'iPhone 12 Pro Max 128GB',
    category: 'iphones',
    price: 450000,
    brand: 'Apple',
    image: '📱',
    description: 'The iconic flat-edge design with premium steel sides. Gorgeous triple camera with lidar and expansive 6.7" screen.',
    rating: 4.6,
    reviewsCount: 150,
    colors: ['Pacific Blue', 'Graphite', 'Gold', 'Silver'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A14 Bionic (5nm)',
      'Display': '6.7-inch Super Retina XDR OLED',
      'Camera': 'Triple 12MP + LiDAR Scanner',
      'Battery Health': 'Tested 82%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip12-pro-used',
    name: 'iPhone 12 Pro 128GB',
    category: 'iphones',
    price: 350000,
    brand: 'Apple',
    image: '📱',
    description: 'Sturdy stainless steel frame, gorgeous premium screen, triple cameras, and complete high-end utility in pristine pre-owned state.',
    rating: 4.6,
    reviewsCount: 94,
    colors: ['Pacific Blue', 'Graphite', 'Gold', 'Silver'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A14 Bionic',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': 'Triple 12MP Camera System',
      'Battery Health': 'Tested 82%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip12-base-used',
    name: 'iPhone 12 128GB',
    category: 'iphones',
    price: 315000,
    brand: 'Apple',
    image: '📱',
    description: 'The model that introduced 5G and OLED screens to standard iPhones. Light, modern, and incredibly fast.',
    rating: 4.5,
    reviewsCount: 110,
    colors: ['Black', 'Blue', 'White', 'Green', 'Red'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A14 Bionic',
      'Display': '6.1-inch Super Retina XDR OLED',
      'Camera': 'Dual 12MP Camera System',
      'Battery Health': 'Tested 82%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- iPHONE 11 SERIES ---
  {
    id: 'ip11-promax-used',
    name: 'iPhone 11 Pro Max 256GB',
    category: 'iphones',
    price: 300000,
    brand: 'Apple',
    image: '📱',
    description: 'Highly resilient matte glass back with triple professional lens layout. Exceptional value offering great cameras and stellar screen.',
    rating: 4.6,
    reviewsCount: 168,
    colors: ['Midnight Green', 'Space Gray', 'Gold', 'Silver'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A13 Bionic',
      'Display': '6.5-inch Super Retina XDR OLED',
      'Camera': 'Triple 12MP Ultra-Wide, Wide, and Telephoto',
      'Battery Health': 'Tested 80%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip11-pro-used',
    name: 'iPhone 11 Pro 64GB',
    category: 'iphones',
    price: 250000,
    brand: 'Apple',
    image: '📱',
    description: 'Compact 5.8-inch premium design featuring beautiful texture and professional triple cameras. Perfect budget pocket power.',
    rating: 4.5,
    reviewsCount: 104,
    colors: ['Midnight Green', 'Space Gray', 'Gold', 'Silver'],
    storageOptions: ['64GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A13 Bionic',
      'Display': '5.8-inch Super Retina XDR OLED',
      'Camera': 'Triple 12MP Camera System',
      'Battery Health': 'Tested 80%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 'ip11-base-used',
    name: 'iPhone 11 128GB',
    category: 'iphones',
    price: 225000,
    brand: 'Apple',
    image: '📱',
    description: 'The ultimate budget king. Outstanding reliability, fluid performance, and tested cameras in pristine pre-owned status.',
    rating: 4.6,
    reviewsCount: 225,
    colors: ['Black', 'White', 'Purple', 'Green', 'Yellow'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Apple A13 Bionic',
      'Display': '6.1-inch Liquid Retina HD LCD',
      'Camera': 'Dual 12MP Cameras (Night Mode)',
      'Battery Health': 'Tested 81%+ health',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- SAMSUNG GALAXY S SERIES ---
  {
    id: 's25-ultra-512',
    name: 'Galaxy S25 Ultra 512GB',
    category: 'samsung',
    price: 1290000,
    brand: 'Samsung',
    image: '📱',
    description: 'Samsung’s latest absolute peak hardware. Showcases ultra-fast Snapdragon speeds, refined satin ergonomics, integrated Bluetooth S-Pen, and next-generation professional cameras.',
    rating: 5.0,
    reviewsCount: 5,
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Blue'],
    storageOptions: ['512GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Snapdragon 8 Gen 4 for Galaxy',
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Camera': '200MP Quad Pro AI Camera',
      'Battery': '5000mAh with 45W Fast Charging',
      'Accessories': 'Integrated active Bluetooth S-Pen included',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 's25-ultra-256',
    name: 'Galaxy S25 Ultra 256GB',
    category: 'samsung',
    price: 1220000,
    brand: 'Samsung',
    image: '📱',
    description: 'Experience pure peak Android with 256GB of blistering fast storage. Gorgeous rounded frame tweaks, full titanium design, and revolutionary built-in S-Pen productivity.',
    rating: 4.9,
    reviewsCount: 8,
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Silver'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Snapdragon 8 Gen 4 for Galaxy',
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Camera': '200MP Quad Pro AI Camera',
      'Battery': '5000mAh with 45W Fast Charging',
      'S-Pen': 'Integrated S-Pen included',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 's25-base',
    name: 'Galaxy S25 256GB',
    category: 'samsung',
    price: 760000,
    brand: 'Samsung',
    image: '📱',
    description: 'Sleek, exceptionally powerful compact flagship from Samsung. Delivering brilliant peak screen brightness and high-end processing power in your palm.',
    rating: 4.8,
    reviewsCount: 3,
    colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet'],
    storageOptions: ['256GB'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Snapdragon 8 Gen 4 / Exynos 2500',
      'Display': '6.2-inch Dynamic AMOLED 2X, 120Hz',
      'Camera': '50MP Triple Camera System',
      'Battery': '4000mAh with superfast charging',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 's24-ultra-new',
    name: 'Galaxy S24 Ultra 512GB',
    category: 'samsung',
    price: 1100000,
    brand: 'Samsung',
    image: '📱',
    description: 'Brand new, sealed Galaxy S24 Ultra. The phone that initiated the mobile AI revolution. Features premium titanium shell, outstanding camera versatility, and long-range telephoto lens.',
    rating: 4.9,
    reviewsCount: 62,
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Yellow', 'Titanium Violet'],
    storageOptions: ['512GB'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Camera': '200MP Main + 50MP Periscope + 12MP Ultra-Wide + 10MP Telephoto',
      'S-Pen': 'Integrated S-Pen included',
      'Condition': 'Brand New Sealed'
    }
  },
  {
    id: 's23-ultra-used',
    name: 'Galaxy S23 Ultra 512GB',
    category: 'samsung',
    price: 640000,
    brand: 'Samsung',
    image: '📱',
    description: 'Extremely powerful productivity powerhouse in stunning pre-owned grade condition. Offers 200MP camera resolution and massive 512GB space.',
    rating: 4.8,
    reviewsCount: 88,
    colors: ['Phantom Black', 'Green', 'Cream', 'Lavender'],
    storageOptions: ['512GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Snapdragon 8 Gen 2 for Galaxy',
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Camera': '200MP Main + 10MP Periscope (100x Space Zoom)',
      'Battery Health': 'Tested 88%+ capacity, fully unlocked',
      'Condition': 'Pre-owned (Foreign Used, Grade A+)'
    }
  },
  {
    id: 's22-ultra-used',
    name: 'Galaxy S22 Ultra 256GB',
    category: 'samsung',
    price: 565000,
    brand: 'Samsung',
    image: '📱',
    description: 'The model that merged the Galaxy S and Note lines. Complete with integrated Bluetooth S-Pen and pro cameras in verified clean used state.',
    rating: 4.7,
    reviewsCount: 112,
    colors: ['Phantom Black', 'Burgundy', 'Green', 'White'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Snapdragon 8 Gen 1 / Exynos 2200',
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Camera': '108MP Quad Pro Camera with 100x Space Zoom',
      'Battery Health': 'Tested 86%+ capacity',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 's21-used',
    name: 'Galaxy S21 256GB',
    category: 'samsung',
    price: 280000,
    brand: 'Samsung',
    image: '📱',
    description: 'Highly compact, ultra-light layout with superb triple lens arrangement. Tested, verified, and unlocked pre-owned flagship.',
    rating: 4.6,
    reviewsCount: 93,
    colors: ['Phantom Gray', 'Phantom White', 'Phantom Violet'],
    storageOptions: ['256GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Snapdragon 888 / Exynos 2100',
      'Display': '6.2-inch Dynamic AMOLED 2X, 120Hz',
      'Camera': '64MP Triple Camera System',
      'Battery Health': 'Tested 85%+ capacity',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },
  {
    id: 's20-ultra-used',
    name: 'Galaxy S20 Ultra 128GB',
    category: 'samsung',
    price: 250000,
    brand: 'Samsung',
    image: '📱',
    description: 'Pioneered the legendary 108MP sensor and 100x Space Zoom. Expansive gorgeous 6.9-inch display in great pre-owned shape.',
    rating: 4.5,
    reviewsCount: 81,
    colors: ['Cosmic Gray', 'Cosmic Black'],
    storageOptions: ['128GB'],
    condition: 'Used',
    isHot: false,
    specs: {
      'Processor': 'Snapdragon 865 / Exynos 990',
      'Display': '6.9-inch Dynamic AMOLED 2X, 120Hz',
      'Camera': '108MP Main + 48MP Telephoto (100x Zoom)',
      'Battery Health': 'Tested 84%+ capacity',
      'Condition': 'Pre-owned (Foreign Used, Grade A)'
    }
  },

  // --- LAPTOPS ---
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14" M3',
    category: 'laptops',
    price: 2500000,
    brand: 'Apple',
    image: '💻',
    description: 'A mind-blowing powerhouse. The M3 chip brings blazing speed and capability, helping you fly through everyday tasks, tackle professional projects, and play next-level games. Up to 22 hours of battery life.',
    rating: 4.9,
    reviewsCount: 88,
    colors: ['Space Gray', 'Silver'],
    storageOptions: ['512GB SSD', '1TB SSD'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple M3 Chip (8-core CPU, 10-core GPU)',
      'Memory': '16GB Unified RAM',
      'Storage': '512GB PCIe SSD',
      'Display': '14.2-inch Liquid Retina XDR, 120Hz ProMotion',
      'Battery': 'Up to 22 hours runtime',
      'Weight': '1.55kg'
    }
  },
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air M2',
    category: 'laptops',
    price: 1800000,
    brand: 'Apple',
    image: '💻',
    description: 'Strikingly thin design, stunning liquid retina display, and unbelievable performance packed in a silent, fanless aluminum enclosure. The perfect blend of elegance and performance.',
    rating: 4.8,
    reviewsCount: 104,
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    storageOptions: ['256GB SSD', '512GB SSD'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Apple M2 Chip (8-core CPU, 8-core GPU)',
      'Memory': '8GB Unified RAM',
      'Storage': '256GB SSD',
      'Display': '13.6-inch Liquid Retina display, 500 nits',
      'Battery': 'Up to 18 hours runtime',
      'Weight': '1.24kg'
    }
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13 Plus',
    category: 'laptops',
    price: 1600000,
    brand: 'Dell',
    image: '💻',
    description: 'Dell\'s most powerful 13-inch laptop is up to twice as powerful as before in the same size. It features 13th Gen Intel Core processors and a pioneering capacitive touch function row and seamless glass haptic touchpad.',
    rating: 4.6,
    reviewsCount: 45,
    colors: ['Platinum Silver', 'Graphite'],
    storageOptions: ['512GB NVMe SSD', '1TB NVMe SSD'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Intel Core i7-1360P (12-Core)',
      'Graphics': 'Intel Iris Xe Graphics',
      'Memory': '16GB LPDDR5 RAM',
      'Display': '13.4-inch InfinityEdge FHD+ Anti-Glare',
      'OS': 'Windows 11 Pro',
      'Weight': '1.26kg'
    }
  },

  // --- AUDIO & MUSIC ---
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    category: 'audio',
    price: 350000,
    brand: 'Apple',
    image: '🎧',
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Audio and Transparency mode, which helps you tune in to the environment or tune out the static.',
    rating: 4.9,
    reviewsCount: 231,
    colors: ['Glossy White'],
    condition: 'New',
    isHot: true,
    specs: {
      'Chipset': 'Apple H2 Headphone Chip',
      'Noise Cancellation': '2x Better Active Noise Cancellation',
      'Audio Quality': 'Low-distortion custom driver, high dynamic range amplifier',
      'Battery Life': 'Up to 6 hours audio (30 hours with MagSafe Charging Case)',
      'Water Resistance': 'IP54 Sweat and Dust Resistant'
    }
  },
  {
    id: 'buds-2-pro',
    name: 'Samsung Galaxy Buds 2 Pro',
    category: 'audio',
    price: 250000,
    brand: 'Samsung',
    image: '🎧',
    description: 'Immerse into the ultimate 24-bit Hi-Fi audio experience. Designed with ergonomically enhanced comfort for secure fit, next-level Active Noise Cancellation (ANC), and intelligent 360 audio.',
    rating: 4.7,
    reviewsCount: 78,
    colors: ['Graphite', 'White', 'Bora Purple'],
    condition: 'New',
    isHot: false,
    specs: {
      'Audio Quality': '24-bit Hi-Fi Sound, 2-way coaxial speaker',
      'Noise Cancelling': 'Intelligent Active Noise Cancellation (3 high-SNR microphones)',
      'Battery': 'Up to 5 hours playback (18h total with case)',
      'Connectivity': 'Bluetooth 5.3, Auto Switch',
      'Water Resistance': 'IPX7 high-level water resistance'
    }
  },
  {
    id: 'sony-wh-xm5',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'audio',
    price: 450000,
    brand: 'Sony',
    image: '🎧',
    description: 'Rewriting the rules of distraction-free listening. Multiple microphone noise cancellation shuts out more high and mid-frequency sounds than ever, delivering pristine high-resolution wireless sound quality.',
    rating: 4.9,
    reviewsCount: 154,
    colors: ['Black', 'Silver', 'Midnight Blue'],
    condition: 'New',
    isHot: true,
    specs: {
      'Noise Cancelling': 'Auto NC Optimizer with 8 microphones & two processors',
      'Driver Unit': '30mm specially-designed high quality dome driver',
      'Battery': 'Up to 30 hours of continuous wireless playback',
      'Charge Time': '3 min charge gives up to 3 hours playback via USB-PD',
      'Bluetooth': 'LDAC, AAC, SBC high-res codec support'
    }
  },

  // --- WEARABLES ---
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'wearables',
    price: 1100000,
    brand: 'Apple',
    image: '⌚',
    description: 'The ultimate sports and adventure watch is now even more capable. Features the incredibly powerful S9 SiP chip, a mind-blowing bright display, and convenient new double-tap interaction gesture.',
    rating: 4.9,
    reviewsCount: 42,
    colors: ['Titanium Case with Blue Ocean Band', 'Titanium Case with Orange Alpine Loop'],
    condition: 'New',
    isHot: true,
    specs: {
      'Processor': 'Apple S9 SiP dual-core',
      'Display': 'Always-On Retina OLED, 3000 nits peak brightness',
      'Battery Life': 'Up to 36 hours normal use (72 hours in Low Power Mode)',
      'Diving Support': 'Water resistant up to 100m, certified EN13319 with depth gauge',
      'Case Size': '49mm aerospace-grade titanium'
    }
  },
  {
    id: 'galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6',
    category: 'wearables',
    price: 450000,
    brand: 'Samsung',
    image: '⌚',
    description: 'Start your dynamic day with comprehensive fitness metrics, advanced sleep tracking, personalized heart-rate zone updates, and direct notifications paired smoothly in solid premium hardware.',
    rating: 4.6,
    reviewsCount: 59,
    colors: ['Graphite Black', 'Silver Luxe'],
    condition: 'New',
    isHot: false,
    specs: {
      'Processor': 'Exynos W930 Dual-Core 1.4GHz',
      'Display': 'Super AMOLED Always-On display, Sapphire Crystal',
      'Battery': 'Up to 40 hours runtime',
      'Sensors': 'BioActive sensor (ECG, Heart Rate, BIA), Temperature, Barometer',
      'OS': 'Wear OS Powered by Samsung'
    }
  },

  // --- ACCESSORIES ---
  {
    id: 'iphone-case',
    name: 'iPhone 15 Pro Luxury Armor Case',
    category: 'accessories',
    price: 35000,
    brand: 'Apple',
    image: '📱',
    description: 'Protect your titanium investment in space aesthetics. Heavy-duty magnetic military grade drop-tested protective cover featuring premium tactile feedback buttons and integrated durable ring kickstand.',
    rating: 4.5,
    reviewsCount: 167,
    colors: ['Midnight Black', 'Space Violet', 'Cyber Blue'],
    condition: 'New',
    isHot: false,
    specs: {
      'Material': 'Shockproof Flexible TPU + Scratch-proof Polycarbonate',
      'Compatibility': 'Magsafe Wireless Charging fully supported',
      'Protection': 'Military grade 10ft drop tested',
      'Special': 'Embedded magnetic alignment ring, 360 rotation metal ring stand'
    }
  },
  {
    id: 's24-case',
    name: 'Samsung S24 Ultra Aero Silicon Case',
    category: 'accessories',
    price: 30000,
    brand: 'Samsung',
    image: '📱',
    description: 'Constructed from aerospace soft-touch carbon liquid silicone, providing extreme grip and screen scratch protection while keeping a ultra featherlight weight and futuristic minimal profile.',
    rating: 4.4,
    reviewsCount: 89,
    colors: ['Graphite Matte', 'Laser Yellow', 'Cosmic Blue'],
    condition: 'New',
    isHot: false,
    specs: {
      'Material': 'Aerospace Carbon Fiber + Liquid Silicon Matrix',
      'Thickness': 'Just 1.2mm defensive ultra-slim shield',
      'Interior': 'Satin microfiber lining prevents dust micro-abrasion',
      'Features': 'Enhanced anti-slip texture, reinforced precise speaker cutouts'
    }
  },
  {
    id: 'gan-charger',
    name: '65W GaN Multi-Port Charger',
    category: 'accessories',
    price: 45000,
    brand: 'Generic',
    image: '🔌',
    description: 'Ditch your bulky legacy wall adapters. Powered by cutting-edge Gallium Nitride (GaN) technology, this triple-port charger fuels your laptop, tablet, and smartphone concurrently at terminal speeds.',
    rating: 4.8,
    reviewsCount: 220,
    colors: ['Astral White', 'Neutron Black'],
    condition: 'New',
    isHot: true,
    specs: {
      'Ports': '2x USB-C (Power Delivery 3.0) + 1x USB-A (QC 4.0)',
      'Max Power': '65W Total Dynamic Allocation',
      'Protection': 'Smart over-current, over-voltage, high-temperature protections',
      'Technology': 'GaN III Semiconductor for 40% reduced size and cool operation'
    }
  },

  // --- GAMING GEAR ---
  {
    id: 'ps5-console',
    name: 'PS5 Gaming Console (Slim Pro Edition)',
    category: 'gaming',
    price: 850000,
    brand: 'Sony',
    image: '🎮',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    rating: 4.9,
    reviewsCount: 310,
    colors: ['Standard White-Black Matte'],
    condition: 'New',
    isHot: true,
    specs: {
      'Storage': '825GB Custom high-speed SSD',
      'Optical Drive': 'Ultra HD Blu-ray Disc Drive',
      'Graphics': 'AMD Radeon RDNA 2-based graphics engine with Ray Tracing support',
      'Output': 'Support of 4K 120Hz TVs, 8K TVs, VRR (HDMI 2.1)',
      'Audio': 'Tempest 3D AudioTech'
    }
  }
];

export const FAQS = [
  {
    category: 'Product Authenticity',
    q: 'How do I know my product is 100% authentic?',
    a: 'Every single phone, laptop, and accessory sold in Mr X Space is sourced directly from original brand manufacturers or authorized international distributors (such as Apple Inc. and Samsung Electronics). We enforce rigorous hardware verification checks, and every item comes with serial numbers traceable online and premium warranty guarantees.'
  },
  {
    category: 'Orders & Delivery',
    q: 'How long does delivery take in Rivers State and nationwide?',
    a: 'In Port Harcourt, we provide fast same-day or 24-hour priority dispatch directly to your doorstep. For orders outside of Rivers State, delivery typically takes 48 to 72 hours via our partnered secure premium nationwide transit couriers.'
  },
  {
    category: 'Payment Method',
    q: 'What payment options do you support?',
    a: 'We accept Card Payments, instant Bank Transfers, and USSD payments. For high-value transactions, we prefer secure verified instant transfers. Our team will verify credentials and activate instant delivery. All data in checkout is simulated for premium security.'
  },
  {
    category: 'Returns & Warranty',
    q: 'What is your return and warranty policy?',
    a: 'Our products are covered by a comprehensive warranty. If any manufacturing defect is discovered within 7 days of purchase, we offer immediate replacement or a hassle-free refund process, provided the item is returned in its original packaging and undamaged state.'
  }
];
