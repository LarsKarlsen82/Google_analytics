import React, { useState, useEffect } from 'react';

const Dogs = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!response.ok) {
          throw new Error('Failed to fetch breeds');
        }
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = async (event) => {
    const selectedBreed = event.target.value;
    setSelectedBreed(selectedBreed);
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      const data = await response.json();
      setImage(data.message);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <h1>Doggy dogs</h1>
      <h2>Select a breed:</h2>
      <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      {image && (
        <div>
          <h2>Image of {selectedBreed}:</h2>
          <img src={image} alt={selectedBreed} style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default Dogs;
