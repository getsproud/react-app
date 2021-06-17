import React from 'react';

function YogaMat(props) {
	const title = props.title || "yoga mat";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 11.4h-61c-.8 0-1.5.6-1.5 1.5v38.2c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V12.9c0-.9-.7-1.5-1.5-1.5zm-16.5 3v35.2H18V14.4h28zm-43 0h12v35.2H3V14.4zm58 35.2H49V14.4h12v35.2z"/>
	</g>
</svg>
	);
};

export default YogaMat;