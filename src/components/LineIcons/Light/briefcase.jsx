import React from 'react';

function Briefcase(props) {
	const title = props.title || "briefcase";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 16.6H44.4c-.8-4.7-5.4-8.3-10.9-8.3h-3.1c-5.5 0-10 3.6-10.9 8.3h-17c-1.4 0-2.5 1.1-2.5 2.6v33.9c0 1.4 1.1 2.6 2.5 2.6h59c1.4 0 2.5-1.2 2.5-2.6V19.2c0-1.4-1.1-2.6-2.5-2.6zm-31.1-5.3h3.1c3.8 0 7 2.3 7.8 5.3H22.6c.8-3 4-5.3 7.8-5.3zM61 52.7H3V33.6l29.1 5.5c.4.1.9.1 1.3.1s.9 0 1.3-.1L61 34.2v18.5zm0-21.6l-26.8 5c-.5.1-1 .1-1.5 0L3 30.5V19.6h58v11.5z"/>
	</g>
</svg>
	);
};

export default Briefcase;