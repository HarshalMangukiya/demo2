import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const properties = [
  {
    id: "1",
    name: "LA 365 Daughter's Home",
    location: "Law Garden, Ahmedabad",
    type: "PG" as const,
    gender: "Girls" as const,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    amenities: ["WIFI", "FULLY FURNISHED", "AC", "TV", "LAUNDARY"],
    originalPrice: 15000,
    price: 13500,
  },
  {
    id: "2",
    name: "Narayan Nivas PG",
    location: "Navrangpura, Ahmedabad",
    type: "PG" as const,
    gender: "Boys" as const,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    amenities: ["WIFI", "FULLY FURNISHED", "HOT WATER", "HOUSE KEEPING"],
    originalPrice: 9000,
    price: 7000,
  },
  {
    id: "3",
    name: "Star Vista Hostel",
    location: "Makarba, Ahmedabad",
    type: "Hostel" as const,
    gender: "Co-ed" as const,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    amenities: ["WIFI", "FULLY FURNISHED", "AC", "TV", "LAUNDARY", "SECURITY"],
    price: 16500,
  },
  {
    id: "4",
    name: "Sp Girls Hostel",
    location: "Memnagar, Ahmedabad",
    type: "Hostel" as const,
    gender: "Girls" as const,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    amenities: ["FULLY FURNISHED", "HOT WATER", "PARKING", "SECURITY"],
    price: 5000,
  },
  {
    id: "5",
    name: "Sardardham Hostel",
    location: "Vaishnodevi Circle, Ahmedabad",
    type: "Hostel" as const,
    gender: "Co-ed" as const,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    amenities: ["WIFI", "FULLY FURNISHED"],
    price: 5000,
  },
  {
    id: "6",
    name: "The Sky Living Boys PG",
    location: "Navrangpura, Ahmedabad",
    type: "PG" as const,
    gender: "Boys" as const,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    amenities: ["WIFI", "FULLY FURNISHED", "LAUNDARY", "HOT WATER"],
    price: 16000,
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Building2 className="w-4 h-4" />
            Popular Choices
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Popular Hostels & PGs
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover top-rated accommodations near your college. Verified properties with amazing amenities.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;
