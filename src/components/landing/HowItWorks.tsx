import { motion } from "framer-motion";
import { ShoppingCart, Package, Gamepad2 } from "lucide-react";
import trackerWhite from "@/assets/tracker-white.png";

const steps = [
  {
    icon: ShoppingCart,
    step: "1",
    title: "Compra tu paquete",
    description: "Elige el paquete que mejor se ajuste a tus necesidades",
  },
  {
    icon: Package,
    step: "2",
    title: "Recíbelo listo para usar",
    description: "Envío rápido y seguro a tu domicilio",
  },
  {
    icon: Gamepad2,
    step: "3",
    title: "Conecta y juega",
    description: "Compatible con VRChat y SlimeVR",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Cómo <span className="text-gradient">funciona</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            3 pasos simples para empezar a disfrutar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-xs font-bold flex items-center justify-center text-accent-foreground">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/25 rounded-full blur-3xl scale-90" />
              <motion.img
                src={trackerWhite}
                alt="Ghosty Tracker"
                className="relative z-10 w-48 md:w-64"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
