import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import * as React from "react";

gsap.registerPlugin(TextPlugin);

export default function TypeingEffectText({ words }: { words: string[] }) {
    

    React.useEffect(() => {
        // cursor animation
        gsap.to(".typing-effect-text-cursor", {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1,
        })

        // typing animation
        const textTl = gsap.timeline({repeat: -1});

        words.forEach(word => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 2});
            tl.to(".typing-effect-text", {
                duration: 1,
                text: word,
            })

            textTl.add(tl);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    

    return (
        <React.Fragment>
            <span className="typing-effect-text pl-2"/>
            <span className="typing-effect-text-cursor">|</span>
        </React.Fragment>
    );
}
