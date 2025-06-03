import React from 'react'

export default function Footer() {
  return (
    <div>
      <div class="footer" style={{ backgroundColor: 'rgb(28, 28, 28)', marginTop: '50px', paddingTop: '40px', color: 'white', }}>
        <img src="logo2.svg" width={'12%'} style={{ marginLeft: '95px' }}></img>

        <div style={{ display: 'flex', marginTop: '40px', justifyContent: 'space-evenly', }}>

          <div class="f1" style={{ color: 'white' }}>
            <p style={{ color: '#FDD835', wordSpacing: '3px' }}>CUSTOMER SERVICE</p>
            <div class="contact">
              <p>Contact Us</p>
              <p>Track Order</p>
              <p>Return Order</p>
              <p>Cancel Order</p>
            </div>
            <p style={{ marginTop: '25px', marginBottom: '20px', fontSize: '15px' }}><i class="fa-solid fa-truck" style={{ paddingRight: '10px' }}></i>15 Days Return Policy*</p>
            <p style={{ fontSize: '15px' }}><i class="fa-solid fa-money-bill" style={{ paddingRight: '10px' }}></i>Case On Delivery*</p>
          </div>

          <div class="f2">
            <p style={{ color: '#FDD835' }}>COMPANY</p>
            <div class="contact">
              <p>About Us</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>We are Hiring</p>
              <p style={{ color: '#FDD835', marginTop: '22px', wordSpacing: '3px' }}>DOWNLOAD THE APP</p>
            </div>
            <img src='google.webp' style={{ width: '35%', marginRight: '10px', marginTop: '10px' }}></img>
            <img src='apple.webp' style={{ width: '35%' }}></img>
          </div>

          <div class="f3">
            <p style={{ color: '#FDD835' }}>CONNECT WITH US</p>
            <div class="contact">
              <p><img src='download (10).svg' style={{ marginRight: '10px', marginTop: '15px' }}></img>4.7M People like this</p>
              <p><img src='download (9).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>1M People like this</p>
              <div>
                <img src='download (8).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>
                <img src='download (7).svg' style={{ marginRight: '10px' }}></img>
                <img src='download (6).svg' style={{ marginRight: '10px' }}></img>
                <img src='download (5).svg' style={{ marginRight: '10px' }}></img>
              </div>
              <p style={{ color: '#FDD835', marginTop: '25px', wordSpacing: '3px' }}>100% SECURE PAYMENT</p>
              <div class="payment">
                <img src='download (1).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>
                <img src='download (2).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>
                <img src='download (3).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>
                <img src='download (4).svg' style={{ marginRight: '10px', marginTop: '10px' }}></img>
              </div>
            </div>
          </div>
          <div class="f4">
            <p style={{ color: '#FDD835' }}>KEEP UP TO DATE</p>
            <div>
              <input type='email' placeholder='Enter Email Id:' style={{ backgroundColor: 'white', width: '50%', height: '30px', fontSize: '15px', marginTop: '30px', borderBottom: '1px solid #FDD835', borderRight: 'black', paddingLeft: '15px' }}></input>
              <button style={{ height: '32px', backgroundColor: '#FDD835' }}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}