import React from 'react'

const ServiceCard = ({category,title,desc,link,image}) => {
    return (
        <div class="col-sm-6 col-md-4 text-center">
            <div class="feature-box media-box">
                <div class="fbox-media" style="padding: 0 40px;">
                    <a href="/"><img class="rounded-circle img-thumbnail" src={image} alt={title} /></a>
                </div>
                <div class="fbox-content">
                    <h3>{category}.<span class="subtitle cookie-font">{title}.</span></h3>
                    <p>{desc}</p>
                    <a href={link} class="button button-rounded" style="margin: 20px 0 0 0;">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard