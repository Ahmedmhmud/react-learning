import { Button } from "react-scroll";

export const DestinationCard = (props) => {
    return (
        <div className="w-full lg:w-2/6 cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl overflow-hidden">
            <img className="rounded-t-lg" src={props.image} alt="img"></img>

            <div className="bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg">
                <h2 className="text-xl font-medium text-center">
                    {props.title}
                </h2>
                <p className="text-sm">
                    {props.description}
                </p>

                <div className="flex flex-row justify-center">
                    <Button title="Book Now" backgroundColor="bg-brightColor" />
                </div>
            </div>
        </div>
    );
}