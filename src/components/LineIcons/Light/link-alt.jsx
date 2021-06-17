import React from 'react';

function LinkAlt(props) {
	const title = props.title || "link alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.6 23.6H42.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h12.9c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4H42.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h12.9c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.4-8.4-8.4z"/>
		<path d="M36.7 30.5h-9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h9.5c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M8.4 26.6h12.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H8.4C3.8 23.6 0 27.4 0 32s3.8 8.4 8.4 8.4h12.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H8.4C5.4 37.4 3 35 3 32s2.4-5.4 5.4-5.4z"/>
	</g>
</svg>
	);
};

export default LinkAlt;