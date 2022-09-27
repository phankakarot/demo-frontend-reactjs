/* eslint-disable react/style-prop-object */

import React from 'react'
import Rating from '../Rating/Rating';

const Testimonials = () => {

    const sliderList = [{
        text: 'Globalization fairness non-partisan visionary, institutions Aga Khan resolve. Results public-private partnerships, international development elevate scalable.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating: 4
    }, {
        text: 'Medicine; experience in the field climate change achieve voice public-private partnerships process our ambitions. Sanitation.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating: 3.5
    },
    {
        text: 'Globalization fairness non-partisan visionary, institutions Aga Khan resolve. Results public-private partnerships, international development elevate scalable.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating: 4

    }]

    return (
        <div id="section-testimonials" className="section parallax mb-0 page-section dark" style={{backgroundImage: "url('demos/spa/images/others/bg-testimonials.jpg')",padding: "140px 0", backgroundSize: "cover"}}>
            <div className="container clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading-block border-bottom-0">
                            <h3>Testimonials</h3>
                        </div>

                        <div className="fslider restaurant-reviews" data-arrows="false" data-animation="slide">
                            <div className="flexslider">
                                <div className="slider-wrap">
                                    {sliderList?.map((item, index) => {
                                        return <div className="slide">
                                            <p className="lead">"{item.text}"</p>
                                            <span className="font-primary"><strong>{item.name}</strong>, {item.location}</span><br />
                                            <Rating count={item.rating} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials