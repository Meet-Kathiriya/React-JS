import React from 'react'

export default function Video() {
    return (
        <div>

            {/* VIRAT MESSAGE */}
            <div className="px-16">
                <h1 className="text-center text-xl font-bold">VIRAT HAS A MESSAGE FOR YOU</h1>

                <div className="my-5 bg-[#e0e0e0] pb-0.5 rounded-3xl">
                    <div className="flex relative">
                        <video src="video.mp4" controls muted autoPlay className="w-[1350px] h-[646px] rounded-3xl"></video>

                        <h1 className="text-2xl font-bold -rotate-90 absolute top-72 right-[-115px]">VIRAT HAS MESSAGE FOR YOU</h1>
                    </div>

                    {/* SEASON'S TOP PICKS */}
                    <div className="m-1.5 pb-2 bg-white rounded-3xl">
                        <h1 className="text-center text-xl font-bold py-5">SEASON'S TOP PICKS</h1>

                        <div className="over overflow-x-auto whitespace-nowrap">
                            <div className="inline-flex p-1.5 gap-7 text-sm">
                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-1.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,739</h2>
                                        <s className="text-[#8F9397]">₹2,899</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Slim Fit Shirt | Navy</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-2.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,739</h2>
                                        <s className="text-[#8F9397]">₹2,899</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Slim Fit Shirt | Navy</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>
                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-3.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-4.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-5.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-1.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,739</h2>
                                        <s className="text-[#8F9397]">₹2,899</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Slim Fit Shirt | Navy</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-2.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,739</h2>
                                        <s className="text-[#8F9397]">₹2,899</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Slim Fit Shirt | Navy</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-3.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-4.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>
                                </div>

                                <div className="w-[265px] relative">
                                    <div className="bg-[#ed4a6b] text-white font-semibold text-[10px] w-15 rounded-r-sm px-1 py-0.5 absolute top-5">EXCLUSIVE</div>
                                    <img src="season-5.jpg" alt="" className="rounded-2xl" />

                                    <div className="flex items-center gap-1.5 mt-2">
                                        <h2 className="font-bold text-base mt-[-3px]">₹1,799</h2>
                                        <s className="text-[#8F9397]">₹2,999</s>
                                        <h3 className="text-[#2E953E] font-semibold">(40% OFF)</h3>
                                    </div>

                                    <h2 className="py-1">Solid Stretch Cotton Blend Shirt |...</h2>
                                    <button className="font-bold text-center border-1 border-gray-500 w-full rounded-lg py-2">Add to Bag</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SEASON'S TOP PICKS */}
                </div>
            </div>
            {/* VIRAT MESSAGE */}

        </div>

    );
}