import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useState, useRef } from "react"
import {yellowImg} from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import {models, sizes} from "../constants";

const Model = () => {
    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFEconst [smallRotation7B9', '#6F6C64'],
        img: yellowImg
    });

    const cameraSmall = useRef();
    const cameraLarge = useRef();
    
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    const [smallRotation, setsmallRotation] = useState(0)
    const [largeRotation, setlargeRotation] = useState(0)

    useGSAP(_ => {
        gsap.to("#heading", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#heading"
            }
        })
    }, [])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                Take a Closer Look
            </h1>

            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView 
                    index={1}
                    groupRef={small}
                    gsapType={'view1'}
                    controlRef={cameraSmall}
                    setRotationState={setsmallRotation}
                    item={model}
                    size={size}/>

                    <ModelView 
                    index={2}
                    groupRef={large}
                    gsapType={'view2'}
                    controlRef={cameraLarge}
                    setRotationState={setlargeRotation}
                    item={model}
                    size={size}/>

                    <Canvas
                        className="w-full h-full fixed inset-0 overflow-hidden"
                        // style={{position: 'fixed', }}
                        eventSource={document.getElementById('root')}
                    >
                        <View.Port />
                    </Canvas>
                </div>

                <div className="mx-auto w-full">
                    <p className="text-sm font-light text-center mb-5">{model.title}</p>
                    <div className="flex items-center justify-center">
                        <ul className="color-container">
                            {
                                models.map((m, i) => (
                                    <li key={i}
                                    className={`w-6 h-6 rounded-full mx-2 cursor-pointer`}
                                    style={{backgroundColor: m.color[0]}}
                                    onClick={() => {setModel(m)}}>

                                    </li>
                                ))
                            }
                        </ul>

                        <button className="size-btn-container">
                            {
                                sizes.map(({label, value}) => 
                                    (<span key={label} className="size-btn"
                                    style={{backgroundColor: size === value ? 'white' : 'transparent',
                                        color: size===value ? 'black' : 'white'
                                    }}
                                    onClick={() => setSize(value)}>
                                        {label}
                                    </span>)
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model