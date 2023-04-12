import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
                key={card.id}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}