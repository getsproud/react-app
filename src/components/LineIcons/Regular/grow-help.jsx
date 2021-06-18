import React from 'react';

function GrowHelp(props) {
	const title = props.title || "grow help";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 47.2c-1.2-3.8-5-6-8.7-5-3.5 1-8.3 2.5-11.8 3.5.5-1.4.3-2.5 0-3.3-.9-2.1-3.2-3.1-5.2-3.1h-9.7c-.9 0-1.8-.4-2.7-1.2-1-.9-2.3-1.4-3.6-1.4H9.3c-3.3 0-5.9 2.8-5.9 6.1v12.4c0 3.5 2.7 6.3 6 6.3h9.4c1.2 0 2.3-.4 3.4-1.1l.2.1c2.7 1.5 5.7 2.3 8.8 2.3 1.9 0 3.7-.3 5.4-.8L54 56.7h.1c5-2 5.7-6.3 4.8-9.5zM9.5 57.9c-1.4 0-2.5-1.2-2.5-2.8V42.8c0-1.5 1.1-2.6 2.4-2.6h7.8c.6 0 1 .3 1.3.5.3.3.7.6 1 .8v16.4c-.2.1-.4.1-.6.1H9.5zM53 53.3l-17.4 5.3c-1.4.4-2.8.7-4.4.7-2.5 0-5-.6-7.2-1.9l-1.2-.6v-14H33.1c.9 0 1.8.4 2 .9.2.5-.2 1.8-2.2 3.7-.6.6-.7 1.4-.3 2.1.7 1.3.7 1.3 10.3-1.5l8.2-2.4c1.8-.5 3.8.6 4.4 2.6.5 1.4.6 3.9-2.5 5.1z"/>
		<path d="M44 32.4v2.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29 17.8c2.9 0 6.2-1.5 8.8-4.2 3.3-3.3 4.9-7.6 4-10.9-.2-.6-.6-1-1.2-1.2-3.3-.9-7.5.6-10.9 4-2.8 2.8-4.3 6.2-4.2 9.2V21c-.2-.3-.5-.5-.7-.8-3.3-3.3-7.6-4.9-10.9-4-.6.2-1 .6-1.2 1.2-.9 3.3.6 7.5 4 10.9 2.5 2.6 5.8 4.1 8.7 4.1zm6.7-24.5c2.2-2.2 4.7-3.2 6.4-3.2 0 1.7-1 4.1-3.2 6.4-2.2 2.2-4.6 3.2-6.4 3.2 0-1.7.9-4.1 3.2-6.4zm-9.9 14.7C43 24.8 44 27.2 44 29c-1.7 0-4.1-1-6.4-3.2-2.2-2.2-3.2-4.7-3.2-6.4 1.8 0 4.2.9 6.4 3.2z"/>
	</g>
</svg>
	);
};

export default GrowHelp;