import img1 from "../assets/image/dest1.jpg";
import img2 from "../assets/image/dest2.jpg";
import img3 from "../assets/image/dest3.jpg";

import { DestinationCard } from "../layouts/DestinationCard";

export const Destination = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
            <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
                Most Popular Destinations
            </h1>

            <div className=" flex flex-col lg:flex-row gap-5 mt-14">
                <DestinationCard
                    image={img1}
                    title="Paris, France"
                    description="Paris offers iconic landmarks like the Eiffel Tower and world-class
                    art at the Louvre Museum and so much more."
                />
                <DestinationCard
                    image={img2}
                    title="Dubai, UAE"
                    description="A city of superlatives, Dubai boasts towering skyscrapers, luxury shopping, and desert adventures"
                />
                <DestinationCard
                    image={img3}
                    title="Venice, Italy"
                    description="Explore the romantic canals and historic architecture of Venice, a city built on water, great for couples."
                />
            </div>
        </div>
    );
};
