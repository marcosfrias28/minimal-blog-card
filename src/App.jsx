import banner from './assets/cactus_img.jpg'
import './App.css'

export function App () {
  return (
    <>
      <section className='card'>
        <div className='text-contenitor'>
          <img className='banner' src={banner} alt='' />
          <label>Design</label>
          <h1 className='title'>Embracing Minimalism</h1>
          <p className='body-p'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        </div>
        <div className='author-container'>
          <hr className='separatore' />
          <p className='author'>Annie Spratt</p>
        </div>
      </section>
    </>

  )
}
