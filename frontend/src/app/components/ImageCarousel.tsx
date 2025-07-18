"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import NotAvailable from "../../../public/not-available.png";
import { IProjectWorkedOn } from "./Experience";

interface ImageCarouselProps {
  projectsWorkedOn: IProjectWorkedOn[];
  className: string;
}

export default function ImageCarousel({
  projectsWorkedOn,
  className,
}: ImageCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex">
        {projectsWorkedOn?.map((item) => (
          <div
            className="flex-[0_0_100%] relative min-w-0 flex items-center justify-center max-h-96"
            key={item._key}
          >
            <div className="fixed opacity-0 hover:opacity-100 justify-center items-center h-full w-full hover:flex hover:flex-col hover:bg-[rgba(0,0,0,0.7)] hover:rounded-2xl">
              <div className="text-white mr-auto ml-auto mb-2 pl-4 pr-4 text-2xl font-bold">{item.projectTitle}</div>
              <div className="text-white mr-auto ml-auto pl-4 pr-4 font-semibold">{item.projectDescription}</div>
            </div>
            <Image
              src={item.image?.asset.url || NotAvailable}
              alt={item.projectTitle || "Not Available"}
              width={item.image?.asset.metadata.dimensions.width || 2048}
              height={item.image?.asset.metadata.dimensions.height || 2048}
              placeholder="blur"
              blurDataURL={item.image?.asset.metadata.lqip}
              className="w-auto h-full object-contain rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
