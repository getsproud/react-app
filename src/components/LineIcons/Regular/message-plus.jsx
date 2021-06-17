import React from 'react';

function MessagePlus(props) {
	const title = props.title || "message plus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 43.2h-5.6v-5.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5.6h-5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.6v5.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.6H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M34.4 49.2H7c-1.3 0-2.3-1-2.3-2.3v-31l23.9 14.5c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l23.9-14.5V30c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V15.7c0-3.2-2.6-5.8-5.8-5.8H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.2c0 3.2 2.6 5.8 5.8 5.8h27.4c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7zm-1.3-21.8c-.8.5-1.9.5-2.7 0l-23-13.9H56L33.1 27.4z"/>
	</g>
</svg>
	);
};

export default MessagePlus;