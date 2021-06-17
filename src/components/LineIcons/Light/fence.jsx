import React from 'react';

function Fence(props) {
	const title = props.title || "fence";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 10.7H51c-1.7 0-3 1.3-3 3v11.5h-8V13.7c0-1.7-1.3-3-3-3H27c-1.7 0-3 1.3-3 3v11.5h-8V13.7c0-1.7-1.3-3-3-3H3c-1.7 0-3 1.3-3 3v36.7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V38.8h8v11.5c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V38.8h8v11.5c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V13.7c0-1.7-1.3-3-3-3zM13 50.3H3V13.7h10v36.6zm3-14.5v-7.7h8v7.7h-8zm21 14.5H27V13.7h10v36.6zm3-14.5v-7.7h8v7.7h-8zm21 14.5H51V13.7h10v36.6z"/>
	</g>
</svg>
	);
};

export default Fence;