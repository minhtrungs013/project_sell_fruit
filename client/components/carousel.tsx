"use client"
// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";
import Autoplay from "embla-carousel-autoplay";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);
    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();
    return (
        <>
            <div className=" relative overflow-hidden" ref={emblaRef}>
                <div className="flex">{children}</div>
                <CarouselControls
                    canScrollNext={canScrollNext}
                    canScrollPrev={canScrollPrev}
                    onNext={() => emblaApi?.scrollNext()}
                    onPrev={() => emblaApi?.scrollPrev()}
                />
            </div>
            <Dots itemsLength={length} selectedIndex={selectedIndex} />

        </>
    );
};
export default Carousel;
