export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  featured?: boolean;
  specifications?: string;
  capacity?: string;
  size?: string;
  colors?: string[];
  model?: string;
}

export const products: Product[] = [
  // 6 in 1 Combo Gift Sets
  {
    id: "H934",
    name: "6 in 1 Premium Gift Set",
    category: "Premium Combo",
    description: "A5 Size Diary, Flask, Metal Pen, Metal Keychain, Pendrive, Business Card Holder",
    image: "/6_in_1_combo.jpeg",
    specifications: "Pendrive is an Optional, More Space For Logo Branding",
    capacity: "500ml",
    size: "L-24.7cm X W-23.6cm X H-8cm",
    featured: true
  },
  {
    id: "H935",
    name: "6 in 1 Premium Gift Set",
    category: "Premium Combo",
    description: "A5 Size Diary, Flask, Metal Pen, Metal Keychain, Pendrive, Business Card Holder",
    image: "/6_in_1_combo_1.jpg",
    specifications: "Pendrive is an Optional, Metal Plate is an Optional",
    capacity: "16GB/32GB",
    size: "L-27cm X W-23.3cm X H-8cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H930",
    name: "6 in 1 Premium Gift Set",
    category: "Premium Combo",
    description: "Planner Diary, Vacuum Flask, Metal Roller Pen, Metal Keychain, Pendrive, Business Card Holder",
    image: "/6_in_1_combo_1.jpg",
    specifications: "Pen Holder Top, Keep Debit Card ATM Card, Identity Card etc, Pendrive is an Optional",
  },

  // 5 in 1 Combo Gift Sets
  {
    id: "H951",
    name: "5 in 1 Premium Gift Set",
    category: "Executive Combo",
    description: "A5 Size Diary, Flask, Metal Pen, 3 Fold Umbrella, Pendrive",
    image: "/5_in_1_combo.jpg",
    specifications: "Pendrive is an Optional",
    capacity: "16GB/32GB",
    size: "L-26.5cm X W-23.3cm X H-8cm",
    featured: true
  },
  {
    id: "H985",
    name: "5 in 1 Gift Set",
    category: "Executive Combo",
    description: "A5 Size Diary, Vacuum Flask, Metal Roller Pen, 3 Fold Umbrella, Pendrive",
    image: "/5_in_1_combo1.jpg",
    specifications: "Pendrive is an Optional",
    capacity: "16GB/32GB",
    size: "L-26.5cm X W-23.3cm X H-8cm",
  },
  {
    id: "H986",
    name: "5 in 1 Gift Set",
    category: "Executive Combo",
    description: "A5 Size Diary, Vacuum Flask, Metal Roller Pen, 3 Fold Umbrella, Pendrive",
    image: "/5_in_1_combo2.jpg",
    specifications: "Pendrive is an Optional",
    capacity: "16GB/32GB",
    size: "L-26.5cm X W-23.3cm X H-8cm",
  },

  // 4 in 1 Combo Gift Sets
  {
    id: "H927",
    name: "4 in 1 Gift Set",
    category: "Deluxe Combo",
    description: "Small Diary, Metal Hook Keychain, Metal Pen, Dual Side Business Card Holder",
    image: "/4_in_1_combo.webp",
    specifications: "Carboard Box",
    size: "L-22.2cm X W-24.5cm X H-3.5cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H928",
    name: "4 in 1 Gift Set",
    category: "Deluxe Combo",
    description: "A5 Size Diary, Metal Keychain, Metal Pen, Dual Side Business Card Holder",
    image: "/4_in_1_combo_3.webp",
    specifications: "Cardboard Box, Dual Side Business Card Holder",
    size: "L-29cm X W-22.5cm X H-3.5cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H979",
    name: "4 in 1 Premium Gift Set",
    category: "Deluxe Combo",
    description: "Diary + Passport + Pen + Keychain",
    image: "/4_in_1_combo2.jpg",
    specifications: "Document Holder (Adhar Card, Visiting Card, Credit Card), Metal Plate is an Optional",
    size: "L-25.9 cm X W-22.9 cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H972",
    name: "4 in 1 Premium Gift Set",
    category: "Deluxe Combo",
    description: "Diary + Metal Pen + Keychain + Business Card Holder",
    image: "/4_in_1_combo_3.webp",
    size: "L-22.3cm X W-21.5 cm"
  },
  {
    id: "H982",
    name: "4 in 1 Premium Gift Set",
    category: "Deluxe Combo",
    description: "Diary + Visiting Card Holder + Pen + Metal Keychain",
    image: "/4_in_1_combo2.jpg",
    size: "L-22.4 cm X W-28 cm",
    colors: ["Black Color", "Brown Color"]
  },

  // 3 in 1 Combo Gift Sets
  {
    id: "H941",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Steel Water Bottle",
    image: "/luxury-fountain-pen-gift-set-with-ink-bottles-prem.jpg",
    specifications: "More Space For Your Logo Branding",
    capacity: "800ml Approx",
    size: "L-25.8cm X W-24.8cm X H-8cm"
  },
  {
    id: "H950",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Hot & Cold Mug",
    image: "/luxury-belgian-chocolate-gift-box-wooden-case-prem.jpg",
    size: "L-25.8cm X W-24.8cm X H-8cm"
  },
  {
    id: "H942",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Hot & Cold Flask",
    image: "/luxury-leather-executive-gift-set-with-pen-wallet-.jpg",
    capacity: "500ml",
    size: "L-25.8cm X W-25.5cm X H-8cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H906",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Flask With Cup",
    image: "/luxury-cashmere-travel-set-scarf-blanket-gift.jpg",
    capacity: "100ml",
    size: "L-26cm X W-24cm X H-8cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H908",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Flask, Metal Pen",
    image: "/luxury-spa-wellness-gift-box-with-candles-and-skin.jpg",
    capacity: "550ml",
    colors: ["Additional Colors"]
  },
  {
    id: "H956",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Hot & Cold Mug",
    image: "/luxury-tech-accessories-gift-set-wireless-charger-.jpg",
    size: "L-32.2cm X W-25.2cm"
  },
  {
    id: "H924",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Flask With Cup",
    image: "/premium-coffee-gift-set-with-ceramic-cups-and-bean.jpg",
    specifications: "More Space For Logo Branding",
    size: "L-26.7cm X W-23.7cm X H-8.2cm"
  },
  {
    id: "H926",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Metal Keychain",
    image: "/premium-whiskey-gift-set-with-crystal-glasses-luxu.jpg",
    specifications: "More Space For Your Logo",
    size: "L-22.4 cm X W-22.4 cm"
  },
  {
    id: "H960",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Diary, Metal Pen, Metal Keychain",
    image: "/elegant_luxury_gift_box_with_ribbon_premium_corpor.jpg",
    size: "L-22 cm X W-22 cm",
    colors: ["4 Colors", "Additional Colors"]
  },
  {
    id: "H969",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Notebook Diary + SS Bottle + Metal Pen",
    image: "/elegant-employee-appreciation-gift-box-with-gourme.jpg",
    specifications: "More Space For Logo Branding, SS Bottle is an Optional",
    size: "L-25.9 cm X W-22.9 cm"
  },
  {
    id: "H973",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "Diary + Metal Pen + Keychain Hook",
    image: "/elegant-gift-wrapping-process-hands-tying-ribbon-o.jpg",
    size: "L-22.3 cm X W-21.5 cm",
    colors: ["Additional Colors"]
  },
  {
    id: "H977",
    name: "3 in 1 Gift Set",
    category: "Classic Combo",
    description: "A5 Size Notebook Diary + SS Bottle + Metal Pen + Passport Holder",
    image: "/festive-corporate-holiday-gift-with-elegant-season.jpg",
    specifications: "SS Bottle is an Optional, Metal Plate Colors",
    size: "L-25.9 cm X W-22.9 cm"
  },
  {
    id: "H980",
    name: "3 in 1 Premium Gift Set",
    category: "Classic Combo",
    description: "Diary + Refill + Pen + Pendrive",
    image: "/beautifully-wrapped-corporate-gift-with-custom-bra.jpg",
    specifications: "More Space For Logo Branding",
    size: "L-22 cm X W-24.5 cm"
  },

  // Lunch Boxes
  {
    id: "H931",
    name: "Lunch Box & SS Water Bottle Combo",
    category: "Lunch Boxes",
    description: "Premium lunch box with stainless steel water bottle",
    image: "/lunch_box.jpeg",
    size: "H-26.2cm X L-20.8cm X W-7.7cm",
    featured: true
  },
  {
    id: "H932",
    name: "Premium Lunch Box",
    category: "Lunch Boxes",
    description: "High-quality lunch box for daily use",
    image: "/lunchbox.jpeg",
    size: "H-18cm X L-15cm X W-6cm"
  },
  {
    id: "H933",
    name: "Deluxe Lunch Box Set",
    category: "Lunch Boxes",
    description: "Deluxe lunch box with compartments",
    image: "/lunchbox1.jpeg",
    size: "H-20cm X L-18cm X W-7cm"
  },

  // Photo Frames
  {
    id: "H940",
    name: "Classic Photo Frame",
    category: "Photo Frames",
    description: "Elegant photo frame for desk display",
    image: "/photoframe.jpeg",
    size: "H-15cm X W-20cm",
    featured: true
  },
  {
    id: "H941",
    name: "Premium Photo Frame",
    category: "Photo Frames",
    description: "High-quality photo frame with stand",
    image: "/photoframe1.jpeg",
    size: "H-18cm X W-25cm"
  },
  {
    id: "H942",
    name: "Decorative Photo Frame",
    category: "Photo Frames",
    description: "Decorative photo frame for home and office",
    image: "/photoframe2.jpeg",
    size: "H-20cm X W-25cm"
  },

  {
    id: "H922",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office6.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H923",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office7.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H925",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office8.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H929",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office9.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H937",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office10.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H938",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office11.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H939",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office12.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H943",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office13.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H944",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office14.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H945",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office15.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H946",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office16.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H947",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office17.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H948",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office18.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H949",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office19.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H952",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office20.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H953",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office21.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H954",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office22.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H955",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office23.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H957",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office24.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H958",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office25.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H959",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office26.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H961",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office27.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H962",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office28.jpeg",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H963",
    name: "2 in 1 Gift Set",
    category: "Standard Combo",
    description: "A5 Size Diary + Metal Pen",
    image: "/office29.jpeg",
    size: "L-22.5cm X W-15cm"
  },

  // Office Planner Diaries
  {
    id: "H1079",
    name: "Office Planner Diary With Documents Holder",
    category: "Office Planner Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheque and Many More",
    image: "/diaries.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.2cm X W-17.5cm"
  },
  {
    id: "H1049",
    name: "Office Planner Diary with Mobile Holder & Documents Holder",
    category: "Office Planner Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheques and Many More",
    image: "/diaries1.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.3cm X W-17cm"
  },
  {
    id: "H1075",
    name: "Office Planner Diary With Documents Holder",
    category: "Office Planner Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheques and Many More",
    image: "/diaries2.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.5 cm X W-17cm"
  },

  // Office Notebook Diaries
  {
    id: "H1052",
    name: "A5 Size Office Notebook Diary",
    category: "Office Notebook Diaries",
    description: "Office Notebook Diary",
    image: "/diaries.jpeg",
    specifications: "Diary Type: Office Notebook Diary, Cover Material: PU Leather, Inside Pages: 232 nos., Diary Pages Thickness: 80GSM",
    size: "H-21.2cm X W-14.7cm"
  },
  {
    id: "H1006",
    name: "A5 Size Wooden Cover Office Notebook Diary",
    category: "Office Notebook Diaries",
    description: "Wooden Cover Notebook Diary",
    image: "/diaries1.jpeg",
    specifications: "Diary Type: Notebook Diary, Cover Material: Wooden Cover, Inside Pages: 232 nos., Diary Pages Thickness: 80GSM",
    size: "H-22.5cm X W-15cm"
  },

  // Office Products
  {
    id: "H2001",
    name: "Premium Office Set",
    category: "Office Products",
    description: "Complete office accessory set for professionals",
    image: "/office.webp",
    featured: true
  },
  {
    id: "H2002",
    name: "Executive Office Kit",
    category: "Office Products",
    description: "Executive office essentials collection",
    image: "/office1.jpeg"
  },
  {
    id: "H2003",
    name: "Professional Office Bundle",
    category: "Office Products",
    description: "Professional office supplies bundle",
    image: "/office2.jpeg"
  },
  {
    id: "H2004",
    name: "Modern Office Accessories",
    category: "Office Products",
    description: "Modern office accessories set",
    image: "/office3.jpeg"
  },
  {
    id: "H2005",
    name: "Corporate Office Set",
    category: "Office Products",
    description: "Corporate office essentials",
    image: "/office4.jpeg"
  },

  // Combo Gift Sets - Special
  {
    id: "H971",
    name: "Kettle And Mugs Set",
    category: "Combo Sets",
    description: "Vacuum kettle And 2 Vacuum Mug",
    image: "/premium-welcome-gift-basket-with-artisan-products-.jpg",
    specifications: "Outer Carry Bag, Wooden Cap",
    capacity: "Kettle: 1000ml Approx, Mugs: 250ml each",
    size: "H-31.2cm X W-24.2cm X L-12.2cm"
  }
];

export const categories = [
  "All",
  "Premium Combo",
  "Executive Combo", 
  "Deluxe Combo",
  "Classic Combo",
  "Standard Combo",
  "Office Planner Diaries",
  "Office Notebook Diaries",
  "Lunch Boxes",
  "Photo Frames",
  "Office Products",
  "Combo Sets"
];
