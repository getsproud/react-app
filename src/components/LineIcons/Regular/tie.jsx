import React from 'react';

function Tie(props) {
	const title = props.title || "tie";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.2 12.5c.2.8.9 1.4 1.7 1.4H37c.8 0 1.5-.6 1.7-1.4l1.9-9.1c.1-.5 0-1.1-.4-1.5-.2-.4-.7-.7-1.2-.7H25c-.5 0-1 .2-1.4.6-.3.4-.5.9-.4 1.5l2 9.2zm11.6-7.8l-1.2 5.6h-7.3l-1.2-5.6h9.7z"/>
		<path d="M37.1 18.1H26.9c-.9 0-1.7.7-1.7 1.6l-1.9 32.8c0 .4.1.9.4 1.2l7 8.3c.3.4.8.6 1.3.6s1-.2 1.3-.6l7-8.3c.3-.3.4-.8.4-1.2l-1.9-32.8c0-.9-.8-1.6-1.7-1.6zM32 58.3l-5.2-6.2 1.8-30.5h6.8l1.8 30.5-5.2 6.2z"/>
	</g>
</svg>
	);
};

export default Tie;