import World from '../Components/World'
import cloud from "../assets/cloud.png"

const World1 = () => {

  const worldData = [
    {
      id: 1,

      image: cloud,
      
    }
  ]

  return (
    <section>
      {worldData.map((item) => (
        <World
          key={item.id}
          image={item.image}
        />
      ))}
    </section>
    
  )
}

export default World1
