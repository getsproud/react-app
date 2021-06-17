import React from 'react';

function Pizza(props) {
	const title = props.title || "pizza";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="26.5" cy="40.3" r="2.8"/>
		<circle cx="26.5" cy="20.9" r="2.8"/>
		<circle cx="40.3" cy="34.8" r="2.8"/>
		<path d="M52.8 11.2C44.3 2.7 32.5-1.3 20.4.4l-.9.1L.1 61.2c-.3.8 0 1.6.5 2.2.4.4 1 .6 1.5.6.2 0 .4 0 .7-.1l60.6-19.4.1-.9c1.8-11.8-2.3-23.9-10.7-32.4zm-1.4 34l-30 9.6c-1-2.2-2.4-4.2-4.1-6-2.3-2.3-5.1-4-8.4-5l10.4-32.5c9-.6 17.9 2.7 24.4 9.1 7.4 7.5 8.3 17.5 7.7 24.8zM7.9 46.7c2.8.9 5.3 2.3 7.2 4.3 1.4 1.4 2.5 3 3.3 4.8l-15 4.8 4.5-13.9zm52.9-4.5l-6.3 2c.6-10.6-2.4-19.5-8.8-25.9-6.9-6.7-16.1-10.3-25.5-10l1.6-5C32.6 2 43 5.7 50.6 13.3c7.6 7.7 11.3 18.4 10.2 28.9z"/>
	</g>
</svg>
	);
};

export default Pizza;