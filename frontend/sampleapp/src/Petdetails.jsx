import React from 'react';
import Pets from './Pets';

function Petdetails() {
    const petData = [
        {
            img: 'https://media.istockphoto.com/id/509052128/photo/golden-retriever-sitting-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=ElpbUJyqy2vPdkzfrCin4thzBvEveakY6J1wNyz0Gkk=',
            name: 'Golden Retriever',
            age: 'Age: 2 months',
            desc: 'Friendly, Loyal',
            link:"/form"

        },
        {
            img: 'https://media.istockphoto.com/id/1068752692/photo/german-shepherd-dog-puppy.jpg?s=612x612&w=0&k=20&c=8Uflz8tLhgduzoOBcBU-A3-iFomnCTl5SBSj3awzokQ=',
            name: 'German Shepherd',
            age: 'Age: 5 months',
            desc: 'Playful, Vocal',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/1137958074/photo/siberian-husky-9-months-old-sitting-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=9WMnw4DUheHgkilJcs03FfBf2c9fRIXRl4UToN8dxE4=',
            name: 'Siberian Husky',
            age: 'Age: 3 months',
            desc: 'Energetic, Loyal',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/962855368/photo/beagle-5-years-old-sitting-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=LSDUgTw68-FNU43TmLQA1_e46lew9iBpGvaJdFB-B1s=',
            name: 'Beagle',
            age: 'Age: 4 months',
            desc: 'Curious, Playful',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/508296044/photo/labrador-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=rAIpw1npQGxP0ozPUQp1-5wroumnKfnN2CYgH5_A3PU=',
            name: 'Labrador Retriever',
            age: 'Age: 6 months',
            desc: 'Friendly, Loyal',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/104355461/photo/front-view-of-british-shorthair-cat-7-months-old-sitting.jpg?s=612x612&w=0&k=20&c=OXg47eem5DnX2WkX_kcDaZcl5-ARAbaBt6Bu5kLY7LM=',
            name: 'British Shorthair',
            age: 'Age: 2 months',
            desc: 'Calm, Affectionate',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/1137939852/photo/pomeranian-2-years-old-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=l4ogQca1W1ugqCCCsfFJ0QlhkjS0Q78VwMshT80N008=',
            name: 'Pomeranian',
            age: 'Age: 3 months',
            desc: 'Energetic, Playful',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/1332169399/photo/scottish-fold-kitten-silver-scottish-cat.jpg?s=612x612&w=0&k=20&c=0Z5zdsY3Ce22TpIEVg17hmqWObLWOcmYE1SHFYDuwxY=',
            name: 'Scottish Fold',
            age: 'Age: 1 month',
            desc: 'Quiet, Affectionate',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/512987729/photo/chow-chow.jpg?s=612x612&w=0&k=20&c=4E6p5gH2pl0CupbVxL46RXGCm3ZCAHE-jwC83yh28nA=',
            name: 'Chow Chow',
            age: 'Age: 4 months',
            desc: 'Calm, Protective',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/177689719/photo/thai-or-siamese-cat.jpg?s=612x612&w=0&k=20&c=smgO59YA2oBV5UqiWp-cAEel52izW4FsizG-xnV4p1o=',
            name: 'Siamese Cat',
            age: 'Age: 2 months',
            desc: 'Vocal, Affectionate',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/489122511/photo/maine-coon-sitting-pawing-and-looking-away.jpg?s=612x612&w=0&k=20&c=bihakHkLMcYk7ad_qShz3_604Joo6y7mRBq3mptkKdg=',
            name: 'Maine Coon',
            age: 'Age: 5 months',
            desc: 'Friendly, Independent',
             link:"/form"
        },
        {
            img: 'https://media.istockphoto.com/id/1329506390/photo/puppy-dog-isolated-on-white.jpg?s=612x612&w=0&k=20&c=h8HG_mbrlepPR9k2O-BjUljYsXDcVYxoTBKPjI-ophw=',
            name: 'Miniature Schnauzer',
            age: 'Age: 3 months',
            desc: 'Active, Smart',
             link:"/form"
        }
    ];

    return (
        <div className="pet-gallery">
            {petData.map((pet, index) => (
                <Pets
                    key={index}
                    img={pet.img}
                    name={pet.name}
                    age={pet.age}
                    desc={pet.desc}
                    link={pet.link}
                />
            ))}
        </div>
    );
}

export default Petdetails;
