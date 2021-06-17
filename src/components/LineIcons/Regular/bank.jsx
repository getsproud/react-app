import React from 'react';

function Bank(props) {
	const title = props.title || "bank";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.6 49.2V23.1v-.2c.9-.3 1.6-1 1.8-2 .4-1.3-.1-2.6-1.2-3.3L33.6 1.7c-1-.6-2.3-.6-3.2 0L5.8 17.6c-1.1.7-1.6 2.1-1.2 3.3.3 1 1 1.7 1.9 2v26.3c-1.6.8-2.6 2.4-2.6 4.2V58c0 2.6 2.1 4.8 4.8 4.8h46.9c2.6 0 4.8-2.1 4.8-4.8v-4.6c-.2-1.8-1.3-3.4-2.8-4.2zm-35.3-.5H9.9V23.1h12.4v25.6zm3.5-25.6h12.4v25.6H25.8V23.1zm15.9 0h12.4v25.6H41.7V23.1zM32 4.8l22.8 14.7H9.2L32 4.8zM56.7 58c0 .7-.6 1.3-1.3 1.3H8.5c-.7 0-1.3-.6-1.3-1.3v-4.6c0-.7.6-1.3 1.3-1.3h46.9c.7 0 1.3.6 1.3 1.3V58z"/>
	</g>
</svg>
	);
};

export default Bank;