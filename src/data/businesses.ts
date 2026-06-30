export type VerificationStatus = "verified" | "postcard-only" | "needs-verification";

export type SourceLink = {
  label: string;
  href?: string;
};

export type ContactPhone = {
  label: string;
  number: string;
};

export type Business = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  phone?: string;
  secondaryPhones?: ContactPhone[];
  email?: string;
  website?: string;
  address?: string;
  serviceArea?: string;
  offer?: string;
  sourceUrls: SourceLink[];
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
  keywords: string[];
};

const postcardSource: SourceLink = {
  label: "Postcard image",
  href: "/assets/murray-highlighter-postcard.jpg",
};

export const businesses: Business[] = [
  {
    slug: "the-murray-highlighter",
    name: "The Murray Highlighter",
    category: "Postcard Advertising",
    summary:
      "A local postcard mailer featuring Murray-area businesses in one easy-to-save neighborhood guide.",
    phone: "270-917-2321",
    serviceArea: "Murray, Kentucky and nearby communities",
    offer: "Call to ask about available ad spots in the next postcard.",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["advertise", "postcard", "marketing", "mailer", "murray highlighter"],
  },
  {
    slug: "bluegrass-pond-water-features",
    name: "Bluegrass Pond & Water Features",
    category: "Ponds & Water Features",
    summary:
      "Pond construction, repair, leak detection, spillway and ramp installation, excavation, and driveway work.",
    phone: "270-227-5022",
    serviceArea: "Murray and Western Kentucky",
    offer: "$500 off any new pond installation over $5,000.",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["pond", "water features", "excavation", "driveway", "leak detection"],
  },
  {
    slug: "ab-consulting-ashley-bogard-cpa",
    name: "AB Consulting",
    category: "Accounting & Tax",
    summary:
      "Professional accounting services including tax returns, payroll taxes, bookkeeping, business entity formation, and sales tax support.",
    phone: "270-293-2810",
    email: "ashley@abogard.com",
    address: "622 N 4th Street, Suite A, Murray, KY 42071",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [
      postcardSource,
      {
        label: "IRS e-file provider listing",
        href: "https://www.irs.gov/ht/efile-index-taxpayer-search?page=346&state=All&zip=",
      },
      {
        label: "PTIN Directory",
        href: "https://www.ptindirectory.com/tax-firms/kentucky/murray-ky/214398/ab-consulting-enterprises-pllc/ashley-bogard",
      },
      {
        label: "CountingWorks",
        href: "https://www.countingworks.com/professionals/kentucky/murray/ashley-bogard",
      },
    ],
    verificationStatus: "verified",
    keywords: ["tax", "accounting", "bookkeeping", "payroll", "cpa", "ashley bogard"],
  },
  {
    slug: "jw-pressure-washing",
    name: "J&W Pressure Washing",
    category: "Pressure Washing",
    summary:
      "Exterior cleaning for houses, vinyl siding, roofs, concrete, and other surfaces.",
    phone: "270-917-2321",
    serviceArea: "Murray, Kentucky",
    offer: "10% off any service when the postcard ad is shown.",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["pressure washing", "house wash", "vinyl siding", "roof wash", "concrete cleaning"],
  },
  {
    slug: "tdc-roofing-and-construction",
    name: "TDC Roofing and Construction",
    category: "Roofing & Construction",
    summary:
      "Roofing, siding, inspections, estimates, and construction services for area homeowners.",
    phone: "270-356-0834",
    serviceArea: "Western Kentucky",
    offer: "Free estimates and inspections.",
    sourceUrls: [
      postcardSource,
      {
        label: "TDC service page",
        href: "https://tdcroofingandconstruction.jobbersites.com/services/roof-inspection-and-replacement",
      },
      {
        label: "Paducah Chamber listing",
        href: "https://widgets.paducahchamber.org/feeds/directory/directory/action/Listing/value/16783/cid/54/id/1/Balance-Construction-Management",
      },
    ],
    verificationStatus: "verified",
    keywords: ["roofing", "siding", "construction", "inspection", "estimate"],
  },
  {
    slug: "the-wagon-flea-market",
    name: "The Wagon Flea Market",
    category: "Flea Market",
    summary:
      "A Murray flea market with vendors, local finds, and a postcard offer for in-person shoppers.",
    phone: "270-992-1117",
    website: "https://thewagonfleamarket.com/",
    address: "2321 Hwy 94 East, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "$5 off your purchase when you bring in the postcard ad.",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://thewagonfleamarket.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["flea market", "vendors", "shopping", "antiques", "wagon"],
  },
  {
    slug: "hernandez-painting",
    name: "Hernandez Painting",
    category: "Painting",
    summary:
      "Residential and commercial painting services for interior, exterior, and industrial projects.",
    phone: "270-349-2455",
    serviceArea: "Western Kentucky",
    offer: "10% off when the postcard ad is shown.",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://hernandezpaintingpros.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["painting", "interior", "exterior", "commercial", "residential"],
  },
  {
    slug: "islas-tree-service",
    name: "Islas Tree Service",
    category: "Tree Service",
    summary:
      "24/7 tree service including trimming, pruning, removal, stump grinding, emergency tree work, and storm cleanup.",
    phone: "270-226-5920",
    email: "islastree019@gmail.com",
    website: "https://islastreeservice.com/",
    serviceArea: "Murray, Kentucky and surrounding areas",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://islastreeservice.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["tree", "stump", "storm", "trimming", "pruning", "removal"],
  },
  {
    slug: "veraski-solutions",
    name: "Veraski Solutions LLC",
    category: "Contractor & Home Services",
    summary:
      "General contractor and home services including remodeling, decks and patios, flooring, cabinets, and lean-to structures.",
    phone: "270-705-2339",
    email: "veraskisolutions@outlook.com",
    serviceArea: "Murray, Kentucky",
    offer: "10% off your first flooring installation.",
    sourceUrls: [
      postcardSource,
      {
        label: "Angi category listing",
        href: "https://www.angi.com/companylist/us/ky/murray/decks-and-porches.htm",
      },
    ],
    verificationStatus: "verified",
    keywords: ["contractor", "remodeling", "decks", "patios", "flooring", "cabinets"],
  },
  {
    slug: "the-blend-by-avery",
    name: "The Blend By Avery",
    category: "Cafe",
    summary:
      "Coffee, cafe food, acai bowls, salads, curbside pickup, catering, and after-hours event rentals.",
    phone: "270-768-7032",
    website: "https://www.theblendbyavery.com/",
    address: "506 N 12th Street, Suite N, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "$2 off any acai bowl or salad with proof of the postcard ad.",
    sourceUrls: [
      postcardSource,
      {
        label: "Tour Murray restaurant listing",
        href: "https://www.tourmurray.com/restaurants",
      },
    ],
    verificationStatus: "verified",
    keywords: ["coffee", "cafe", "acai", "salad", "catering", "blend"],
  },
  {
    slug: "leann-darnell-kopperud-realty",
    name: "LeAnn Darnell, Kopperud Realty",
    category: "Real Estate",
    summary:
      "Murray-area realtor with Kopperud Realty, helping buyers and sellers make their next move.",
    phone: "270-978-1897",
    website: "https://www.kopperudrealty.com/",
    address: "711 Main Street, Murray, KY",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [
      postcardSource,
      {
        label: "Murray Chamber listing",
        href: "https://business.mymurray.com/list/Details/kopperud-realty-3873842",
      },
    ],
    verificationStatus: "verified",
    keywords: ["realtor", "real estate", "kopperud", "home", "property", "leann darnell"],
  },
  {
    slug: "camp-canine-elite-dogs",
    name: "Camp Canine Elite Dogs LLC",
    category: "Dog Training & Boarding",
    summary:
      "Family-owned dog training, boarding, grooming, daycare, pet massage, search and rescue training, and vacation boarding.",
    phone: "304-952-0147",
    address: "684 Crossland Road, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "10% off any service when the postcard ad is shown.",
    sourceUrls: [
      postcardSource,
      {
        label: "BBB listing",
        href: "https://www.bbb.org/us/ky/murray/profile/dog-training/camp-canine-elite-dogs-training-boarding-grooming-0402-235915580",
      },
      {
        label: "MapQuest listing",
        href: "https://www.mapquest.com/us/kentucky/camp-canine-elite-dogs-training-boarding-grooming-668239160",
      },
    ],
    verificationStatus: "verified",
    keywords: ["dog", "training", "boarding", "grooming", "daycare", "pet"],
  },
  {
    slug: "reliable-docks-and-lifts",
    name: "Reliable Docks & Lifts",
    category: "Docks & Lifts",
    summary:
      "Dock repair, dock building, and lift services for lake and waterfront property owners.",
    phone: "270-559-8968",
    serviceArea: "Western Kentucky lake areas",
    offer: "Show the postcard ad for a free quote.",
    sourceUrls: [
      postcardSource,
      {
        label: "Porch listing",
        href: "https://pro.porch.com/benton-ky/dock-building-and-repair-contractors/reliable-dock-and-repairs/pp",
      },
      {
        label: "Manta listing",
        href: "https://www.manta.com/c/mkglxnm/reliable-docks-and-repair",
      },
    ],
    verificationStatus: "verified",
    keywords: ["dock", "docks", "lifts", "repair", "lake", "quote"],
  },
  {
    slug: "fence-pros-of-murray",
    name: "Fence Pros of Murray",
    category: "Fencing",
    summary:
      "Fence installation for wood, vinyl, chain link, aluminum, metal, farm and ranch, and decorative styles.",
    phone: "270-293-6579",
    secondaryPhones: [{ label: "Zachary Rickman", number: "270-731-4626" }],
    serviceArea: "Murray, Kentucky and surrounding areas",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["fence", "fencing", "wood", "vinyl", "chain link", "farm", "ranch"],
  },
  {
    slug: "mccartney-mulching-and-landscaping",
    name: "McCartney Mulching & Landscaping",
    category: "Landscaping",
    summary:
      "Mulching, landscaping, hardscaping, drainage, lawn care, and maintenance services.",
    phone: "254-654-5673",
    website: "https://www.mccartneymulching.com/",
    serviceArea: "Murray, Kentucky",
    offer: "10% off with proof of the postcard, or first mow free for qualifying new customers.",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://www.mccartneymulching.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["landscaping", "mulching", "hardscaping", "drainage", "lawn", "mccartney"],
  },
  {
    slug: "nors-electric",
    name: "Nors Electric LLC",
    category: "Electrical & HVAC",
    summary:
      "Electrical, HVAC, and automatic gate system services for homes and businesses.",
    phone: "270-293-0069",
    address: "121 Wildwood Drive, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "10% off with this coupon.",
    sourceUrls: [
      postcardSource,
      {
        label: "Buzzfile listing",
        href: "https://www.buzzfile.com/business/Nors-Electric-LLC-270-293-0069",
      },
      {
        label: "Manta listing",
        href: "https://www.manta.com/c/mkx8tp4/nors-electric-llc",
      },
    ],
    verificationStatus: "verified",
    keywords: ["electric", "electrical", "hvac", "gate", "automatic gate", "nors"],
  },
  {
    slug: "celebrations-events-and-tents",
    name: "Celebrations Events & Tents",
    category: "Event Rentals",
    summary:
      "Event rentals including tents, inflatables, snow-cone machines, cotton candy machines, games, tables, chairs, and florals.",
    phone: "270-761-2933",
    email: "hello@celebrationseventsandtents.com",
    website: "https://www.celebrationseventsandtents.com/",
    address: "1900 D North 12th Street, Murray, KY",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://www.celebrationseventsandtents.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["tents", "events", "rentals", "inflatables", "tables", "chairs", "florals"],
  },
  {
    slug: "niks-piks",
    name: "Niks Piks",
    category: "Consignment Store",
    summary:
      "A Murray consignment shop with clothing, shoes, accessories, household decor, and seasonal items.",
    phone: "270-205-9469",
    address: "117 S 4th Street, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "20% off an entire purchase, including sale items, when the postcard ad is shown.",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: [
      "consignment",
      "store",
      "secondhand",
      "shopping",
      "resale",
      "clothing",
      "shoes",
      "accessories",
      "household decor",
      "seasonal",
      "niks piks",
    ],
  },
  {
    slug: "houston-concrete",
    name: "Houston Concrete",
    category: "Concrete",
    summary:
      "Concrete work for patios, garages, driveways, sidewalks, floors, and more.",
    phone: "270-978-1261",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["concrete", "cement", "driveway", "patio", "garage", "sidewalk", "floor", "murray"],
  },
  {
    slug: "hair-and-things-by-alyssa-nicole",
    name: "Hair and Things by Alyssa Nicole",
    category: "Hair Salon / Cosmetology",
    summary:
      "Salon services including haircuts, coloring, styling, facials, manicures, pedicures, waxing, and massage.",
    phone: "270-227-0249",
    serviceArea: "Murray, Kentucky",
    offer: "$5 off a service for new clients when the postcard ad is shown.",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: [
      "hair salon",
      "cosmetology",
      "haircuts",
      "coloring",
      "styling",
      "facials",
      "manicure",
      "pedicure",
      "waxing",
      "massage",
    ],
  },
  {
    slug: "one-hour-heating-and-air",
    name: "One Hour Heating and Air",
    category: "HVAC",
    summary:
      "Heating and air conditioning service with repair, seasonal scheduling, and HVAC system replacement.",
    phone: "270-331-1110",
    website: "https://www.onehourheatingandair.com/westernkentucky/",
    serviceArea: "Murray, Kentucky",
    offer: "$750 off any new HVAC system.",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://www.onehourheatingandair.com/westernkentucky/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["hvac", "heating", "air", "air conditioning", "repair", "replacement", "one hour"],
  },
  {
    slug: "future-grounds",
    name: "Future Grounds",
    category: "Cafe",
    summary:
      "Specialty coffee shop with drive-through, dine-in, carry-out, catering, and online ordering.",
    phone: "270-761-4800",
    website: "https://www.futuregroundsmky.com/",
    address: "1201 Payne Street, Murray, KY",
    serviceArea: "Murray, Kentucky",
    offer: "10% off any specialty drink with proof of the postcard ad.",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://www.futuregroundsmky.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["cafe", "coffee", "specialty coffee", "drive through", "catering", "online ordering"],
  },
  {
    slug: "gladiator-graphics",
    name: "Gladiator Graphics",
    category: "Graphic Design / Printing",
    summary:
      "Graphic services including screen printing, Elston T-shirts, embroidery, banners, yard signs, promotional products, and more.",
    website: "https://thegladiatorgraphics.com/",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://thegladiatorgraphics.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: [
      "graphic design",
      "printing",
      "screen printing",
      "t-shirts",
      "embroidery",
      "banners",
      "yard signs",
      "promotional products",
    ],
  },
  {
    slug: "stubblefield-construction",
    name: "Stubblefield Construction",
    category: "Construction",
    summary:
      "Construction and remodeling services including add-ons, kitchens, baths, floors, and tile.",
    phone: "270-293-7365",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["construction", "remodels", "add ons", "kitchens", "bath", "floor", "tile"],
  },
  {
    slug: "s-a-tree-service",
    name: "S&A Tree Service",
    category: "Tree Service",
    summary:
      "Tree service including stump grinding, hazardous limb removal, total tree removal, and storm cleanup.",
    phone: "270-293-2739",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["tree service", "tree", "stump grinding", "hazardous limbs", "removal", "storm cleanup"],
  },
  {
    slug: "naptime-productions",
    name: "Naptime Productions",
    category: "Clothing",
    summary:
      "Customized apparel for individuals, schools, and businesses, including personalized clothing for events and spirit wear.",
    phone: "270-227-5250",
    website: "https://www.facebook.com/NaptimeProductionsLLC",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [
      postcardSource,
      {
        label: "Facebook page",
        href: "https://www.facebook.com/NaptimeProductionsLLC",
      },
    ],
    verificationStatus: "verified",
    keywords: ["clothing", "apparel", "custom apparel", "schools", "businesses", "spirit wear"],
  },
  {
    slug: "grigg-brothers-landscaping",
    name: "Grigg Brothers Landscaping",
    category: "Landscaping",
    summary: "Landscaping services including hardscaping, drainage, and landscape design.",
    phone: "270-625-4017",
    serviceArea: "West Kentucky",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["landscaping", "hardscaping", "drainage", "landscape design", "west kentucky"],
  },
  {
    slug: "welch-paving",
    name: "Welch Paving",
    category: "Paving",
    summary:
      "Paving services including asphalt paving, seal coating, patching, and crack filling.",
    phone: "270-227-9663",
    serviceArea: "Murray, Kentucky",
    sourceUrls: [postcardSource],
    verificationStatus: "verified",
    keywords: ["paving", "asphalt paving", "seal coating", "patching", "crack filling", "driveway"],
  },
  {
    slug: "stepstone-family-youth-services",
    name: "Stepstone Family & Youth Services",
    category: "Non-Profit",
    summary:
      "Therapeutic foster care agency connecting children and families.",
    phone: "270-527-8388",
    website: "https://www.stepstoneyouth.com/",
    sourceUrls: [
      postcardSource,
      {
        label: "Official site",
        href: "https://www.stepstoneyouth.com/",
      },
    ],
    verificationStatus: "verified",
    keywords: ["non-profit", "nonprofit", "family", "youth", "stepstone"],
  },
];

export const categories = Array.from(new Set(businesses.map((business) => business.category))).sort();
