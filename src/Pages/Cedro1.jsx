
import pomp from "../assets/pomp.avif"
import CedroData from '../Components/CedroData'

const Cedro1 = () => {

  const cedroData = [
    {
      id: 1,
      image: pomp,
    }
  ]

  return (
    <section>
      {cedroData.map((item) => (
        <CedroData
          key={item.id}
          image={item.image}
        />
      ))}
    </section>
  )
}

export default Cedro1;