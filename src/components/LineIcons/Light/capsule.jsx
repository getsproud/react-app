import React from 'react';

function Capsule(props) {
	const title = props.title || "capsule";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.1 5.9c-7.8-7.8-20.4-7.8-28.1 0L5.9 30c-7.8 7.8-7.8 20.4 0 28.1 3.8 3.8 8.8 5.8 14.1 5.8s10.3-2.1 14.1-5.8l24-24.1c3.8-3.8 5.8-8.8 5.8-14.1s-2-10.3-5.8-14zM31.9 56c-3.2 3.2-7.4 4.9-11.9 4.9S11.2 59.2 8 56c-6.6-6.6-6.6-17.3 0-23.9l11-11L42.9 45l-11 11zM56 31.9l-11 11L21.1 19l11-11C38.7 1.4 49.4 1.4 56 8c3.2 3.2 4.9 7.4 4.9 11.9s-1.7 8.8-4.9 12z"/>
	</g>
</svg>
	);
};

export default Capsule;