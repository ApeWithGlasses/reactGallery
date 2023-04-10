import Header from "./Header"
import img1 from './assets/image1.jpg'
import img2 from './assets/image2.jpg'
import img3 from './assets/image3.jpg'
import img4 from './assets/image4.jpg'
import img5 from './assets/image5.jpg'
import Gallery from "./Gallery"

const images = [
  {
      name: 'Surrealist Image',
      img: img1
  },
  {
      name: 'Surrealist Image',
      img: img2
  },
  {
      name: 'Surrealist Image',
      img: img3
  },
  {
      name: 'Surrealist Image',
      img: img4
  },
  {
      name: 'Surrealist Image',
      img: img5
  }
]

function App() {
  return (
    <div className="App">
      < Header />
      < Gallery images={images} />
    </div>
  )
}

export default App
