import React from 'react'

export default function Slider() {
    return (
        <div>
            {/* Slider Section */}
            <div className="over p-1 pt-28 flex gap-2 overflow-x-scroll">
                <img src="img-1.jpg" alt="" className="rounded-xl w-full" />
                <img src="img-2.webp" alt="" className="rounded-xl w-full" />
                <img src="img-3.webp" alt="" className="rounded-xl w-full" />
                <img src="img-4.webp" alt="" className="rounded-xl w-full" />
                <img src="img-5.webp" alt="" className="rounded-xl w-full" />
            </div>
            {/* Slider Section */}
        </div>
    )
}