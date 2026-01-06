import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Clock, MapPin, CreditCard, Headphones, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Verified",
    description: "All properties personally verified by our team for safety and quality.",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your room instantly with just a few clicks. No waiting time.",
  },
  {
    icon: MapPin,
    title: "Near Colleges",
    description: "Find accommodations within walking distance of major colleges.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Flexible payment options including UPI, cards, and EMI.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for any issues or queries.",
  },
  {
    icon: Star,
    title: "Best Prices",
    description: "Price match guarantee. Find a better price? We'll match it.",
  },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: 500, suffix: "+", label: "Properties" },
            { value: 25, suffix: "+", label: "Cities" },
            { value: 10000, suffix: "+", label: "Happy Students" },
            { value: 98, suffix: "%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose StayFinder?
          </h2>
          <p className="text-lg text-muted-foreground">
            We make finding your perfect accommodation simple, safe, and stress-free.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow"
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
