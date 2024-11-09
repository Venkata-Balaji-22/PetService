import React from 'react';
import GroomingCard from './GroomingCard';

const groomingServices = [
    {
        img: 'https://media.istockphoto.com/id/545816846/photo/washing-dog.jpg?s=612x612&w=0&k=20&c=1I240mSMkzNpp1Zd_Rfx6Yxah3rapebdVCMJZfj5iss=',
        title: 'Basic Bath',
        description: 'Includes shampooing and towel dry. Ideal for regular upkeep.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/484087200/photo/dog-nails-being-cut-and-trimmed-during-grooming.jpg?s=612x612&w=0&k=20&c=HsAEFX5fP0If0zv8pTV8rTMmVRd_Cs-K1I7s3tsgTmg=',
        title: 'Nail Trimming',
        description: 'Expert trimming and shaping of your pet’s nails for comfort.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/1272140176/photo/little-white-maltese-dog-in-a-dog-beauty-salon-a-maltese-dog-is-sitting-on-a-table-in-a-dog.jpg?s=612x612&w=0&k=20&c=hT1sz3ruuC-XLhoZM_z3XEbkbrEFOk4K2EWOiEMjdzM=',
        title: 'Full Haircut',
        description: 'Full haircut and styling service tailored to your pet’s breed.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/481993518/photo/cleaning-dog-ears.jpg?s=612x612&w=0&k=20&c=Y4MAkKeGfLy44VIg6fXEzBS3UuWjG4c10fSn0Kll4OQ=',
        title: 'Ear Cleaning',
        description: 'Professional cleaning of your pet’s ears to prevent infections.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/819825716/photo/dog-dental-health.jpg?s=612x612&w=0&k=20&c=qekYga8-9QfJ0zimR3ktRiwvdMcWxMgBZT_kh2GwjlY=',
        title: 'Teeth Cleaning',
        description: 'Comprehensive teeth cleaning service to maintain oral hygiene.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/1182916347/photo/human-hand-cleans-a-dogs-ear-with-a-cotton-pad.jpg?s=612x612&w=0&k=20&c=J9abC3DydhMN2CnCU8W0USlEQLa_Z9XG_SFN2g-qgXE=',
        title: 'Ear Hair Removal',
        description: 'Gentle removal of excess hair to keep your pet\'s ears clean and healthy.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/496033130/photo/puppy-dog-scratching.jpg?s=612x612&w=0&k=20&c=o9jGQhtQJKWVkfmiuM72JoyQtXnof_GZTUoc9VDEudc=',
        title: 'Flea & Tick Treatment',
        description: 'Complete treatment to protect your pet from fleas and ticks.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/1298269935/vector/dog-training-lesson-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=g-0dzgDddmIurlyES_34rCfdsDb5_lhPZVG4dHfOQpQ=',
        title: 'De-Shedding Treatment',
        description: 'Special de-shedding treatment to reduce excessive shedding.',
        link:'/GroomingBookingForm'
    },
    {
        img: 'https://media.istockphoto.com/id/1297804383/photo/yorkshire-terrier-with-cucumbers-on-her-eyes-at-grooming-salon-spa.jpg?s=612x612&w=0&k=20&c=CeABZvQcc-m8e1uof_B-YpIFm-xenG50m6vQu14LTTk=',
        title: 'Spa Treatment',
        description: 'Pamper your pet with a relaxing spa treatment.',
        link:'/GroomingBookingForm'
    },
];

const GroomingGallery = () => {
    return (
        <>
                {groomingServices.map((service, index) => (
                    <GroomingCard
                        key={index}
                        img={service.img}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                    />
                ))}
           </>
    );
};

export default GroomingGallery;
