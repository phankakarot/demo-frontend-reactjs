/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const About = () => {

	const featureList = [{
		link: '/',
		icon: 'spa-sandals',
		title: 'Shower Services',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas omnis nam molestias minus ipsa, placeat!'
	}, {
		link: '/',
		icon: 'spa-sandals',
		title: 'Shower Services',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas omnis nam molestias minus ipsa, placeat!'
	}, {
		link: '/',
		icon: 'spa-sandals',
		title: 'Shower Services',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas omnis nam molestias minus ipsa, placeat!'
	}]

	return (
		<div id="section-about" className="section page-section m-0">

			<div className="container clearfix">

				<div className="row">
					<div className="col-lg-6">
						<div className="heading-block border-bottom-0 bottommargin-sm">
							<h3 className="cookie-font text-capitalize color">About Us</h3>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, libero voluptas iusto quo illum quam possimus provident, deserunt est minima quisquam amet magnam animi? Enim adipisci facilis voluptas odit! Facilis rerum ipsam modi perspiciatis exercitationem explicabo, tempore soluta culpa cupiditate!</p>
					</div>
					<div className="col-lg-6">
						<img className="bottommargin-lg mx-auto img-fluid" src="demos/spa/images/others/1.png" alt="Image" />
					</div>
				</div>
				<div className="row">
					{featureList?.map((item, index) => (
						<div className="col-lg-4 bottommargin">
							<div className="feature-box fbox-plain" data-animate="fadeIn">
								<div className="fbox-icon">
									<a href={item.link}><i className={item.icon}></i></a>
								</div>
								<div className="fbox-content">
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default About