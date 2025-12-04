import card_1 from "../assets/po1.jpg";
import card_2 from "../assets/pop2.jpg";
import card_3 from "../assets/pop3.jpg";

import cleaner_1 from "../assets/cleaner1.jpg";
import cleaner_2 from "../assets/cleaner2.jpg";
import cleaner_3 from "../assets/cleaner3.jpg";

import Cards from "../Components/Cards";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "General House Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: card_1,
    },
    {
      id: 2,
      title: "Deep Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: card_2,
    },
    {
      id: 3,
      title: "Move-In/Move-Out Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: card_3,
    },
    {
      id: 4,
      title: "Post-Construction Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: cleaner_1,
    },
    {
      id: 5,
      title: "Carpet and Upholstery Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: cleaner_2,
    },
    {
      id: 6,
      title: "Window Cleaning",
      description:
        "Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning",
      image: cleaner_3,
    },
  ];

  return (
    <section>
      <h1 className="text-center text-5xl py-5 font-bold ">Our services</h1>
    <section className="grid grid-cols-3 gap-5 w-3/4 mx-auto pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      {cards.map((card) => (
        <Cards
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </section>
    </section>
  );
};

export default Card;