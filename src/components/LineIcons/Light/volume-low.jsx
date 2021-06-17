import React from 'react';

function VolumeLow(props) {
	const title = props.title || "volume low";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.1 22.3c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1 4 4.2 4 11 0 15.3-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5 5.2-5.4 5.2-14.1 0-19.4z"/>
		<path d="M42.6 7c-1.6-.9-3.5-.8-5.1.1l-14.4 9c-.3.2-.7.3-1.1.3H5c-2.8 0-5 2.2-5 5v21.1c0 2.8 2.2 5 5 5h17c.4 0 .7.1 1.1.3l14.4 9c.8.5 1.7.8 2.7.8.8 0 1.7-.2 2.4-.6 1.6-.9 2.6-2.5 2.6-4.4V11.4c0-1.8-1-3.5-2.6-4.4zm-.4 45.6c0 .7-.4 1.4-1 1.8-.7.4-1.4.3-2-.1l-14.4-9c-.8-.5-1.7-.8-2.7-.8H5c-1.1 0-2-.9-2-2v-21c0-1.1.9-2 2-2h17c.9 0 1.9-.3 2.7-.8l14.4-9c.6-.4 1.4-.4 2-.1.6.4 1 1 1 1.8v41.2z"/>
	</g>
</svg>
	);
};

export default VolumeLow;