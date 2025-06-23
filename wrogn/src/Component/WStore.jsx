import React from 'react'

export default function WStore() {
    return (
        <div>

            {/* Wrogn Store */}
            <div className="px-17 pb-17">
                <div className="flex justify-between">

                    <div className="pl-15 w-[718px] h-[394px]">
                        <h1 className="text-[32px] mt-10">WROGN STORE.</h1>
                        <h2 className="text-[56px] font-bold">RIGHT PLACE.</h2>
                        <p className="text-[#161601] text-lg font-semibold">Find how close you're to going wrogn!</p>
                        <button className="text-xl font-bold text-white bg-black rounded-lg py-3 w-87 mt-5 cursor-pointer">See All Stores</button>
                    </div>
                    <img src="Fulimg.webp" alt="" className="rounded-xl border-2 w-[701px] h-[340px]" />
                </div>

                <div className="flex justify-between gap-4">
                    <img src="Fulimg.webp" alt="" className="rounded-xl border-2 w-[601px] h-[363px]" />

                    <div className="flex justify-between w-[743px] h-[380px]">
                        <img src="Smallimg-2.webp" alt="" className="rounded-xl border-2 gap-3 w-[291px] h-[364px]" />
                        <img src="Smallimg-1.webp" alt="" className="rounded-xl border-2 w-[291px] h-[364px]" />
                    </div>
                </div>
            </div>
            {/* Wrogn Store */}

        </div>
    )
}