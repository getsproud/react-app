import React from 'react';

function NoChargeBattery(props) {
	const title = props.title || "no charge battery";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 24.3h-2.9v-4.8c0-2.5-2.1-4.6-4.6-4.6h-27v3h27c.9 0 1.6.7 1.6 1.6v24.8c0 .9-.7 1.6-1.6 1.6h-9v3h9c2.5 0 4.6-2.1 4.6-4.6v-4.8h2.9c2.5 0 4.5-2 4.5-4.5v-6.1c0-2.6-2-4.6-4.5-4.6zm1.5 10.6c0 .8-.7 1.5-1.5 1.5h-2.9v-9.2h2.9c.8 0 1.5.7 1.5 1.5v6.2z"/>
		<path d="M12 3.9c-.4-.7-1.3-1-2-.6s-1 1.3-.6 2l5.4 9.6H4.6C2.1 14.9 0 17 0 19.5v24.7c0 2.5 2.1 4.6 4.6 4.6H34l6.4 11.3c.3.5.8.8 1.3.8.3 0 .5-.1.7-.2.7-.4 1-1.3.6-2L12 3.9zM4.6 45.8c-.9 0-1.6-.7-1.6-1.6V19.5c0-.9.7-1.6 1.6-1.6h11.8l15.8 27.9H4.6z"/>
	</g>
</svg>
	);
};

export default NoChargeBattery;