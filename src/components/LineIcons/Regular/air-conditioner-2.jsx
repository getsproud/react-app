import React from 'react';

function AirConditioner2(props) {
	const title = props.title || "air conditioner 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 17H6c-2.6 0-4.8 2.1-4.8 4.8v20.6C1.3 44.9 3.4 47 6 47h52c2.6 0 4.8-2.1 4.8-4.8V21.7c0-2.6-2.2-4.7-4.8-4.7zM6 20.5h52c.7 0 1.3.6 1.3 1.3V34H4.8V21.7c0-.7.5-1.2 1.2-1.2zm24.3 16.9v6.1h-11v-6.1h11zm3.5 0h11v6.1h-11v-6.1zm-29 4.9v-4.9h11v6.1H6c-.7 0-1.2-.5-1.2-1.2zM58 43.5h-9.8v-6.1h11v4.9c.1.7-.5 1.2-1.2 1.2z"/>
		<path d="M45.7 28.9h6.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default AirConditioner2;