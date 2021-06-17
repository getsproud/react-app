import React from 'react';

function OfficeCabinet(props) {
	const title = props.title || "office cabinet";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47 1.3H17c-2.6 0-4.8 2.1-4.8 4.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.6h32.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V6c-.1-2.6-2.3-4.7-4.9-4.7zM15.7 22.6h32.5V36H15.7V22.6zM17 4.8h30c.7 0 1.3.6 1.3 1.3v13.1H15.7V6c0-.7.6-1.2 1.3-1.2zm-1.3 34.7h32.5V53H15.7V39.5z"/>
		<path d="M31.6 13.6h.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.7c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
		<path d="M32.4 27.3h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M32.4 44.2h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default OfficeCabinet;