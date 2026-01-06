import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Building, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Students */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-primary to-primary-glow overflow-hidden group"
          >
            {/* Decorative circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Looking for a Room?
              </h3>
              <p className="text-lg text-white/85 mb-8 max-w-md">
                Browse verified hostels and PGs near your college. Book instantly with complete peace of mind.
              </p>
              <Button
                variant="glass"
                size="lg"
                className="group/btn"
              >
                Find Your Stay
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* For Owners */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-accent to-accent-glow overflow-hidden group"
          >
            {/* Decorative circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                List Your Property
              </h3>
              <p className="text-lg text-white/85 mb-8 max-w-md">
                Reach thousands of students looking for accommodation. List your hostel or PG for free.
              </p>
              <Button
                variant="glass"
                size="lg"
                className="group/btn"
              >
                List Now - It's Free
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
