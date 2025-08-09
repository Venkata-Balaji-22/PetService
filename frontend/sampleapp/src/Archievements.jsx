import React from 'react';
import './Archievements.css'; // Import CSS if you have specific styles

const Archievements = () => {
    return (
        <>
            <h1>Welcome to Doggo family!</h1>
            <p>
                At Doggo, we believe that pets are not just animals; they are family. Our mission is to provide top-notch care and services that ensure the well-being and happiness of your furry companions.
            </p>
            <p>
                We provide comprehensive services, expert staff, 24/7 online service.
            </p>

            <h2>Our Achievements</h2>
            <section className="achievement-gallery">
                <article className="achievement-item">
                    <img 
                        src="https://www.petage.com/wp-content/uploads/2023/10/Pet-Innovation-Award2023-blog-scaled-1-875x548.jpg" 
                        alt="Awarded Best Pet Care in 2023" 
                    />
                    <p>Awarded Best Pet Care in 2023</p>
                </article>
                <article className="achievement-item">
                    <img 
                        src="https://www.creativehatti.com/wp-content/uploads/edd/2021/06/Banner-design-with-1000-happy-customers-5-star-ratings-04-large.jpg" 
                        alt="1000+ Happy Customers" 
                    />
                    <p>1000+ Happy Customers</p>
                </article>
                <article className="achievement-item">
                    <img 
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/home-delivery-design-template-00d8cd19ef27154667886d63cae245b3_screen.jpg?ts=1694016084" 
                        alt="24*7 door delivery" 
                    />
                    <p>24*7 Door Delivery</p>
                </article>
            </section>
        </>
    );
};

export default Archievements;
