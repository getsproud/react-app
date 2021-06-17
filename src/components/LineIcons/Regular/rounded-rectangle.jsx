import React from 'react';

function RoundedRectangle(props) {
	const title = props.title || "rounded rectangle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53 54.1H11c-5.4 0-9.8-4.4-9.8-9.8V19.6c0-5.4 4.4-9.7 9.8-9.7h42c5.4 0 9.8 4.4 9.8 9.7v24.8c0 5.4-4.4 9.7-9.8 9.7zM11 13.4c-3.4 0-6.3 2.8-6.3 6.2v24.8c0 3.4 2.8 6.3 6.3 6.3h42c3.4 0 6.3-2.8 6.3-6.3V19.6c0-3.4-2.8-6.2-6.3-6.2H11z"/>
	</g>
</svg>
	);
};

export default RoundedRectangle;