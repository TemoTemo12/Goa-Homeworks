import React from 'react';
import Card from './components./Card';

const Container = () => {
  const cardsData = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: "https://via.placeholder.com/400"
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: "https://via.placeholder.com/400"
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      imageUrl: "https://via.placeholder.com/400"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-4">
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          imageUrl={card.imageUrl} 
        />
      ))}
    </div>
  );
};

export default Container;
