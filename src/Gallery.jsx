const Gallery = ({ images }) => {
  return (
    <div className='gallery__container'>
        {
            images.map((image) => (
                <section>
                    <img src={image.img} alt='Image' />
                    <h4>{image.name}</h4>
                </section>
            ))
        }
    </div>
  )
}

export default Gallery