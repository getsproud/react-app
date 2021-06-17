import React from 'react';

function PushRight(props) {
	const title = props.title || "push right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.8 18.4c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l7.5 9H3c-1 0-1.8.8-1.8 1.8S2 33.2 3 33.2h43.6l-7.5 9c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l7.7-9.2c1.9-2.2 1.9-5.4 0-7.6l-7.6-9.3z"/>
		<path d="M61 17.2c-1 0-1.8.8-1.8 1.8v26.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V18.9c0-1-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default PushRight;