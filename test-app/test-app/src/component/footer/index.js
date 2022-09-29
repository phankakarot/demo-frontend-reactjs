import React, { useState } from 'react'

function Footer() {
    const address =[
		'795 Folsom Ave, Suite 600 San Francisco, CA 94107',
		'796 Folsom Ave, Suite 601 San Francisco, CA 94108'
	]

        return (
        <footer id="footer" class="border-0" style="background-color: #F5F5F5;">
			<div id="copyrights" class="bg-transparent">
				<div class="container clearfix">

					<div class="row">
						<div class="col-lg-3">
							<div class="widget clearfix">
								<div>
									<h5>Headquarters:</h5>
									{address.map(data =>{
										return <address class="mb-0">
												<div class="text-muted">
													<p class="mb-0">{data}</p>
												</div>
										</address>
									})}
									
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="widget clearfix">
								<div>
									<h5>Contact:</h5>
									<address class="mb-0">
										<abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br />
										<abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br />
										<abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
									</address>
								</div>
							</div>
						</div>
						<div class="col-lg-6 text-end">
							<div class="float-end topmargin-sm clearfix">
							<a href="#" class="social-icon si-small si-colored si-facebook">
								<i class="icon-facebook"></i>
								<i class="icon-facebook"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-twitter">
								<i class="icon-twitter"></i>
								<i class="icon-twitter"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-gplus">
								<i class="icon-gplus"></i>
								<i class="icon-gplus"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-pinterest">
								<i class="icon-pinterest"></i>
								<i class="icon-pinterest"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-vimeo">
								<i class="icon-vimeo"></i>
								<i class="icon-vimeo"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-github">
								<i class="icon-github"></i>
								<i class="icon-github"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-yahoo">
								<i class="icon-yahoo"></i>
								<i class="icon-yahoo"></i>
							</a>

							<a href="#" class="social-icon si-small si-colored si-linkedin">
								<i class="icon-linkedin"></i>
								<i class="icon-linkedin"></i>
							</a>
						</div>
						<div class="clear"></div>
							2021 All Rights Reserved by Canvas Inc.
						</div>
					</div>

				</div>

			</div>

		</footer>
        
    )

}

export default Footer