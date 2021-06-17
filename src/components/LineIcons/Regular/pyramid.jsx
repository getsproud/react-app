import React from 'react';

function Pyramid(props) {
	const title = props.title || "pyramid";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.6 46.3L37.4 10.4c-1.2-1.8-3.2-2.8-5.4-2.8-2.1 0-4.1 1.1-5.4 2.8L2.4 46.3C1 48.3.9 50.8 2 53c1.1 2.1 3.3 3.4 5.7 3.4h48.6c2.4 0 4.6-1.3 5.7-3.4 1.1-2.2 1-4.7-.4-6.7zM18.3 29.1h27.5l7.5 11.1H10.7l7.6-11.1zm11.2-16.7c.6-.8 1.5-1.3 2.5-1.3s1.9.5 2.5 1.3l8.9 13.2H20.6l8.9-13.2zm29.4 38.9c-.5 1-1.5 1.6-2.6 1.6H7.7c-1.1 0-2.1-.6-2.6-1.6s-.5-2.1.2-3l3.1-4.6h47.3l3.1 4.6c.6.9.6 2 .1 3z"/>
	</g>
</svg>
	);
};

export default Pyramid;