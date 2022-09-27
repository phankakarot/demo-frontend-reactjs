/* eslint-disable react/style-prop-object */

import React from 'react'
import Rating from '../Rating/Rating';

const Testimonials = () => {

    const sliderList = [{
        text: 'Globalization fairness non-partisan visionary, institutions Aga Khan resolve. Results public-private partnerships, international development elevate scalable.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating:4
    }, {
        text: 'Medicine; experience in the field climate change achieve voice public-private partnerships process our ambitions. Sanitation.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating:3.5
    },
    {
        text: 'Globalization fairness non-partisan visionary, institutions Aga Khan resolve. Results public-private partnerships, international development elevate scalable.',
        name: 'John Doe',
        location: 'New York Magazine',
        rating:4

    }]

    return (
        <section id="section-testimonials" class="section parallax mb-0 page-section dark" style="background-image: url('demos/spa/images/others/bg-testimonials.jpg'); padding: 140px 0; background-size: cover" data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
            <div class="container clearfix">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="heading-block border-bottom-0">
                            <h3>Testimonials</h3>
                        </div>

                        <div class="fslider restaurant-reviews" data-arrows="false" data-animation="slide">
                            <div class="flexslider">
                                <div class="slider-wrap">
                                    {sliderList?.map((item, index) => (
                                        <div class="slide">
                                            <p class="lead">"{item.text}"</p>
                                            <span class="font-primary"><strong>{item.name}</strong>, {item.location}</span><br />
                                            <Rating count={item.rating} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials