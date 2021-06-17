import React from 'react';

function TruckReload(props) {
	const title = props.title || "truck reload";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 39.8L56 30.6c-.3-.5-.9-.8-1.4-.8h-9.8v-2.1c0-3.1-2.5-5.6-5.6-5.6h-7.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h7.1c1.1 0 2.1.9 2.1 2.1v25.7h-8.7c-.6-2.5-2.8-4.3-5.4-4.3s-4.8 1.8-5.4 4.3h-6.2c-1.1 0-2.1-.9-2.1-2.1V39.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v12.2c0 3.1 2.5 5.6 5.6 5.6H22c.9 1.9 2.8 3.3 5.1 3.3s4.2-1.4 5.1-3.3H46.1c.9 1.9 2.8 3.3 5.1 3.3s4.2-1.4 5.1-3.3H61c1 0 1.8-.8 1.8-1.8V40.8c0-.3-.2-.7-.4-1zm-8.7-6.4l4.4 6.3H44.8v-6.3h8.9zM27.3 56.9c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-1 2.1-2.1 2.1zm24.1 0c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-1 2.1-2.1 2.1zm5.4-3.4c-.6-2.5-2.8-4.3-5.4-4.3S46.6 51 46 53.5h-1.2V43.2h14.4v10.3h-2.4z"/>
		<path d="M25.6 19.6c0-1.5-.3-3-.8-4.5-.4-.9-1.4-1.3-2.3-1-.9.4-1.3 1.4-1 2.3.4 1 .6 2.1.6 3.2 0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7c0-4.5 3.4-8.2 7.8-8.6l-.7.7c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l3.8-3.8c.7-.7.7-1.8 0-2.5l-3.8-3.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l.8.8c-6.2.4-11.2 5.7-11.2 12.2 0 6.7 5.5 12.2 12.2 12.2s12.1-5.5 12.1-12.2z"/>
	</g>
</svg>
	);
};

export default TruckReload;