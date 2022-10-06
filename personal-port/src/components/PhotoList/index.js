import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [photos] = useState([
        {
            name: 'hobbyXchange',
            category: 'Group Project',
            description: 'A marketplace where hobby enthusiest can get togehter to sell and buy items for their hobbies.',
        },
        {
            name: 'Recipe n Drinks',
            category: 'Group Project',
            description: 'A one stop application that allows users to get the recipes for meals and different cocktails of their choice. A different way to spice up date night.',
        },
        {
            name: 'restaurantHelper',
            category: 'Group Project',
            description: 'An application that start up restaurants or food trucks can use as a point of sale application.'
        },
        {
            name: 'Robot Gladiators',
            category: 'Single Project',
            description: 'A game played from the terminal where users have the ability to fight with different robots and users are able to buy health and upgrade their robots.',
        },
        {
            name: 'Run Buddy',
            category: 'Single Project',
            description: 'A website for users that are looking for trainers to help them get back into shape.',
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index:i});
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
                )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;