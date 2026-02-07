import { motion } from "framer-motion";
import { 
  Cpu, 
  Battery, 
  Plug, 
  Feather, 
  WifiOff, 
  Sparkles, 
  Radio, 
  HeadphonesIcon 
} from "lucide-react";
import dongleUsb from "@/assets/dongle-usb.png";

const features = [
  {
    icon: Cpu,
    title: "Sensor ICM-45686",
    description: "Última generación para tracking preciso",
  },
  {
    icon: Battery,
    title: "30 horas de batería",
    description: "Sesiones largas sin preocupaciones",
  },
  {
    icon: Plug,
    title: "Cargador múltiple",
    description: "6 Type-C → 1 USB incluido",
  },
  {
    icon: Feather,
    title: "Ultra pequeños",
    description: "Extremadamente ligeros y cómodos",
  },
  {
    icon: WifiOff,
    title: "¡Sin WiFi!",
    description: "Conexión más estable y confiable",
  },
  {
    icon: Sparkles,
    title: "Straps ajustables",
    description: "Cómodos y seguros para VR",
  },
  {
    icon: Radio,
    title: "1 Dongle incluido",
    description: "Para TODOS tus trackers",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte 1 a 1",
    description: "Garantía y servicio personalizado",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

const Features = () => {
  return (
    <section id="caracteristicas" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Características <span className="text-gradient">mejoradas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseñados para ofrecerte la mejor experiencia de tracking en VR
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dongle showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 glass-card p-8 rounded-3xl"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
            <motion.img
              src={dongleUsb}
              alt="Dongle USB Ghosty"
              className="relative z-10 w-32 md:w-40"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Dongle USB incluido</h3>
            <p className="text-muted-foreground max-w-md">
              Un solo dongle para conectar todos tus trackers. Sin necesidad de WiFi,
              conexión directa y estable vía RF.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
