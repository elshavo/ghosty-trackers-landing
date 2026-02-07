import { motion } from "framer-motion";
import { Check, Flame, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "6 Trackers",
    icon: Flame,
    priceMXN: "$7,199 MXN",
    priceUSD: "~ 349 USD",
    url: "https://buy.stripe.com/dRmcMY7NW82nanF4K400000",
    popular: false,
    includes: [
      "1 Dongle incluido",
      "Straps cómodos",
      "Cargador múltiple",
      "Garantía + soporte personalizado",
    ],
  },
  {
    name: "8 Trackers",
    icon: Star,
    priceMXN: "$8,499 MXN",
    priceUSD: "~ 449 USD",
    url: "https://buy.stripe.com/3cIeV69W44QbanF90k00001",
    popular: true,
    includes: [
      "1 Dongle incluido",
      "Straps cómodos",
      "Cargador múltiple",
      "Garantía + soporte personalizado",
    ],
  },
  {
    name: "10 Trackers",
    icon: Rocket,
    priceMXN: "$9,999 MXN",
    priceUSD: "~ 499 USD",
    url: "https://buy.stripe.com/fZu3co3xG1DZgM3ekE00002",
    popular: false,
    includes: [
      "1 Dongle incluido",
      "Straps cómodos",
      "Cargador múltiple",
      "Garantía + soporte personalizado",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Pricing = () => {
  return (
    <section id="paquetes" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Elige tu <span className="text-gradient">paquete</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Disponibles ya, listos para enviarse.
            <br />
            <span className="font-medium">Con garantía + soporte personalizado incluido.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-glow ${
                pkg.popular
                  ? "border-2 border-primary shadow-ghosty-lg scale-105 md:scale-110"
                  : "border border-border/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-ghosty-sm">
                    ⭐ MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    pkg.popular ? "bg-primary/30" : "bg-secondary"
                  }`}
                >
                  <pkg.icon
                    className={`w-8 h-8 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-extrabold text-foreground">{pkg.priceMXN}</div>
                <div className="text-sm text-muted-foreground">{pkg.priceUSD}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-ghosty-md hover:shadow-glow"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                size="lg"
              >
                <a href={pkg.url} target="_blank" rel="noopener noreferrer">
                  Comprar →
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
