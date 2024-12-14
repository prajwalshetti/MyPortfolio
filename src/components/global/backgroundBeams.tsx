import { BackgroundBeams } from "../ui/background-beams";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[35rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased rounded-b-[100px]">
            <div className="lg:h-[14rem] md:h-[10rem] h-[4rem] flex w-[80%] uppercase">
                <TextHoverEffect text="contact" />
            </div>
            <BackgroundBeams />
        </div>
    );
}