import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "AWS Lambda & Serverless Architecture",
    issuer: "Udemy",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "FastAPI Complete Course",
    issuer: "Udemy",
    image: "/placeholder.svg?height=150&width=200",
  },
];

export default function Certifications() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-2xl sm:text-xl font-bold mb-8 text-gray-800">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={200}
              height={150}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-base sm:text-sm font-semibold mb-1 text-gray-800">
                {cert.title}
              </h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
