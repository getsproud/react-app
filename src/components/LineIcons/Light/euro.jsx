import React from 'react';

function Euro(props) {
	const title = props.title || "euro";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.7 61c-12.3 0-23.1-8.1-27.2-19.2H41c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H22.6c-.6-2.2-.9-4.5-.9-6.8 0-1.4.1-2.7.3-4h19c.8 0 1.5-.7 1.5-1.5S41.8 25 41 25H22.6C25.9 12.5 37.4 3 50.7 3c.8 0 1.5-.7 1.5-1.5S51.5 0 50.7 0C35.8 0 22.9 10.9 19.5 25h-6.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H19c-.2 1.3-.3 2.7-.3 4 0 2.3.3 4.6.8 6.8h-6.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7C24.6 54.5 36.8 64 50.7 64c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Euro;