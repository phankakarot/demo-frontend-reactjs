import React from 'react'
import About from '../../component/About/About';
import Navigation from '../../component/Navigation/Navigation';
import Price from '../../component/Price/Price';
import Service from '../../component/Service/Service';
import Slider from '../../component/Slider/Slider';
import Testimonials from '../../component/Testimonials/Testimonials';
import Contract from '../../component/Contract/Contract';

const Home = () => {
    return (
        <div className="home-page">
            <Navigation />
            <Slider />
            <section id="content">
                <div class="content-wrap pt-0">
                    <About />
                    <Service />
                    <a href="/" class="button button-full center">
                        <div class="container clearfix">
                            Book your visit online and save upto 25% Discount
                        </div>
                    </a>
                    <Price/>
                    <Testimonials/>
                    <Contract/>
                </div>
            </section>
        </div>
    )
}

export default Home