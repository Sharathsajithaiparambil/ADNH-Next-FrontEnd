"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ImageItem {
  id: number;
  image: string;
  mobileImage?: string;
  title: string;
}

interface ScrollAnimatedImagesProps {
  items: ImageItem[];
}

export default function ScrollAnimatedImages({ items }: ScrollAnimatedImagesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!items || items.length === 0) return null;

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative overflow-hidden rounded-xl"
        >
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-[500px] lg:h-[600px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Mobile Image */}
          {item.mobileImage && (
            <div className="md:hidden relative w-full h-[400px]">
              <Image
                src={item.mobileImage}
                alt={item.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

