import React from 'react';

function Information(props) {
	const title = props.title || "information";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.2 61h-6.7V13.6c0-2.3-1.9-4.2-4.2-4.2h-5.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.4c.7 0 1.2.5 1.2 1.2V61h-6.7c-.8 0-1.5.7-1.5 1.5S23 64 23.8 64h16.3c.8 0 1.5-.7 1.5-1.5S41 61 40.2 61z"/>
		<circle cx="32" cy="2.7" r="2.7"/>
	</g>
</svg>
	);
};

export default Information;