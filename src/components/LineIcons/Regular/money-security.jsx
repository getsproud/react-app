import React from 'react';

function MoneySecurity(props) {
	const title = props.title || "money security";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.1 27.8h4.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.1v-.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v.3c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h2.1c.4 0 .7.3.7.7s-.3.7-.7.7h-4.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H35v.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.6c1.6-.6 2.8-2.1 2.8-3.9 0-2.3-1.9-4.2-4.2-4.2h-2.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7z"/>
		<path d="M41.1 44.1H16.2c-1 0-1.8-.8-1.8-1.8V19.5c0-1 .8-1.8 1.8-1.8h40c1 0 1.8.8 1.8 1.8v13.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V19.5c0-2.9-2.4-5.3-5.3-5.3h-4.2v-1.8c0-2.9-2.4-5.3-5.3-5.3h-40c-2.9 0-5.3 2.4-5.3 5.3v22.8c0 2.9 2.4 5.3 5.3 5.3H11v1.8c0 2.9 2.4 5.3 5.3 5.3h24.9c1 0 1.8-.8 1.8-1.8s-1-1.7-1.9-1.7zM6.6 37c-1 0-1.8-.8-1.8-1.8V12.3c0-1 .8-1.8 1.8-1.8h40c1 0 1.8.8 1.8 1.8v1.8H16.2c-2.9 0-5.3 2.4-5.3 5.3V37H6.6z"/>
		<path d="M61 45.7h-1.1v-2.2c0-3.1-2.5-5.6-5.6-5.6s-5.6 2.5-5.6 5.6v2.2h-1.2c-1 0-1.8.8-1.8 1.8v7.9c0 1 .8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8v-7.9c-.1-1.1-.8-1.8-1.8-1.8zm-8.8-2.2c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1v2.2h-4.2v-2.2zm7 10h-10v-4.4h10v4.4z"/>
	</g>
</svg>
	);
};

export default MoneySecurity;