import React from 'react';

function SmartHomeControl(props) {
	const title = props.title || "smart home control";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.3 12h1.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M34.2 52h-4.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.3c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M46.5 1.3h-29c-2.6 0-4.8 2.1-4.8 4.8v52c0 2.6 2.1 4.8 4.8 4.8h29c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.2-4.7-4.8-4.7zM47.7 58c0 .7-.6 1.3-1.3 1.3h-29c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h29c.7 0 1.3.6 1.3 1.3v52z"/>
		<path d="M41.7 30.9L33 24.3c-.6-.5-1.5-.5-2.1 0l-8.7 6.6c-.8.6-.9 1.7-.3 2.5.6.8 1.7.9 2.5.3l1.1-.8v5.4c0 1 .8 1.8 1.8 1.8h9.6c1 0 1.8-.8 1.8-1.8v-5.4l1.1.8c.3.2.7.4 1.1.4.5 0 1-.2 1.4-.7.4-.8.2-1.9-.6-2.5zM35 36.6h-6v-6.4l3-2.3 3 2.3v6.4z"/>
	</g>
</svg>
	);
};

export default SmartHomeControl;