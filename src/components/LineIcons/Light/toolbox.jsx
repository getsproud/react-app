import React from 'react';

function Toolbox(props) {
	const title = props.title || "toolbox";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 13.9H44.6v-4c0-3.9-3.2-7-7-7H26.5c-3.9 0-7 3.2-7 7v4H7.6c-4.1 0-7.5 3.4-7.5 7.5V32c0 .8.7 1.5 1.5 1.5h1.3v25.2c0 1.4 1.1 2.5 2.5 2.5h53.3c1.4 0 2.5-1.1 2.5-2.5V33.5h1.3c.8 0 1.5-.7 1.5-1.5V21.4c-.1-4.1-3.4-7.5-7.6-7.5zm-34-4c0-2.2 1.8-4 4-4h11.1c2.2 0 4 1.8 4 4v4H22.4v-4zM3.1 21.4c0-2.5 2-4.5 4.5-4.5h48.9c2.5 0 4.5 2 4.5 4.5v9.1H3.1v-9.1zm55.1 36.8H5.8V33.5h13.6v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h19.1v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h13.6v24.7z"/>
	</g>
</svg>
	);
};

export default Toolbox;