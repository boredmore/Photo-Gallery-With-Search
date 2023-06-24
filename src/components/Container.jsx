import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Gallery from './Gallery'

const Container = ({ searchTerm }) => {

    const { images, loading, runSearch } = useContext(PhotoContext);    //รับ Context จาก PhotoContext

    useEffect(() => {
        runSearch(searchTerm);
    }, [searchTerm]);

    // console.log(searchTerm);

  return (
    <div className='photo-container'>
        <Gallery data={images} />
    </div>
  )
}

export default Container