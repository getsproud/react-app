import React from 'react';

function FlightSearch(props) {
	const title = props.title || "flight search";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30.7 18.1l-7.2-1.9v-2.8c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.9v2.8l-7.2 1.9c-.9.2-1.5 1.2-1.3 2.1.2.8.9 1.3 1.7 1.3.1 0 .3 0 .4-.1l6.4-1.6v6.8l-3.5.8c-.9.2-1.5 1.1-1.3 2.1.2.8.9 1.4 1.7 1.4h.4l4.5-1 4.5 1h.4c.8 0 1.5-.6 1.7-1.4.2-.9-.4-1.9-1.3-2.1l-3.5-.8v-6.8l6.4 1.6c.1 0 .3.1.4.1.8 0 1.5-.5 1.7-1.3.1-1-.5-1.9-1.4-2.2z"/>
		<path d="M61 51.4L48.8 39.2c-1.1-1.1-2.6-1.7-4.2-1.7-1.3 0-2.5.4-3.5 1.2l-3.8-3.8c6.8-8 6.4-20.1-1.2-27.6-3.9-3.9-9-6-14.5-6S11 3.4 7.1 7.3c-3.9 3.9-6 9-6 14.5s2.1 10.6 6 14.5c4 4 9.2 6 14.5 6 4.7 0 9.4-1.6 13.2-4.8l3.8 3.8c-.8 1-1.2 2.2-1.2 3.5 0 1.6.6 3.1 1.7 4.2l12.3 12c1.1 1.1 2.6 1.7 4.2 1.7s3.1-.6 4.2-1.7l1.2-1.2c1.1-1.1 1.7-2.6 1.7-4.2s-.6-3.1-1.7-4.2zM9.7 33.7c-3.2-3.2-5-7.5-5-12s1.8-8.8 5-12 7.5-5 12-5 8.8 1.8 12 5c6.6 6.6 6.6 17.4 0 24-6.6 6.6-17.4 6.6-24 0zm48.8 23.6l-1.2 1.2c-.9.9-2.5.9-3.4 0L41.7 46.4c-.5-.5-.7-1.1-.7-1.7 0-.6.3-1.3.7-1.7l1.2-1.2c.5-.5 1.1-.7 1.7-.7.6 0 1.3.3 1.7.7L58.5 54c.5.5.7 1.1.7 1.7.1.5-.2 1.1-.7 1.6z"/>
	</g>
</svg>
	);
};

export default FlightSearch;