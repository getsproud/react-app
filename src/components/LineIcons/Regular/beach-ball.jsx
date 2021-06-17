import React from 'react';

function BeachBall(props) {
	const title = props.title || "beach ball";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58h-.4c-5.4-7.1-8.4-17-8.4-27.2 0-10.3 3.1-20.1 8.4-27.2h.8c5.4 7.1 8.4 17 8.4 27.2 0 10.3-3.1 20.1-8.4 27.2-.1-.1-.3 0-.4 0zM4.8 32C4.8 18.7 14.4 7.6 27 5.2 22.3 12.6 19.7 22 19.7 32s2.6 19.4 7.3 26.8C14.4 56.4 4.8 45.3 4.8 32zM37 58.8c4.8-7.4 7.3-16.8 7.3-26.8S41.7 12.6 37 5.2C49.6 7.6 59.3 18.7 59.3 32S49.6 56.4 37 58.8z"/>
	</g>
</svg>
	);
};

export default BeachBall;