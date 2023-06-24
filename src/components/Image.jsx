import React from 'react'

const Image = ({ url, desc, id }) => (
    <li kery={id}>
        <a href={url} target='_blank'><img src={url} alt={desc} /></a>
    </li>
)

export default Image