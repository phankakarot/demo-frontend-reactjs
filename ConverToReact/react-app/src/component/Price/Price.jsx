/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Price = () => {

    const tabList = [
        {
            href: '#tabs-1', text: 'Spa Therapy', serviceList: [
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
            ]
        },
        {
            href: '#tabs-2', text: 'Beauty Facial', serviceList: [
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
            ]
        },
        {
            href: '#tabs-3', text: 'Body Wrap', serviceList: [
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
            ]
        },
        {
            href: '#tabs-4', text: 'Body Scrubs', serviceList: [
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
                {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                }, {
                    title: 'Swedish Massage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.',
                    price: 45
                },
            ]
        },
    ]

    const renderTabs = () => {
        return tabList?.map((item, index) => (
            <li key={`tabs-${index}`}><a href={item.href}>{item.text}</a></li>
        ))

    }

    const renderTabContent = () => {
        return tabList?.map((item, index) => (
            <div key={`tab-content-${index}`} className="tab-content clearfix" id={item.href}>
                <div className="row">
                    {item.serviceList?.map((item, index) => (
                        <div className="col-lg-6 service-wrap">
                            <div className="service-header">
                                <div className="service-name">
                                    <a href="/">{item.title}</a>
                                </div>
                                <div className="service-dots">
                                    <span className="separator-dots"></span>
                                </div>
                                <div className="service-price color">{`$${item.price}`}</div>
                            </div>
                            <p className="service-desc">{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        ))
    }

    return (
        <div id="section-price" className="section m-0 page-section bg-transparent">
            <div className="container clearfix">

                <div className="heading-block center bottommargin">
                    <h3 className="cookie-font text-capitalize color">Our Price</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut officiis eum suscipit officia modi autem fuga odio, animi minus cumque.</span>
                </div>

                <div className="tabs tabs-responsive clearfix" id="tab-1" data-accordion-style="accordion accordion-bg">

                    <ul className="tab-nav center tab-nav2 bottommargin clearfix">
                        {renderTabs()}
                    </ul>

                    <div className="tab-container">
                        {renderTabContent()}
                    </div>

                </div>
                <div className="center"><img className="img-responsive" src="demos/spa/images/others/bg-tab.jpg" alt="Image" /></div>
            </div>
        </div>
    )
}

export default Price