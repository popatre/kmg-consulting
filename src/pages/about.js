import React from "react";
import Image from "../components/Image";
import Navbar from "../components/Navbar";

export default function aboutMe() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-4xl w-9/10 flex items-center flex-col">
                <Image />
                <h1 className="text-4xl font-bold mb-10">Dr Kim McGuire</h1>
                <p className="mx-10 my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat corrupti vero eius dolorum nobis laudantium optio,
                    ipsa consequuntur debitis vel cumque ad? Rem animi nobis
                    rerum officia, iste obcaecati non!
                </p>
                <p className="mx-10 my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat corrupti vero eius dolorum nobis laudantium optio,
                    ipsa consequuntur debitis vel cumque ad? Rem animi nobis
                    rerum officia, iste obcaecati non!
                </p>
            </main>
        </>
    );
}
