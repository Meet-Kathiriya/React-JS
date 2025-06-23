import React from 'react'

export default function Footer() {
    return (
        <div>

            {/* Footer */}
            <footer className="bg-[#161601] flex justify-between px-30 pt-20 pb-10 text-white">
                <div className="text-[#A5A8AC]">
                    <img src="GIF.webp" alt="" className="w-25 h-25" />
                    <h1 className="text-[50px] font-bold">FOR THE <br /> RIGHT <br /> KIND OF MAN.</h1>
                    <h2 className="text-xl py-2">© 2024, Wrogn Powered by TMRW</h2>

                    <div className="flex gap-7 py-8">
                        <img src="https://wrogn.com/cdn/shop/files/Instagram.svg?v=1723192971" alt="" />
                        <img src="https://wrogn.com/cdn/shop/files/Facebook.svg?v=1723192971" alt="" />
                        <img src="https://wrogn.com/cdn/shop/files/Twitter.png?v=1723192971" alt="" />
                        <img src="https://wrogn.com/cdn/shop/files/Pinterest.svg?v=1723192971" alt="" />
                        <img src="https://wrogn.com/cdn/shop/files/Youtube.png?v=1723192972" alt="" />
                    </div>
                </div>

                <div className="flex gap-35 text-[#8F9397] font-semibold">
                    <ul className="leading-11">
                        <li className="text-white pb-5 font-semibold"><a href="#">HELP</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">My Account</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Privacy Policy</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Anti Corruption Policy</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Terms & Conditions</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Contact Us</a></li>
                    </ul>
                    <ul class="leading-11">
                        <li className="text-white pb-5 font-semibold"><a href="#">ORDER SUPPORT</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Return & Refund Policy</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">FAQ</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Shipping</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Cancellation</a></li>
                    </ul>
                    <ul class="leading-11">
                        <li className="text-white pb-5 font-semibold"><a href="#"></a>ABOUT US</li>
                        <li className="hover:text-white hover:underline"><a href="#">About Us</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Find a Store</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Blog</a></li>
                        <li className="hover:text-white hover:underline"><a href="#">Careers</a></li>
                    </ul>

                </div>
            </footer>
            {/* Footer */}

        </div>
    )
}