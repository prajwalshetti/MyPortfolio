import React from 'react';

const SocialLinks = () => {
    return (
        <section className="bg-[#387478] rounded-t-[80px] sticky top-10 md:top-0" id="links">
            <section className="grid place-content-center gap-2 bg-[#387478] px-8 py-24 text-[#FAF7F0] rounded-t-[80px]">
                <a
                    href=""
                    className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
                    style={{ lineHeight: '0.75' }}
                >
                    <div>
                        <span className="inline-block">L</span>
                        <span className="inline-block">i</span>
                        <span className="inline-block">n</span>
                        <span className="inline-block">k</span>
                        <span className="inline-block">e</span>
                        <span className="inline-block">d</span>
                        <span className="inline-block">i</span>
                        <span className="inline-block">n</span>
                    </div>

                </a>

                <a
                    href=""
                    className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
                    style={{ lineHeight: '0.75' }}
                >
                    <div>
                        <span className="inline-block">I</span>
                        <span className="inline-block">n</span>
                        <span className="inline-block">s</span>
                        <span className="inline-block">t</span>
                        <span className="inline-block">a</span>
                        <span className="inline-block">g</span>
                        <span className="inline-block">r</span>
                        <span className="inline-block">a</span>
                        <span className="inline-block">m</span>
                    </div>
                </a>
            </section>
        </section>
    );
};

export default SocialLinks;
