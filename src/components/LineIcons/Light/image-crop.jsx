import React from 'react';

function ImageCrop(props) {
	const title = props.title || "image crop";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 53.7h-5.2V10.3h5.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.2V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.8H9.7V1.5C9.7.7 9.1 0 8.2 0S6.7.7 6.7 1.5v5.8H1.5C.7 7.3 0 8 0 8.8s.7 1.5 1.5 1.5h5.2v43.4H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.2v5.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.8h44.5v5.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.8h5.2c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5zM9.7 10.3h44.5V33l-7.1-7.2c-.6-.6-1.5-.6-2.1-.1L33.8 35.9 22 20.1c-.3-.4-.7-.6-1.1-.6-.5 0-.9.2-1.2.5L9.8 31V10.3zm0 43.4V35.5l10.9-12.2L32.4 39c.3.3.6.6 1.1.6h.1c.4 0 .7-.1 1-.4L46 28.9l8.3 8.4v16.4H9.7z"/>
	</g>
</svg>
	);
};

export default ImageCrop;