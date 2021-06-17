import React from 'react';

function Drill(props) {
	const title = props.title || "drill";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 10.9H26.9c-.1 0-.3 0-.4.1l-9 2.2c-.8.2-1.4.9-1.4 1.8v4.8H3c-1 0-1.8.8-1.8 1.8S2 23.2 3 23.2h13.2V28c0 .8.6 1.6 1.4 1.8l9 2.2c.1 0 .3.1.4.1h8.6c0 .2 0 .4.1.6l2.6 7.9c.2.7.9 1.2 1.7 1.2h3.5v8.8c0 .8.5 1.5 1.3 1.7l10.5 2.6c.1 0 .3.1.4.1.4 0 .8-.1 1.1-.4.4-.3.7-.8.7-1.4V32h1.7c1 0 1.8-.8 1.8-1.8V12.7c0-1-.8-1.8-1.8-1.8zm-39.5 5.4L25 15v13l-5.3-1.3V16.3zM54 50.9l-7-1.8v-9.2c0-1-.8-1.8-1.8-1.8h-4L39.1 32H54v18.9zm3.5-22.4h-29V14.4h29v14.1z"/>
	</g>
</svg>
	);
};

export default Drill;