// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet in, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    name: "Anna Vandana",
    position: "CEO - Media Wiki",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
  {
    id: 2,
    text: "In enim justo, rhoncus ut, imperdiet, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    name: "Anna Vandana",
    position: "CEO - Media Wiki",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
  {
    id: 3,
    text: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet in, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    name: "Anna Vandana",
    position: "CEO - Media Wiki",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
  {
    id: 4,
    text: "In enim justo, rhoncus ut, imperdiet, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    name: "Anna Vandana",
    position: "CEO - Media Wiki",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
];

function Testimonials() {
  return (
    <section className="my-8">
      <h2 className="text-center text-2xl font-bold mb-4">რა ამბობენ ჩვენი მომხმარებლები</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded-lg shadow-lg m-4 w-72">
            <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-24 h-24 mx-auto mb-2" />
            <p className="text-gray-700">{testimonial.text}</p>
            <h3 className="font-bold">{testimonial.name}</h3>
            <h4 className="text-gray-500">{testimonial.position}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
