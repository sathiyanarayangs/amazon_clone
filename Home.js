import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif" alt=""/>
        
        {/*Product id, title, price, rating, image*/}
        <div className='home__row'>
        <Product id="12321341"
        title="Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
        price="₹ 1,94,900.00" 
        rating={5}
        image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SY200_.jpg"
        />
        <Product id="12321342"
        title="Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X | L43M4-4AIN (Black) (Netflix, Prime Video, Youtube, Disney+ Hotstar) "
        price="₹ 29,400.00" 
        rating={5}
        image="https://m.media-amazon.com/images/I/612oGaxp3DS._AC_UL320_.jpg"
        />
        </div>

        <div className='home__row'>
        <Product id="12321343"
        title="Acer Nitro 5 AN515-57 Gaming Laptop | Intel Core i5-11400H |NVIDIA GeForce RTX 3050 Laptop Graphics "
        price="₹ 69,900.00" 
        rating={4}
        image="https://m.media-amazon.com/images/I/71evs2WKJjS._AC_UL320_.jpg"
        />
        <Product id="12321344"
        title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 Ti GDDR6 4GB Graphics"
        price="₹ 63,990.00" 
        rating={4}
        image="https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UL320_.jpg"
        />
        <Product id="12321345"
        title="boAt Rockerz 330 Wireless Neckband with ASAP Charge, Up to 30H Playback"
        price="₹ 1,94,900.00" 
        rating={5}
        image="https://m.media-amazon.com/images/I/61DKcGr12OL._AC_UL320_.jpg"
        />
        
        </div>
        <div className='home__row'>
        <Product id="12321346"
        title="LG 1.5 Ton 5 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling, HD Filter with Anti-Virus protection , 2021 Model, MS-Q18YNZA, White)10 Years On Compressor With Gas Charging, 5 Years On Pcb And 1 Year On Product
        Copper With Ocean Black Protection; Increase Durability ; Uninterrupted Cooling
        Special Features: Dual Inverter"
        price="₹ 41,990.00" 
        rating={5}
        image="https://m.media-amazon.com/images/I/51lyOjfKhML._AC_UL320_.jpg"
        />
        </div>

        {/*Product */}
        </div>

    )
}

export default Home
