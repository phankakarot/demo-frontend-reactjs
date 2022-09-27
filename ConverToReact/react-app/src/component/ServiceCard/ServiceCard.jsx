import React from 'react'

const ServiceCard = ({service}) => {
    const {category,title,desc,link,image} = service
    return (
        <div className="col-sm-6 col-md-4 text-center">
            <div className="feature-box media-box">
                <div className="fbox-media" style={{padding: "0 40px"}}>
                    <a href="/"><img className="rounded-circle img-thumbnail" src={image} alt={title} /></a>
                </div>
                <div className="fbox-content">
                    <h3>{category}.<span className="subtitle cookie-font">{title}.</span></h3>
                    <p>{desc}</p>
                    <a href={link} className="button button-rounded" style={{margin: "20px 0 0 0"}}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard