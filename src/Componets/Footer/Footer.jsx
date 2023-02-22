import React from 'react'
import facbook from '../../assets/Images/facbook.svg'
import instagram from '../../assets/Images/instagram.svg'
import linkdin from '../../assets/Images/linkdin.svg'
import youtbe from '../../assets/Images/youtbe.svg'

function Footer() {
    return (
        <div className='footer-wrap'>
            <div>
                <div className='d-flex gap-5'>
                    <img className='footer-img' src={facbook} alt="" />
                    <img className='footer-img' src={instagram} alt="" />
                    <img className='footer-img' src={linkdin} alt="" />
                    <img className='footer-img' src={youtbe} alt="" />
                </div>

                <ul className='text-white mt-4'>
                    <li className='my-3'>Seslendirme ve Alt Yazı</li>
                    <li className='my-3'>Medya Merkezi</li>
                    <li className='my-3'>Gizlilik</li>
                    <li className='my-3'>Bize Ulaşın</li>
                </ul>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Hizmet Kodu
                </button>
                <p className='text-white mt-3'>© 1997-2021 Netflix, Inc.  i-062d573a0ee099242</p>

            </div>

            <div>
                <ul className='text-white mt-4'>
                    <li className='my-3'>Sesli Betimleme</li>
                    <li className='my-3'>Yatırımcı İlişkileri</li>
                    <li className='my-3'>Yasal Hükümler</li>
                </ul>
            </div>
            <div>
                <ul className='text-white mt-4'>
                    <li className='my-3'>Yardım Merkezi</li>
                    <li className='my-3'>İş İmkanları</li>
                    <li className='my-3'>Çerez Tercihleri</li>
                </ul>
            </div>
            <div>
                <ul className='text-white mt-4'>
                    <li className='my-3'>Hediye Kartları</li>
                    <li className='my-3'>Kullanım Koşulları</li>
                    <li className='my-3'>Kurumsal Bilgiler</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
