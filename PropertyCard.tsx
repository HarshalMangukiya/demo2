import { motion } from "framer-motion";
import { MapPin, Wifi, Snowflake, Tv, Droplets, ShieldCheck, Car, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    location: string;
    type: "Hostel" | "PG";
    gender: "Boys" | "Girls" | "Co-ed";
    image: string;
    amenities: string[];
    originalPrice?: number;
    price: number;
  };
  index: number;
}

const amenityIcons: Record<string, typeof Wifi> = {
  WIFI: Wifi,
  AC: Snowflake,
  TV: Tv,
  "HOT WATER": Droplets,
  SECURITY: ShieldCheck,
  PARKING: Car,
  "FULLY FURNISHED": Sparkles,
};

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const genderColors = {
    Boys: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Girls: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    "Co-ed": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  };

  const typeColors = {
    Hostel: "bg-primary text-primary-foreground",
    PG: "bg-accent text-accent-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${typeColors[property.type]}`}>
            {property.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${genderColors[property.gender]}`}>
            ♂ {property.gender}
          </span>
        </div>

        {/* Price overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button variant="glass" size="lg">
            View Details
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {property.amenities.slice(0, 4).map((amenity) => {
            const Icon = amenityIcons[amenity] || Sparkles;
            return (
              <motion.span
                key={amenity}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary rounded-lg text-xs font-medium text-secondary-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                {amenity}
              </motion.span>
            );
          })}
          {property.amenities.length > 4 && (
            <span className="px-2.5 py-1 bg-secondary rounded-lg text-xs font-medium text-muted-foreground">
              +{property.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            {property.originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                ₹{property.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">
              ₹{property.price.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <Button variant="default" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
