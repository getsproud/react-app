import React from 'react';

function SalineAlt(props) {
	const title = props.title || "saline alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.5 8.3H33.8V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v5.3H18.5c-2.1 0-3.8 1.7-3.8 3.8v24.6c0 6.8 5.2 12.4 11.8 13v5.6c0 1 .8 1.8 1.8 1.8h1.9V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.9h1.9c1 0 1.8-.8 1.8-1.8v-5.6c6.6-.6 11.8-6.2 11.8-13V12c-.1-2-1.8-3.7-3.8-3.7zm-27 3.5h26.9c.1 0 .3.1.3.3v6.3H18.3V12c0-.1.1-.2.2-.2zm11.6 41.8v-3.8h3.7v3.8h-3.7zm6-7.4h-8.2c-4.6 0-8.5-3.3-9.4-7.7h3.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.3-.1v-5.4h5.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.3v-4.3h27.4v14.8c0 5.5-4.3 9.8-9.6 9.8z"/>
	</g>
</svg>
	);
};

export default SalineAlt;