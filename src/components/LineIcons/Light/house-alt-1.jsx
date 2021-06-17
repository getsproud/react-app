import React from 'react';

function HouseAlt1(props) {
	const title = props.title || "house alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 33.3c-.8 0-1.5.7-1.5 1.5v15.1H5.8V34.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.6c0 .8.7 1.5 1.5 1.5H32c.8 0 1.5-.7 1.5-1.5V34.8c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M35.4 25.1l-16.6-8.3c-.4-.2-.9-.2-1.3 0L.8 25.1c-.7.4-1 1.3-.7 2 .4.7 1.3 1 2 .7l16-8 16 8c.2.1.4.2.7.2.5 0 1.1-.3 1.3-.8.4-.8.1-1.7-.7-2.1z"/>
		<path d="M64 25.1c0-7.8-4.3-14-9.8-14-5.5 0-9.8 6.1-9.8 14 0 7.1 3.6 12.8 8.3 13.8v12.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V38.9c4.7-1 8.3-6.7 8.3-13.8zM54.2 36c-3.7 0-6.8-5-6.8-11s3.1-11 6.8-11c3.7 0 6.8 5 6.8 11s-3.1 11-6.8 11z"/>
	</g>
</svg>
	);
};

export default HouseAlt1;