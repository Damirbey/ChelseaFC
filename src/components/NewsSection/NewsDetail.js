import React from 'react';

function NewsDetail(props){
    const productID = props.match.params.id;
    return (
            <h1>{productID}</h1>
    )
}

export default NewsDetail;