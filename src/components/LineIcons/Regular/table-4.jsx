import React from 'react';

function Table4(props) {
	const title = props.title || "table 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 2.8H6C3.4 2.8 1.3 5 1.3 7.6v10.2c0 2.6 2.1 4.8 4.8 4.8h5.7l17.8 17.6-18.4 18c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5L32 42.6l18.4 18.1c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L34.5 40.1l17.8-17.6H58c2.6 0 4.8-2.1 4.8-4.8V7.6c0-2.6-2.2-4.8-4.8-4.8zM32 37.6L16.7 22.5h30.7L32 37.6zm27.3-19.8c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V7.6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v10.2z"/>
	</g>
</svg>
	);
};

export default Table4;