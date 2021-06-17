import React from 'react';

function Closet3(props) {
	const title = props.title || "closet 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 6.9H6c-2.6 0-4.8 2.1-4.8 4.8v40.7c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V11.6c0-2.6-2.2-4.7-4.8-4.7zM4.8 27.7h15v11.8h-15V27.7zm18.4-17.3H40v43.2H23.2V10.4zM6 10.4h13.7v13.8h-15V11.6c.1-.6.6-1.2 1.3-1.2zm-1.2 42V43h15v10.6H6c-.7 0-1.2-.6-1.2-1.2zm54.5 0c0 .7-.6 1.3-1.3 1.3H43.5V10.4H58c.7 0 1.3.6 1.3 1.3v40.7z"/>
		<path d="M37.1 28.9c0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.8v2.1c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8v-2.1z"/>
		<path d="M48.2 27.2c-1 0-1.8.8-1.8 1.8v2.1c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8v-2.1c0-.9-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default Closet3;