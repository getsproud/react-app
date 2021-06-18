import React from 'react';

function FactoryAlt3(props) {
	const title = props.title || "factory alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 1.7H39.6c-3.2 0-5.9 2.6-5.9 5.9v11.3c0 1-.6 1.9-1.5 2.2l-10.4 4.1V9.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v17.5l-7.5 3V14.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V31l-2.1.9c-2.3.9-3.7 3-3.7 5.5v19c0 3.2 2.6 5.9 5.9 5.9H56.9c3.2 0 5.9-2.6 5.9-5.9V7.6c0-3.3-2.7-5.9-5.9-5.9zM41 58.8V46.7c0-.7.6-1.3 1.3-1.3h6.1c.7 0 1.3.6 1.3 1.3v12.1H41zm18.3-2.4c0 1.3-1.1 2.4-2.4 2.4h-3.8V46.7c0-2.6-2.1-4.8-4.8-4.8h-6.1c-2.6 0-4.8 2.1-4.8 4.8v12.1H7.1c-1.3 0-2.4-1.1-2.4-2.4v-19c0-1 .6-1.9 1.5-2.2l27.2-10.8c2.3-.9 3.7-3 3.7-5.5V7.6c0-1.3 1.1-2.4 2.4-2.4h17.3c1.3 0 2.4 1.1 2.4 2.4v48.8z"/>
	</g>
</svg>
	);
};

export default FactoryAlt3;