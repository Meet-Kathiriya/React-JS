import React from 'react';

export default function SignUp() {
    const handleClick = () => {
        alert('Sign Up button clicked!');
    }

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center">
            <div className="bg-white rounded flex">

                <div className="bg-black text-white p-6 w-80">
                    <div className="flex items-center mb-4">
                        <h1 className="font-bold">WROGN</h1>
                    </div>

                    <h2 className="mb-4">Join the Wrogn Tribe Today!</h2>

                    <div className="space-y-2">
                        <div className="border cursor-pointer border-gray-600 rounded p-2 text-sm">Get 10% OFF on your first order</div>
                        <div className="border cursor-pointer border-gray-600 rounded p-2 text-sm">Free shipping for orders above ₹749</div>
                        <div className="border cursor-pointer border-gray-600 rounded p-2 text-sm">Be the first to hear about new drops</div>
                    </div>
                </div>

                <div className="p-6 w-80">
                    <button className="float-right cursor-pointer"> x </button>

                    <h3 className="font-bold mb-2">Create Your Account</h3>
                    <p className="text-gray-600 text-sm mb-3">Fill in your details to sign up</p>

                    <input type="text" placeholder="Enter Your Name" className="w-full border p-2 rounded mb-2" />

                    <input type="email" placeholder="Enter Your Email" className="w-full border p-2 rounded mb-2" />

                    <input type="text" placeholder="Enter Your Mobile Number" className="w-full border p-2 rounded mb-2" />

                    <input type="password" placeholder="Create A New Password" className="w-full border p-2 rounded mb-2" />

                    <label className="flex items-start text-xs mb-3">
                        <input type="checkbox" className="mr-1 mt-1" />I agree to the Privacy Policy and Terms & Conditions.</label>

                    <button className="w-full cursor-pointer bg-pink-500 text-white p-2 rounded" onClick={handleClick}>Sign Up</button>

                    <div className="text-center mt-3">
                        <span className="text-gray-500 text-xs">Already have an account?  </span>
                        <a href="#Login" className="text-xs underline text-pink-500"> Login </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
