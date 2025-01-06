// src/components/TestimonialCarousel.jsx
import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    id: 1,
    text: "If that Recency's TED videos don't convince you to add automated testing to your code, I don't know what will. This was the very best explanation of frameworks for beginners that I've ever seen.",
    name: "Nick Doe",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
  {
    id: 2,
    text: "A wonderful experience that has truly changed my perspective on coding!",
    name: "John Smith",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
  {
    id: 3,
    text: "I learned so much from this workshop; it has been a game changer!",
    name: "Jane Doe",
    img: "https://via.placeholder.com/150", // შეცვალეთ თქვენი სურათით
  },
];

function TestimonialCarousel() {
  return (
    <section className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">რა ამბობენ ჩვენი მომხმარებლები</h2>
      <div className="flex space-x-4 overflow-x-auto w-full max-w-3xl">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            text={testimonial.text}
            name={testimonial.name}
            img={testimonial.img}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialCarousel;
