import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievementsData = [
        {
            img: 'petAward.jpg',
            alt: 'Award ceremony for Best Pet Care in 2023',
            text: 'Awarded Best Pet Care in 2023',
        },
        {
            img: 'https://www.creativehatti.com/wp-content/uploads/edd/2021/06/Banner-design-with-1000-happy-customers-5-star-ratings-04-large.jpg',
            alt: 'Banner showing 1000 happy customers and 5-star ratings',
            text: '1000+ Happy Customers',
        },
        {
            img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/home-delivery-design-template-00d8cd19ef27154667886d63cae245b3_screen.jpg?ts=1694016084',
            alt: 'Promotional poster for 24x7 home delivery service',
            text: '24×7 Door Delivery',
        },
    ];

    return (
        <main className="achievements-container">
            <header className="achievements-header">
                <h1>Welcome to Doggo Family! 🐶</h1>
                <p>
                    At Doggo, pets are more than just animals—they’re family. 
                    Our mission is to provide top-notch care and services that ensure 
                    the well-being and happiness of your furry companions.
                </p>
                <p>
                    We offer comprehensive services, expert staff, and 24/7 online support.
                </p>
            </header>

            <section className="achievements-gallery">
                <h2>Our Achievements</h2>
                <div className="achievement-items">
                    {achievementsData.map((item, index) => (
                        <article className="achievement-item" key={index}>
                            <img src={item.img} alt={item.alt} loading="lazy" />
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Achievements;
