import React from 'react'
import "./Header.css"
import brend from '../../assets/Images/brend.svg'
import text from '../../assets/Images/text.png'
import play from '../../assets/Images/play.svg'
import pavuza from '../../assets/Images/pavuza.svg'
import picsum from '../../assets/Images/picsum.png'
function Header() {
  return (
    <div className='Header'>
      <div className='header-wrap'>
        <div className='header-wrap-box'>
          <img src={text} alt="" width={400} height={115} />
          <div className='flex gap-4 mt-2'>
            <img src={brend} alt="img" width={32} height={32} />
            <p className='text-white'>Türkiye’de Bugün 4 Numara</p>
          </div>
          <p className='header-text'>Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</p>
          <div className='flex gap-4 mt-4'>
            <div className='play-box'>
              <img className='text-black' src={play} alt="img" width={20} height={21} />
              <span><strong>Oynat</strong></span>
            </div>
            <div className='pavuza-box'>
              <img src={pavuza} alt="img" width={26} height={26} />
              <span className='text-white'><strong>Daha Fazla Bilgi</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header 