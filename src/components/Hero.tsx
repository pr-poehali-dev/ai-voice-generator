import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/73022c51-4ff2-415e-9901-c83728c706a4/files/8d3615f0-cd67-4b6a-ae15-d4e0d4fe77f3.jpg"
          alt="Уютный интерьер пельменной"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПЕЛЬМЕНИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Лепим с душой — как дома, только лучше. Сочные, горячие, с хрустящим тестом
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
            Смотреть меню
          </button>
          <button className="border border-white text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
            Заказать стол
          </button>
        </div>
      </div>
    </div>
  );
}