import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import {watchImg, rightImg} from "../utils";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {


    useGSAP(_ => {
        gsap.to("#title", {
            opacity: 1,
            y: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#title",
            }
        });

        gsap.to(".link", {
            opacity: 1,
            y: 0,
            delay: 1,
            scrollTrigger: {
                trigger: "#title",
            },
            duration: 1,
            stagger: 0.5,
        });
    });

  return (
    <section id="highlights"
    className="w-screen overflow-hidden h-full common-padding bg-custom-zinc">
        <div className="screen-max-width">
            <div className="mb-12 w-full items-end justify-between md:flex">
                <h1 id="title"
                className="section-heading font-bold">
                    Get the highlights.
                </h1>

                <div className="flex flex-wrap items-end gap-5">
                    <p className="link">
                        Watch the film
                        <img src={watchImg} alt="watch film" className="ml-2"/>
                    </p>

                    <p className="link">
                        Watch the Event
                        <img src={rightImg} alt="watch film" className="ml-2"/>
                    </p>
                </div>
            </div>

            {/* <VideoCarousel /> */}
            <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights