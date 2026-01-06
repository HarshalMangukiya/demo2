import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    college: "Gujarat University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Found the perfect PG near my college within minutes! The verification process gave me confidence about the safety. Highly recommend StayFinder!",
  },
  {
    id: 2,
    name: "Raj Patel",
    college: "IIT Gandhinagar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "Best platform for student housing! The prices are transparent and the booking process is super smooth. Saved so much time and effort.",
  },
  {
    id: 3,
    name: "Ananya Desai",
    college: "CEPT University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "As a girl moving to a new city, safety was my priority. StayFinder's verified listings made my parents feel at ease. Great experience!",
  },
  {
    id: 4,
    name: "Karan Mehta",
    college: "NID Ahmedabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 4,
    text: "The 'Near College' filter is a game-changer! Found accommodation walking distance from campus. The amenity details helped me choose wisely.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-glow relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-64 h-64 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -left-48 w-96 h-96 border border-white/10 rounded-full"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of satisfied students who found their perfect home with us.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-white shadow-2xl"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              {/* Quote Icon */}
              <Quote
                className={`w-8 h-8 mb-4 ${
                  activeIndex === index ? "text-primary" : "text-white/40"
                }`}
              />

              {/* Testimonial Text */}
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  activeIndex === index ? "text-foreground" : "text-white/90"
                }`}
              >
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-accent text-accent"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <div
                    className={`font-semibold ${
                      activeIndex === index ? "text-foreground" : "text-white"
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-sm ${
                      activeIndex === index
                        ? "text-muted-foreground"
                        : "text-white/70"
                    }`}
                  >
                    {testimonial.college}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
