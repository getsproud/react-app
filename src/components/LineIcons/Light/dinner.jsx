import React from 'react';

function Dinner(props) {
	const title = props.title || "dinner";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path className="st0" d="M46 1.5h-3.5c-.8 0-1.5.7-1.5 1.5v56.5c0 1.6 1.4 3 3 3h3.1c1.6 0 3-1.4 3-3V35.3h4.1c.8 0 1.5-.7 1.5-1.5V11.2c-.1-5.3-4.5-9.7-9.7-9.7z" fill="none" stroke="#000000" strokeWidth="3"/>
		<path className="st0" d="M13.5 29.5v30c0 1.6 1.4 3 3 3h2.9c1.6 0 3-1.4 3-3v-30" fill="none" stroke="#000000" strokeWidth="3"/>
		<path className="st1" d="M18 3.2v15.6" fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="3"/>
		<path className="st1" d="M27.5 3.2v25.4c0 .5-.3.9-.9.9H9.2c-.5 0-.9-.3-.9-.9V3.2" fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="3"/>
		<path className="st0" d="M8.4 19.6h19.1" fill="none" stroke="#000000" strokeWidth="3"/>
		<path className="st0" d="M50.1 35.3H41" fill="none" stroke="#000000" strokeWidth="3"/>
	</g>
</svg>
	);
};

export default Dinner;