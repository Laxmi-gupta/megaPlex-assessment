import mongoose from "mongoose";
import Content from "./models/Content.js";

import dotenv from "dotenv";
dotenv.config();

const defaultContent = [
  {
    section: "hero",
    data: {
      thinking: "THINKING",
      tagline: "OF A FANTASTIC VICINITY?",
      tag1: "20+ PODIUM LUXURIOUS AMENITIES",
      tag2: "SPACIOUS BALCONY HOMES*",
      brandSub: "VIGHNAHARTA",
      brandName: "INFINITY",
      smartBhkTitle: "SMART 1 BHK",
      smartBhkOldPrice: "74.99 Lacs",
      smartBhkPrice: "₹ 69.99 Lacs*",
      premiumBhkTitle: "PREMIUM 2 BHK",
      premiumBhkOldPrice: "1.05 CR",
      premiumBhkPrice: "₹ 96.99 Lacs*",
      address: "BLDG. NO. 223/224, CIRCLE – KANNAMWAR NAGAR 1, VIKHROLI (EAST)",
    },
  },
  {
    section: "about",
    data: {
      title: "About Project",
      para1:
        "At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.",
      para2:
        '"The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve.',
      btnText: "Download Brochure",
    },
  },
  {
    section: "floorplans",
    data: {
      "1 bhk": { type: "1Bhk", area: "380–411 RCA Sq.ft", price: "Click for price" },
      "2 bhk": { type: "2Bhk", area: "620–680 RCA Sq.ft", price: "Click for price" },
      "5.6 bhk": { type: "5.6Bhk", area: "1200–1350 RCA Sq.ft", price: "Click for price" },
    },
  },
  {
    section: "connectivity",
    data: {
      title: "Nearby Connectivity",
      subtitle: "Everything you need is just minutes away",
      items: [
        { place: "Vikhroli Station", distance: "5 min walk" },
        { place: "Eastern Express Highway", distance: "3 min drive" },
        { place: "Schools & Colleges", distance: "10 min drive" },
        { place: "Hospitals", distance: "8 min drive" },
        { place: "Shopping Malls", distance: "12 min drive" },
      ],
    },
  },
  {
    section: "amenities",
    data: {
      title: "World-Class Amenities",
      subtitle: "20+ podium amenities for a complete lifestyle",
      items: [
        { title: "Swimming Pool", description: "Olympic-size rooftop pool" },
        { title: "Gymnasium", description: "Fully equipped modern gym" },
        { title: "Kids Play Area", description: "Safe and vibrant play zones" },
        { title: "Clubhouse", description: "Multi-purpose social space" },
        { title: "Jogging Track", description: "1km landscaped track" },
        { title: "24/7 Security", description: "CCTV & manned security" },
      ],
    },
  },
  {
    section: "developer",
    data: {
      title: "About Developer",
      description:
        "Vighnaharta Developers is more than just a real estate company — we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living.",
      stats: [
        { value: "6", label: "Projects" },
        { value: "1.32 LAC", label: "sq. ft. area developed" },
        { value: "449+", label: "Happy families" },
        { value: "3.77LAC", label: "sq. ft. ongoing" },
        { value: "2.7LAC", label: "sq. ft. Area upcoming" },
      ],
    },
  },
  {
    section: "construction",
    data: {
      title: "Construction Updates",
      updates: [
        { label: "Under Construction", sublabel: "Tower A" },
        { label: "Completed", sublabel: "Tower B" },
        { label: "Completed", sublabel: "Tower C" },
      ],
    },
  },
  {
    section: "faq",
    data: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What makes Vighnaharta a trusted name in real estate in Vikhroli?",
          answer: "We deliver high-quality homes with transparency, timely delivery, and superior construction standards.",
        },
        {
          question: "What types of residential projects does Vighnaharta offer?",
          answer: "We offer 1 BHK and 2 BHK premium apartments with world-class amenities.",
        },
        {
          question: "Why should I invest in Vighnaharta's new projects?",
          answer: "Strategic location, affordable pricing, and proven track record make it a great investment.",
        },
        {
          question: "How does Vighnaharta ensure quality and sustainability?",
          answer: "We use certified materials, green building practices, and rigorous quality checks at every stage.",
        },
        {
          question: "How can I learn more about upcoming projects?",
          answer: "Visit our office or contact our sales team at the address listed on this page.",
        },
      ],
    },
  },
];

mongoose.connect(process.env.MONGO_URL).then(async () => {
  console.log("Connected. Seeding...");
  for (const item of defaultContent) {
    await Content.findOneAndUpdate(
      { section: item.section },
      { data: item.data },
      { upsert: true, new: true }
    );
    console.log(`Seeded: ${item.section}`);
  }
  console.log("Seed complete!");
  mongoose.disconnect();
});
