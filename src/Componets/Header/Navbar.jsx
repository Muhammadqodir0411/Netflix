import React from 'react'
import logo from "../../assets/Images/logo.svg"
import Fill from "../../assets/Images/Fill.svg"
import Vectors from "../../assets/Images/Vectors.svg"
import profile from "../../assets/Images/profile.svg"

const Navbar = () => {
    return (
        <div className='navbar bg-black p-4'>
            <div className="container wrapper">
                <div className='left'>
                    <img src={logo} width={111} height={33} alt="logo" />
                    <ul className='nav-lict'>
                        <li>Ana Sayfa</li>
                        <li>Diziler</li>
                        <li>Filmler</li>
                        <li>Yeni ve Popüler</li>
                        <li>Listem</li>
                    </ul>
                </div>
                <div className='right'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span className='text-white'>ÇOCUK</span>

                    <img src={Fill} alt="" width={20} height={20} />
                    <img src={Vectors} alt="" width={19} height={17} />
                    <img src={profile} alt="" width={32} height={32} />

                    <button className='bg-red-600 nav-login'>Login</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar