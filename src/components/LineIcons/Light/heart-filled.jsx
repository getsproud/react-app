import React from 'react';

function HeartFilled(props) {
	const title = props.title || "heart filled";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.1 8.9c-6.5-6.5-17.2-6.5-23.7 0l-3.5 3.5-3.5-3.5c-3.3-3.2-7.5-4.8-11.8-4.8S8.1 5.6 4.9 8.9c-6.5 6.5-6.5 17.3 0 23.8L32 60l27.1-27.4c3.3-3.3 4.9-7.5 4.9-11.8s-1.7-8.7-4.9-11.9z"/>
	</g>
</svg>
	);
};

export default HeartFilled;