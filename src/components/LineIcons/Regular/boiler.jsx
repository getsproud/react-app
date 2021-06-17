import React from 'react';

function Boiler(props) {
	const title = props.title || "boiler";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 7.9C41.3-.9 22.6-.9 7.6 7.9c-.6.3-.9.9-.9 1.5v47.5c0 3.2 2.6 5.9 5.9 5.9h38.8c3.2 0 5.9-2.6 5.9-5.9V9.4c0-.6-.3-1.2-.9-1.5zM39 49.6H25v-6.1h14v6.1zm-14 3.5h14v6.1H25v-6.1zm28.8 3.8c0 1.3-1.1 2.4-2.4 2.4h-8.9V35.2c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8V40H25v-4.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v24.1h-8.9c-1.3 0-2.4-1.1-2.4-2.4V10.4c13.5-7.5 30-7.5 43.6 0v46.5z"/>
	</g>
</svg>
	);
};

export default Boiler;