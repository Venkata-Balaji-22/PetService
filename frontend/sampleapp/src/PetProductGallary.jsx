import React from 'react';
import PetProductCard from './PetProductCard';
// PetProducts component
const PetProductGallary = () => {
    const products = [
        {
            image: 'https://media.istockphoto.com/id/172285404/photo/pet-cuisine.jpg?s=612x612&w=0&k=20&c=SGH64SXQayvzlTz5fzMLyyJWRZOpTAv66Ygzc99ftEQ=',
            name: 'Premium Dog Food',
            description: 'High-quality, nutritious dog food for all breeds.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1135379026/photo/gray-shorthair-scottish-striped-cat-scratching-a-brown-post.jpg?s=612x612&w=0&k=20&c=0pMpGuUEyFmCjOkoWhUdmd7pnoYAc8eQBS96x4yk63M=',
            name: 'Cat Scratching Post',
            description: 'Durable scratching post to keep your cat entertained.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/949234550/photo/cute-8-weeks-old-pied-french-bulldog-puppy-resting-in-her-bed.jpg?s=612x612&w=0&k=20&c=OJpKbXZYv_2efLn5smhudaXfC0qtl2dQA3P5r6YofbI=',
            name: 'Pet Bed',
            description: 'Comfortable and cozy bed for your pet’s best rest.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1407454353/photo/a-beautiful-golden-retriever-dog.jpg?s=612x612&w=0&k=20&c=eovSxrrpMEaj3KAVz8nsQLsSbLu_lR97y3BZR95uzfI=',
            name: 'Dog Leash',
            description: 'Strong and durable leash for daily walks.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1220156783/photo/domestic-cat-peeking-out-of-closed-litter-box-stock-photo.jpg?s=612x612&w=0&k=20&c=HQKATY1JPrL8XydCrzkTyjYBAl3IxzwGlsbm-5tRLkQ=',
            name: 'Cat Litter Box',
            description: 'Easy-to-clean litter box with a modern design.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/2150078707/photo/veterinarian-clinic-table-with-pet-care-supplies-and-medical-items-top-view.jpg?s=612x612&w=0&k=20&c=TrkJqxE8mwkJP_eGKEIYe5co-PNAH8eN1nJFWjjMNEY=',
            name: 'Pet Grooming Kit',
            description: 'Complete grooming kit for your pet’s hygiene needs.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1296992513/photo/cat-eating-from-automatic-feeder.jpg?s=612x612&w=0&k=20&c=tjQKe0EGv_MT0Nq57Tn72gzyBC4pfJdt3Waf4g062-o=',
            name: 'Automatic Pet Feeder',
            description: 'Set feeding times and ensure your pet never misses a meal.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/157638031/photo/woman-with-pet-carrier.jpg?s=612x612&w=0&k=20&c=oLEKv8kNRwnV34iV6sDfG78e4sxEWFpXvl61x2dLcF4=',
            name: 'Collapsible Pet Travel Carrier',
            description: 'Lightweight, easy-to-carry pet carrier for travel.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1298295808/photo/groomer-woman-neatly-handle-with-domestic-animal-dog.jpg?s=612x612&w=0&k=20&c=zjb77cs71TfKgyElLA2UYszUTD4SafHHrImavj6gNAo=',
            name: 'Pet Shampoo',
            description: 'Gentle, tear-free shampoo for dogs and cats.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1317786896/photo/dog-toys.jpg?s=612x612&w=0&k=20&c=4upExM24EoD3TQMOyTxVLv9IvLZl0uGRWF5A2wL_i2M=',
            name: 'Dog Toys Set',
            description: 'A variety of chew and play toys for dogs of all ages.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1061642872/photo/thirsty-tabby-cat-drinking-water-from-a-pet-drinking-fountain-side-view-with-copy-space.jpg?s=612x612&w=0&k=20&c=SGxH_Q7U7LczFehCgLZ-4VeAQrrJsJH9etaImfmQL0k=',
            name: 'Water Fountain for Pets',
            description: 'Ensure fresh and clean water is available for your pet at all times.',
            link:'/ProductForm'
        },
        {
            image: 'https://media.istockphoto.com/id/1360013515/photo/playful-cat.jpg?s=612x612&w=0&k=20&c=XOVQI-4Qk1XY8dHR_XWOOhThXCHdyFDaNtF0MMdCesI=',
            name: 'Catnip Toys',
            description: 'Fun and stimulating toys infused with catnip.',
            link:'/ProductForm'
        },
    ];

    return (
        <>
                {products.map((product, index) => (
                    <PetProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        link={product.link}
                    />
                ))}
                </>
          
    );
};

export default PetProductGallary;