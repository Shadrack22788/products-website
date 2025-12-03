import StellaImage from "../assets/StellaImage.jpeg"
import StellasData from "../Components/StellasData"

const StellaSection = () => {

  const stellaData = [
    {
      id: 1,
      image: StellaImage,
      title: "Stella Hudson",
      description:
        "Amazing service! I hired for a deep cleaning of my home, and they exceeded my expectations. The team was professional, punctual, and paid attention to every detail. My kitchen and bathrooms have never looked this spotless, and even the hard-to-reach areas were thoroughly cleaned.",
    },
  ]

  return (
    <section className="text-2xl text-[#ffffff]">
      {stellaData.map((item) => (
        <StellasData
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  )
}

export default StellaSection