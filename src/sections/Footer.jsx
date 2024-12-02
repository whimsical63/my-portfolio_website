import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-tborder-black-300
        flex justify-between items-center flex-wrap grap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                {/*<div className="social-icon">*/}
                {/*    <a href="https://github.com/whimsical63" target="_blank" rel="noreferrer">*/}
                {/*        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div className="social-icon flex justify-center items-center w-16 h-16">
                    <a
                        href="https://github.com/whimsical63"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full h-full flex justify-center items-center"
                    >
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 m-0 p-0"/>
                    </a>
                </div>
                {/*<div className="social-icon">*/}
                {/*    <img src="/assets/twitter.svg" alt="twitter"*/}
                {/*         className="w-1/2 h-1/2"/>*/}
                {/*</div>*/}
                {/*<div className="social-icon">*/}
                {/*    <img src="/assets/instagram.svg" alt="instagram"*/}
                {/*         className="w-1/2 h-1/2"/>*/}
                {/*</div>*/}
            </div>

            <p className="text-white-500">
                © 2024 Laurence. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
