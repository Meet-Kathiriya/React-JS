import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div class="navbar">

        <div class="nav-1">
          <img src="logo.svg" alt="logo" style={{ height: '25px', marginTop: '5px' }} />
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">MOBILE COVERS</a>
        </div>
        <div class="nav-2">
          <input type='text' style={{ width: '45%', height: '35px', backgroundColor: 'rgb(233, 229, 229)', border: 'none', borderRadius: '5px', paddingLeft: '20px' }} placeholder='Search by products' />
          <div style={{ display: 'flex', width: '35%', justifyContent: 'space-around', borderLeft: '1px solid rgb(233, 229, 229)', marginLeft: '20px' }}>
            <p>LOGIN</p>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
      <div class="navbar2">
        <div class="nav-3">
          <p>Men</p>
          <p>Women</p>
          <p>Shop Now</p>
          <p>Live Now</p>
          <p>Plus Size</p>
          <p>Accessories</p>
          <p>Official Merch</p>
          <p>Sneakers</p>

        </div>
      </div>
    </div>
  )
}