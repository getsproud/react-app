import React from 'react';

function CarAlt2(props) {
	const title = props.title || "car alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 19.9c-.5-.8-1.6-1-2.4-.5l-3.3 2.2-.7-7.9c-.4-5.2-5.2-9.3-10.8-9.3H19.5c-5.6 0-10.4 4.1-10.8 9.2L8 22l-4-2.5c-.8-.5-1.9-.3-2.4.5-.6.7-.4 1.8.4 2.4l3.6 2.4c-1.3 1.1-2.1 2.6-2.1 4.4v25.6c0 2.6 2.1 4.8 4.8 4.8h3.3c2.6 0 4.8-2.1 4.8-4.8v-5.1h32.2v5.1c0 2.6 2.1 4.8 4.8 4.8h3.3c2.6 0 4.8-2.1 4.8-4.8V29.2c0-1.9-1-3.6-2.4-4.7l3.2-2.1c.5-.6.7-1.7.2-2.5zm-4.8 26.3H45.1V39.1c0-3.1-2.5-5.6-5.6-5.6H25.3c-3.1 0-5.6 2.5-5.6 5.6v7.1H7v-17c0-1.2 1-2.3 2.3-2.3h46.1c1.2 0 2.3 1 2.3 2.3v17zm-20.9-5.1c-1 0-1.8.8-1.8 1.8v3.3h-5.3v-3.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.3H23v-7.1c0-1.2 1-2.1 2.1-2.1h14.2c1.2 0 2.1 1 2.1 2.1V46.2h-3.1v-3.3c.2-1-.6-1.8-1.5-1.8zM12.1 14c.3-3.4 3.5-6 7.3-6h25.8c3.8 0 7 2.7 7.3 6.1l.8 9.4h-42l.8-9.5zm.7 40.8c0 .7-.6 1.3-1.3 1.3H8.3C7.6 56 7 55.5 7 54.8v-5.1h5.8v5.1zm44.9 0c0 .7-.6 1.3-1.3 1.3h-3.3c-.7 0-1.3-.6-1.3-1.3v-5.1h5.8v5.1z"/>
		<path d="M13.5 36.6h-1.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M52.3 36.6H51c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.3c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default CarAlt2;