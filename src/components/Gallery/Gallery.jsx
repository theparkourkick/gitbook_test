import React from "react";

const gallery = ({data, ...props}) => {

    const items = data.map((item, index) =>
    <img src={item.image} alt="About" key={index}/>
    );

    return (
        <div {...props}>
            {items}
        </div>
    )
}

export default gallery;