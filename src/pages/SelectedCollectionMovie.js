import React, { useContext, useEffect, useState } from 'react';
import { CollectionMovieContext } from '../context/CollectionMovieContext.js';

const SelectedCollectionMovie = () => {

    const collectionMovieDetails = useContext(CollectionMovieContext);

    const [selectedCollectionMovieIcons, setSelectedCollectionMovieIcons] = useState([])

    useEffect (() => {

      fetch("http://localhost:4000/group/:groupcollection")
            .then(data => data.json())
            .then(parsedData => {
              setSelectedCollectionMovieIcons(parsedData);
            })
    })

  return (
    <div>
        selectedCollectionMovie
    </div>
  )
}

export default SelectedCollectionMovie;