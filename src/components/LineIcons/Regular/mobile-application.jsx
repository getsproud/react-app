import React from 'react';

function MobileApplication(props) {
	const title = props.title || "mobile application";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.4 1.3H20.6c-4.4 0-8 3.6-8 8v45.5c0 4.4 3.6 8 8 8h22.7c4.4 0 8-3.6 8-8V9.3c.1-4.5-3.5-8-7.9-8zM20.6 4.8h22.7c2.5 0 4.5 2 4.5 4.5v40.3H16.1V9.3c0-2.5 2-4.5 4.5-4.5zm22.8 54.5H20.6c-2.5 0-4.5-2-4.5-4.5v-1.7h31.8v1.7c0 2.4-2 4.5-4.5 4.5z"/>
		<path d="M22.2 26.8H32c1 0 1.8-.8 1.8-1.8v-9.7c0-1-.8-1.8-1.8-1.8h-9.7c-1 0-1.8.8-1.8 1.8V25c0 1 .8 1.8 1.7 1.8zm1.8-9.7h6.2v6.2H24v-6.2z"/>
		<path d="M22.2 44.9H32c1 0 1.8-.8 1.8-1.8v-9.7c0-1-.8-1.8-1.8-1.8h-9.7c-1 0-1.8.8-1.8 1.8v9.7c0 1 .8 1.8 1.7 1.8zm1.8-9.8h6.2v6.2H24v-6.2z"/>
		<path d="M41 26.8h1.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.1V17h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H41c-1 0-1.8.8-1.8 1.8v9.7c.1 1.1.9 1.9 1.8 1.9z"/>
		<path d="M41 44.9h1.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.1v-6.2h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H41c-1 0-1.8.8-1.8 1.8V43c.1 1.1.9 1.9 1.8 1.9z"/>
	</g>
</svg>
	);
};

export default MobileApplication;