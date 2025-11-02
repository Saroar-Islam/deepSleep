import trackerImg from "../assets/tracker.png";
import React from "react";

function Tracker() {
    return (
        <section className="py-14 flex flex-col md:flex-row justify-around items-center bgCustom-3">
            <div className="text-center md:text-left p-4">
                <h2 className="text-5xl font-semibold font-playfair mb-10 text-slate-200"> Sleep Tracker</h2>
                <p className="text-base  max-w-xl mx-auto font-montserrat">
                    Monitor your sleep patterns, improve your rest, and wake up refreshed. DeepSleep helps you build
                    healthier habits with calming insights and intuitive tracking.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <img className="w-[400px] h-[600px]" src={trackerImg} alt="trackerImg" />
            </div>
        </section>
    );
}

export default Tracker;
