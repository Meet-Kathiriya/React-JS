import React from 'react'

export default function TrendingC() {
  return (
    <div>

      {/* TRENDING CATEGORIES */}
      <div className="m-16 ">
        <h1 className="text-center text-lg font-bold">TRENDING CATEGORIES</h1>
        <div className="flex gap-4 mt-5">
          <img src="trendingC-1.webp" alt="" className="w-[602.5px] rounded-xl" />
          <img src="trendingC-2.webp" alt="" className="w-[602.5px] rounded-xl" />
        </div>
        <div className="flex gap-4 mt-4">
          <img src="trendingC-3.webp" alt="" className="rounded-xl w-[396px]" />
          <img src="trendingC-4.webp" alt="" className="rounded-xl w-[396px]" />
          <img src="trendingC-5.webp" alt="" className="rounded-xl w-[396px]" />
        </div>
      </div>
      {/* TRENDING CATEGORIES */}

    </div>
  )
}