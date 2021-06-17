import React from 'react';

function Plug(props) {
	const title = props.title || "plug";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.6 11.1h-6.8V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v9.6H25.2V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v9.6h-6.8c-.8 0-1.5.7-1.5 1.5v11.7c0 9.4 7.4 17 16.6 17.5v20.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V41.8c9.3-.5 16.6-8.1 16.6-17.5V12.6c0-.8-.6-1.5-1.5-1.5zm-1.5 13.2c0 8-6.5 14.5-14.5 14.5h-1.3c-8 0-14.5-6.5-14.5-14.5V14.1h30.3v10.2z"/>
	</g>
</svg>
	);
};

export default Plug;