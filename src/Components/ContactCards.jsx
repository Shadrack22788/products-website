const ContactCards = () => {
  const data = [
    {
      id: 1,
      address: "123 Main Street, Suite 101, City A, State/Region, Zip code",
      phone: "+1 (123) 456-7890",
      email: "citya@cleaningcompany.com",
    },
    {
      id: 2,
      address: "456 Elm Avenue, Floor 2, City B, State/Region, Zip code",
      phone: "+1 (987) 654-3210",
      email: "cityb@cleaningcompany.com",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-6">
      {data.map((item) => (
        <div key={item.id} className="p-6 bg-gray-200 rounded-3xl shadow text-2xl w-3/4 mx-auto p-10 mb-20">
          <h2 className="font-bold text-3xl mb-3 ">City {item.id}</h2>

          <p><strong>Address:</strong> {item.address}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Email:</strong> {item.email}</p>
        </div>
      ))}
    </section>
  );
};

export default ContactCards;