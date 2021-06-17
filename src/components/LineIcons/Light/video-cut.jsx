import React from 'react';

function VideoCut(props) {
	const title = props.title || "video cut";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4.1H7.6C3.5.1.1 3.5.1 7.6v48.9c0 4.1 3.4 7.5 7.5 7.5h48.9c4.1 0 7.5-3.4 7.5-7.5V7.6C63.9 3.4 60.6.1 56.4.1zm4.5 30.4H49V18h12v12.5zm-14.9 0H18V3.1h28v27.4zm-31 0H3V18h12v12.5zm-11.9 3h12V46h-12V33.5zm14.9 0h28v27.4H18V33.5zm31 0h12V46H49V33.5zM60.9 7.6V15H49V3h7.5c2.4.1 4.4 2.1 4.4 4.6zM7.6 3.1H15v12H3V7.6c.1-2.5 2.1-4.5 4.6-4.5zM3.1 56.4V49h12v12H7.6c-2.5-.1-4.5-2.1-4.5-4.6zm53.3 4.5H49V49h12v7.5c-.1 2.4-2.1 4.4-4.6 4.4z"/>
	</g>
</svg>
	);
};

export default VideoCut;