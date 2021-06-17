import React from 'react';

function HouseAlt7(props) {
	const title = props.title || "house alt 7";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 55.6h-2.1V25.4c0-1.9-.9-3.6-2.4-4.7L35.3 5.9c-2-1.4-4.6-1.4-6.6 0L7.6 20.7c-1.5 1.1-2.4 2.8-2.4 4.7v30.2H3c-1 0-1.8.8-1.8 1.8S2 59.1 3 59.1h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM30.7 8.8c.8-.5 1.8-.5 2.5 0L53 22.7H10.9L30.7 8.8zM8.6 55.6V26.1h46.7v29.5H8.6z"/>
	</g>
</svg>
	);
};

export default HouseAlt7;