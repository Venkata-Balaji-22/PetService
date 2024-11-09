import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
    {
        img: 'https://media.istockphoto.com/id/966384466/photo/cropped-image-of-man-holding-beagle-while-veterinarian-doing-injection-by-syringe-to-it.jpg?s=612x612&w=0&k=20&c=twckwU3QLBlQ2WIaPWyVVcEFdz-7FasorXCmgOiwQsU=',
        title: 'Vaccination Service',
        description: 'Ensure your pet is healthy and protected with routine vaccinations.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/514624140/photo/vets-examining-a-dog.jpg?s=612x612&w=0&k=20&c=-EBQ360ZoE61sgnXJohoB4ulnfYHNXcOuICWGTb7-qE=',
        title: 'General Checkup',
        description: 'Comprehensive health checkups to monitor your pet’s well-being.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/507583006/photo/cute-border-collie-puppy-with-an-emergency-kit.jpg?s=612x612&w=0&k=20&c=Gw_zgbKXtm_-GlehR-lF0dC1pXTq_fTqC_GH_z2CSII=',
        title: 'Emergency Care',
        description: 'Quick and reliable emergency services for your pet’s urgent needs.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/951028260/photo/close-up-of-examining-dogs-dental-health-at-vets-office.jpg?s=612x612&w=0&k=20&c=k1T1yWKss-R_90egdb8_y7RT35SqHhdNlMvGKbRmLqY=',
        title: 'Dental Care',
        description: 'Maintain your pet’s oral health with professional teeth cleaning.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/885266304/photo/performing-ovary-removal-dog-surgery.jpg?s=612x612&w=0&k=20&c=goT6WurzcCjwPCZ7tFBqG2caw99M7D4Ffk6lSzmdwsY=',
        title: 'Spaying & Neutering',
        description: 'Safe spaying and neutering services for population control and health.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/1186967247/photo/vet-checking-chip-implant-on-puppy-dog-device-close-up.jpg?s=612x612&w=0&k=20&c=iq1AmZ5wyojTMpnKJGnsM6OYkxP32zussMF1hthXp84=',
        title: 'Microchipping',
        description: 'Quick and easy microchipping to ensure your pet can be identified.',
        link:'/serviceform'
    },
    {
        img: 'https://media.istockphoto.com/id/1516357355/photo/young-veterinary-clinic-specialist-petting-an-obedient-golden-retriever-dog-healthy-pet-on-a.jpg?s=612x612&w=0&k=20&c=ginAAlkZfBSFfmWeOV0zOnrOzbf3B70lSdg1kP3_o6M=',
        title: 'Grooming Consultation',
        description: 'Consult with our vets to ensure your pet’s grooming needs are met.',
        link:'/serviceform'
    },
];

const ServiceGallery = () => {
   

    return (
        
          <>
         
                {services.map((service, index) => (
                    <ServiceCard
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

export default ServiceGallery;
