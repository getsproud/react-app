import React from 'react';

function Heart(props) {
	const title = props.title || "heart";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 8.4C55.6 4.9 51.2 3 46.5 3s-9.1 1.9-12.4 5.4l-2.2 2.3-2.2-2.4C26.3 5 21.8 3.1 17.3 3.1 10.8 3.1 5.1 6.6 2 12.7-1.6 19.8-.2 28.9 5.4 35l23.1 24.5c.9 1 2.2 1.5 3.5 1.5 1.3 0 2.6-.6 3.5-1.6l23.4-25.1c3.3-3.5 5.1-8.1 5.1-13s-1.8-9.5-5.1-12.9zm-2.1 23.9L33.3 57.4c-.3.4-.8.6-1.3.6s-1-.2-1.3-.6L7.6 32.9C2.8 27.8 1.6 20 4.7 14 7.3 9 12 6 17.3 6c3.7 0 7.4 1.6 10.1 4.4l4.4 4.7 4.4-4.7C39 7.6 42.6 6 46.5 6c3.9 0 7.5 1.6 10.2 4.5 2.8 2.9 4.3 6.8 4.3 10.9 0 4.1-1.5 8-4.2 10.9z"/>
	</g>
</svg>
	);
};

export default Heart;