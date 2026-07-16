import React from "react";
import { Button } from "../layouts/Button";
import { Link } from "react-scroll";
import img from "../assets/image/home.jpg"

export const Home = () => {
    return (
        <div className="min-h-screen lg:min-h-[90vh] flex flex-col justify-center items-center lg:flex-row md:mx-32 mx-5">
            <div className="flex flex-col tex-center lg:text-start gap-5">
                <h1 className="font-semibold text-5xl leading-tight">
                    Discover the Best Destinations
                </h1>

                <p>
                    With Trivago you can find the best deals on hotels, flights, and vacation packages. Explore our curated selection of destinations and start planning your next adventure today!
                </p>

                <div className="lg:pl-24">
                    <Link to="destinations" smooth={true} duration={500}>
                        <Button title="Destinations" backgroundColor="bg-brightColor"/>
                    </Link>
                </div>
            </div>
            <div className="mt-14 lg:mt-0 w-full lg:w-4/5">
                <img src={img} alt="img" />
            </div>
        </div>
    )
}