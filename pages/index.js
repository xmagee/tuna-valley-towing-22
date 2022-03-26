import Head from 'next/head'

export default function Home() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<Head>
				<title>Tuna Valley Towing & Recovery, LLC</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<header className="w3-container w3-theme w3-padding" id="myHeader">
				<div className="w3-center">
					<h1 className="w3-xxxlarge w3-animate-bottom">Tuna Valley Towing</h1>
					<h6>TOWING | RECOVERY | LOCKOUTS | JUMPSTARTS</h6>
					<p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(814) 331-9454</p>
					<div className="w3-padding-32">
						<a href="tel:8143319454" style={{ fontWeight: 900 }}
							className="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey">
							CALL NOW! <i class="fa fa-mobile" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</header>

			<div className="w3-row-padding w3-center w3-margin-top">
				<div className="w3-third">
					<div className="w3-card w3-container" style={{ minHeight: 460 }}>
						<h3>Medium Duty Towing</h3><br />
						<i className="fa fa-car w3-margin-bottom w3-text-theme" style={{ fontSize: 120 }}></i>
						<p>Flatbed and wrecker available</p>
						<p>24/7 towing.</p>
						<p>Covering Bradford, PA,</p>
						<p>and surrounding areas.</p>
					</div>
				</div>

				<div className="w3-third">
					<div className="w3-card w3-container" style={{ minHeight: 460 }}>
						<h3>Lockouts</h3><br />
						<i className="fa fa-unlock w3-margin-bottom w3-text-theme" style={{ fontSize: 120 }}></i>
						<p>Keys locked in car?</p>
						<p>24/7 Unlocks</p>
						<p>Covering Bradford, PA,</p>
						<p>and surrounding areas.</p>
					</div>
				</div>

				<div className="w3-third">
					<div className="w3-card w3-container" style={{ minHeight: 460 }}>
						<h3>Jump Starts</h3><br />
						<i className="fa fa-bolt w3-margin-bottom w3-text-theme" style={{ fontSize: 120 }}></i>
						<p>Dead battery?</p>
						<p>24/7 jumpstarts</p>
						<p>Covering Bradford, PA,</p>
						<p>and surrounding areas.</p>
					</div>
				</div>
			</div>

			<hr />

			<div className="w3-center">
				<h2>Locations</h2>
				<p>Find us on a map!</p>
			</div>

			<div className="w3-row-padding">

			<div className="w3-half">
					<div className="w3-card white">
						<div className="w3-container w3-theme">
							<h3>Main Office</h3>
						</div>
						<ul className="w3-ul w3-border-top">
							<li>
								<h3>164 E. Main St.</h3>
								<p>Bradford, PA</p>
							</li>
							<li style={{ textAlign: 'center' }}>
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.888926258478!2d-78.63915888442459!3d41.95972076828111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cd8038fe233d7d%3A0x4f7f4fee8c0be27d!2s164%20E%20Main%20St%2C%20Bradford%2C%20PA%2016701!5e0!3m2!1sen!2sus!4v1648322458215!5m2!1sen!2sus" 
									width={600} height={450} style={{ border: 0 }} allowfullscreen={false} loading="lazy" 
									referrerpolicy="no-referrer-when-downgrade" />
							</li>
						</ul>
						<div className="w3-container w3-theme w3-large"><span className="w3-right">&nbsp;</span></div>
					</div>
				</div>

				<div className="w3-half">
					<div className="w3-card white">
						<div className="w3-container w3-theme">
							<h3>Storage Lot</h3>
						</div>
						<ul className="w3-ul w3-border-top">
							<li>
								<h3>156 Seward Ave.</h3>
								<p>Bradford, PA</p>
							</li>
							<li style={{ textAlign: 'center' }}>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1183.018049114121!2d-78.62999888808889!3d41.974848714999595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cd806ddc8cb3f9%3A0x1cb45e73dc8c57fc!2s156%20Seaward%20Ave%2C%20Bradford%2C%20PA%2016701!5e0!3m2!1sen!2sus!4v1648322880290!5m2!1sen!2sus" 
								width={600} height={450} style={{ border: 0 }} allowfullscreen={false} 
								loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
							</li>
						</ul>
						<div className="w3-container w3-theme w3-large"><span className="w3-right">&nbsp;</span></div>
					</div>
				</div>
			</div>

			<hr />

			<footer className="w3-container w3-theme-dark w3-padding-16">
				<h3>&copy; Tuna Valley Towing & Recovery LLC, {currentYear}</h3>
				<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
				<div style={{ position: 'relative', bottom: 55 }} className="w3-tooltip w3-right">
					<span className="w3-text w3-theme-light w3-padding">Go To Top</span>
					<a className="w3-text-white" href="#myHeader"><span className="w3-xlarge">
						<i className="fa fa-chevron-circle-up"></i></span></a>
				</div>
			</footer>
		</>
	)
}
