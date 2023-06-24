import React, { createContext, useState } from 'react'
import axios from 'axios'
import {apiKey} from '../api/config'
export const PhotoContext = createContext();

const PhotoContextProvider = props => {

    const [images, setImages] = useState([]);   //เก็บรูปที่ search ได้เป็น array
    const [loading, setLoading] = useState(true);

    const runSearch = query => {
        //รับค่าจาก input มา search
        axios
        .get(
            `https://api.unsplash.com/search/photos/?page=1?&query=${query}&client_id=${apiKey}&per_page=20`
        )
        .then(response => {
            setImages(response.data.results);
            // console.log(images);
            setLoading(false);
            console.log(response.data);
        })
        .catch(error => {
            console.log(
                "Encontered an error with fetching and parsing data"
            )
        })
    }

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
        {/* ^ ส่ง context */}
        {props.children}
    </PhotoContext.Provider>
  )
}

export default PhotoContextProvider