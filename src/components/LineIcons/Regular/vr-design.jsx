import React from 'react';

function VrDesign(props) {
	const title = props.title || "vr design";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.2 38.1V24.7c0-1.8-1.1-3.5-2.8-4.3L34 15.6c-1.3-.6-2.7-.6-4 0l-10.5 4.9c-1.7.8-2.8 2.5-2.8 4.3v13.4c0 1.7.9 3.3 2.4 4.1l10.5 6c.7.4 1.6.6 2.4.6s1.6-.2 2.4-.6l10.5-6c1.4-.9 2.3-2.5 2.3-4.2zM31.5 18.7c.2-.1.3-.1.5-.1s.4 0 .5.1l8.8 4.1-9.3 4.3-9.4-4.3 8.9-4.1zM20.9 39.2c-.4-.2-.6-.6-.6-1.1V25.6l10 4.6v14.4l-9.4-5.4zm22.2 0l-9.3 5.4V30.2l10-4.6v12.6c-.1.4-.3.8-.7 1z"/>
		<path d="M4.4 18.8c1 0 1.8-.8 1.8-1.8V7.2c0-1.3 1.1-2.4 2.4-2.4h10c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-10c-3.2 0-5.9 2.6-5.9 5.9V17c-.1 1 .7 1.8 1.7 1.8z"/>
		<path d="M59.6 45.2c-1 0-1.8.8-1.8 1.8v9.9c0 1.3-1.1 2.4-2.4 2.4h-10c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10c3.2 0 5.9-2.6 5.9-5.9v-9.9c.1-1.1-.7-1.9-1.7-1.9z"/>
		<path d="M45.6 4.8h9.9c1.3 0 2.4 1.1 2.4 2.4v10c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-10c0-3.2-2.6-5.9-5.9-5.9h-9.9c-1 0-1.8.8-1.8 1.8s.7 1.7 1.7 1.7z"/>
		<path d="M18.4 59.3H8.5c-1.3 0-2.4-1.1-2.4-2.4v-10c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10c0 3.2 2.6 5.9 5.9 5.9h9.9c1 0 1.8-.8 1.8-1.8s-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default VrDesign;