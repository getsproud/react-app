import React from 'react';

function Jail(props) {
	const title = props.title || "jail";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.9 1.3H12.1C9.5 1.3 7.3 3.4 7.3 6v52c0 2.6 2.1 4.8 4.8 4.8h39.8c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.2-4.7-4.8-4.7zM23.9 23c.7 0 1.3.6 1.3 1.3v15.6c0 .7-.6 1.3-1.3 1.3h-13V23h13zm2.4 20.9c1.4-.8 2.3-2.3 2.3-4.1V24.2c0-1.7-.9-3.2-2.3-4.1V4.8h11.3v54.5H26.3V43.9zM10.8 6c0-.7.6-1.3 1.3-1.3h10.7v14.7h-12V6zm0 52V44.6h12v14.7H12.1c-.7-.1-1.3-.6-1.3-1.3zm42.4 0c0 .7-.6 1.3-1.3 1.3H41.2V4.8h10.7c.7 0 1.3.6 1.3 1.3V58z"/>
		<path d="M18 35c1 0 1.8-.8 1.8-1.8v-2.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.9c0 1 .8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Jail;