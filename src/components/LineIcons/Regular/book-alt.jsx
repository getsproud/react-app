import React from 'react';

function BookAlt(props) {
	const title = props.title || "book alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M15.8 50.3c1-1 2.3-1.5 3.7-1.5h28.1c3.1 0 5.6-2.5 5.6-5.6V6.8c0-3.1-2.5-5.6-5.6-5.6H16.4c-3.1 0-5.6 2.5-5.6 5.6v47.7c0 .1 0 .3.1.4.5 4.4 4.2 7.8 8.7 7.8h31.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H19.6c-2.9 0-5.3-2.3-5.3-5.2 0-1.3.6-2.6 1.5-3.6zm.6-45.5h31.3c1.1 0 2.1.9 2.1 2.1v36.4c0 1.1-.9 2.1-2.1 2.1H19.6c-1.9 0-3.8.6-5.3 1.7V6.8c0-1.1.9-2 2.1-2z"/>
		<path d="M24.8 16.5h14.7c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H24.8c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default BookAlt;