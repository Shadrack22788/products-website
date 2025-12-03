
import pomp from "../assets/pomp.avif"
import Space from '../Components/Space'

const Space1 = () => {

  const space = [
    {
      id: 1,
      image: pomp,
    }
  ]

  return (
    <section>
      {space.map((item) => (
        <Space
          key={item.id}
          image={item.image}
        />
      ))}
    </section>
  )
}

export default Space1