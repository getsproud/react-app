import React from 'react';

function EmpireStateBuilding(props) {
	const title = props.title || "empire state building";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 59.3h-8.7V39.6c0-2.6-2.1-4.8-4.8-4.8h-3.2v-9.7c0-3-2.3-5.4-5.2-5.7v-1.6c0-2.5-1.6-4.5-3.7-5.4V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v9.3c-2.5.6-4.4 2.9-4.4 5.6v1.6c-2.9.2-5.2 2.7-5.2 5.7v9.7h-3.2c-2.6 0-4.8 2.1-4.8 4.8v19.7h-8c-1 0-1.8.8-1.8 1.8S3.6 63 4.6 63h54.9c1 0 1.8-.8 1.8-1.8s-.9-1.9-1.9-1.9zM31.6 15.6h.2c1.2 0 2.2 1 2.2 2.2v1.6h-4.6v-1.6c-.1-1.2.9-2.2 2.2-2.2zm-5.3 7.3H37c1.2 0 2.2 1 2.2 2.2V35c-2.1.5-3.6 2.4-3.6 4.6v19.7h-7.9V39.6c0-2.2-1.5-4.1-3.6-4.6v-9.9c0-1.2 1-2.2 2.2-2.2zM16.1 39.6c0-.7.6-1.3 1.3-1.3H23c.7 0 1.3.6 1.3 1.3v19.7h-8V39.6zM41 59.3c0-.1 0-.1 0 0h-1.9V39.6c0-.7.6-1.3 1.3-1.3H46c.7 0 1.3.6 1.3 1.3v19.7H41z"/>
	</g>
</svg>
	);
};

export default EmpireStateBuilding;