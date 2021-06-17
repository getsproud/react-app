import React from 'react';

function VideoAlt1(props) {
	const title = props.title || "video alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 0h-49C3.4 0 0 3.4 0 7.5v48.9C0 60.6 3.4 64 7.5 64h48.9c4.1 0 7.5-3.4 7.5-7.5v-49C64 3.4 60.6 0 56.5 0zM15 30.5H3V18h12v12.5zm-12 3h12V46H3V33.5zM18 3h28v58H18V3zm43 27.5H49V18h12v12.5zm-12 3h12V46H49V33.5zm12-26V15H49V3h7.5C59 3 61 5 61 7.5zM7.5 3H15v12H3V7.5C3 5 5 3 7.5 3zM3 56.5V49h12v12H7.5C5 61 3 59 3 56.5zM56.5 61H49V49h12v7.5c0 2.5-2 4.5-4.5 4.5z"/>
		<path d="M40.2 30.7l-14.9-9.1c-.5-.3-1-.3-1.5 0s-.8.8-.8 1.3V41c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l14.9-9.1c.5-.2.8-.7.8-1.2s-.3-1-.8-1.3zM26 38.4V25.6L36.6 32 26 38.4z"/>
	</g>
</svg>
	);
};

export default VideoAlt1;