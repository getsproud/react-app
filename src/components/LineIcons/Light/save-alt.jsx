import React from 'react';

function SaveAlt(props) {
	const title = props.title || "save alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 0H16.1c-.6 0-1.3.2-1.9.6L3.6 10.5c-.6.5-.9 1.2-.9 2.1v48.6C2.7 62.7 4 64 5.6 64h52.7c1.6 0 2.9-1.3 2.9-2.9V2.9C61.3 1.3 60 0 58.4 0zm-36 3h24.8V12.8H22.4V3.2 3zm35.9 58H5.7V12.6L16.1 3h3.3V14.3c0 .8.7 1.5 1.5 1.5h27.8c.8 0 1.5-.7 1.5-1.5V3.2 3h8.1v58z"/>
		<path d="M33.4 22.2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 24.9c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"/>
	</g>
</svg>
	);
};

export default SaveAlt;