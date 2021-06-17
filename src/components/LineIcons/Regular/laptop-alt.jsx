import React from 'react';

function LaptopAlt(props) {
	const title = props.title || "laptop alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 41.8h-3.4V15.3c0-4.1-3.3-7.4-7.4-7.4H13.8c-4.1 0-7.4 3.3-7.4 7.4v26.5H3c-1 0-1.8.8-1.8 1.8V48c0 4.5 3.7 8.2 8.2 8.2h45.2c4.5 0 8.2-3.7 8.2-8.2v-4.4c0-1.1-.8-1.8-1.8-1.8zM9.9 15.3c0-2.1 1.7-3.9 3.9-3.9h36.4c2.1 0 3.9 1.7 3.9 3.9v26.5H9.9V15.3zM59.3 48c0 2.6-2.1 4.7-4.7 4.7H9.4c-2.6 0-4.7-2.1-4.7-4.7v-2.7h54.5V48z"/>
		<path d="M34 15.9h-4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LaptopAlt;