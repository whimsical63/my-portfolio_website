import Globe from "react-globe.gl";
import {useEffect, useRef, useState} from "react";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef(null);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.pointOfView(
                {lat: 12.879721, lng: 121.774017, altitude: 2}, // Focus on the coordinates
                1000 // Transition duration in milliseconds
            );
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('laurenceunabia@outlook.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3
            xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Laurence
                            </p>
                            <p className="grid-subtext">With 2 years of experience,
                                I have honed my skills in frontend and backend development, with a focus on animated 3D
                                websites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in HTML, TailwindCSS, Javascript/Typescript
                                with a focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit
                        flex justify-center items-center">
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 12.879721, lng: 121.774017,
                                    text: "I'm here!",
                                    size: 20,
                                    color: "white",
                                }]}
                                labelSize={(d) => d.size * 0.2} // Adjust label size multiplier
                                labelText={(d) => d.text} // Use the text field for the label
                                labelColor={(d) => d.color} // Set the color dynamically
                                labelResolution={3} // Increases resolution for larger labels
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones.</p>
                            <p className="grid-subtext">I am currently based in the Philippines, with remote work
                                available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3"
                             className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love coding, and I find joy in creating and
                                solving challenging problems,
                                building solutions that can make a difference, and continuously learning new
                                technologies to improve my skills. <i>Coding is not just a profession for me, it is my passion.</i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-xl md:text-xl
                                font-medium text-gray_gradient text-white">
                                    laurenceunabia@outlook.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}
export default About
