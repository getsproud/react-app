import React from 'react';

function PullUp(props) {
	const title = props.title || "pull up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 56.4h-5.5V5.8c0-1-.8-1.8-1.8-1.8S52 4.9 52 5.8v9.4H12V5.8c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.8v50.6H3c-1 0-1.8.8-1.8 1.8S2 59.9 3 59.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-49 0V18.8h40v37.6H12z"/>
	</g>
</svg>
	);
};

export default PullUp;