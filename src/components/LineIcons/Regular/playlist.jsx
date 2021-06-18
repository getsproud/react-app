import React from 'react';

function Playlist(props) {
	const title = props.title || "playlist";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M2.6 22.4c.3.2.6.2.9.2.3 0 .6-.1.8-.2l16.2-8.9c.6-.3.9-.9.9-1.5s-.3-1.2-.9-1.5l-16.2-9c-.5-.3-1.2-.3-1.7 0-.6.3-.9.9-.9 1.5v17.9c0 .6.3 1.2.9 1.5zM5.2 6L16 12 5.2 18V6z"/>
		<path d="M60.9 16.4H30.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h30.2c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M30.7 5.6h30.2c1 0 1.8-.8 1.8-1.8S61.9 2 60.9 2H30.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M60.7 30.7H3.1c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7h57.6c1 0 1.8-.8 1.8-1.7s-.8-1.8-1.8-1.8z"/>
		<path d="M60.7 45H3.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h57.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M60.7 59.3H3.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h57.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Playlist;