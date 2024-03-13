import React from 'react'
import HeroCard from './HeroCard'

const Display = () => {
    const cars = [
        {
          name: "Volkswagen Virtus",
          seating: "5 Seater",
          manual: "Manual & Automatic",
          rentpd: "₹21,345.18",
          imageUrl: "https://freebiescloud.com/wp-content/uploads/2022/01/Skoda-Slavia-2022-2.png"
        },
        {
          name: "Toyota Corolla",
          seating: "5 Seater",
          manual: "Automatic",
          rentpd: "₹18,500.00",
          imageUrl: "https://th.bing.com/th/id/R.014a0026e679d0f8557e461053c43f01?rik=jto7Ek2ti3hd5g&pid=ImgRaw&r=0"
        },
        // Add more cars as needed
      ];
  return (
    <div className="display-div">
       {cars.map((car, index) => (
        <HeroCard 
          key={index} 
          name={car.name} 
          seating={car.seating} 
          manual={car.manual} 
          rentpd={car.rentpd} 
          imageUrl={car.imageUrl} 
        />
      ))}
    </div>
  )
}

export default Display