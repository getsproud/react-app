import React from 'react';

function AddAnchorPoint(props) {
	const title = props.title || "add anchor point";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.3 12.1h5.6v5.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.6h5.6c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7h-5.6V3c0-1-.8-1.8-1.8-1.8S10.9 2 10.9 3v5.6H5.3c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M59.4 20.9L45 6.6c-.9-.9-2.1-1.4-3.4-1.4-1.3 0-2.5.5-3.4 1.4l-2.1 2.1c-1.9 1.9-1.9 4.9 0 6.7l.9.9-22 10.3c-1.3.6-2.2 1.7-2.7 3L3.5 56c-.6 1.8-.1 3.9 1.2 5.2 1 1 2.3 1.5 3.6 1.5.5 0 1.1-.1 1.6-.3l26.4-8.8c1.3-.4 2.4-1.4 3-2.7l10.3-22.1.9.9c.9.9 2.1 1.4 3.4 1.4 1.3 0 2.5-.5 3.4-1.4l2.1-2.1c.9-.9 1.4-2.1 1.4-3.4s-.5-2.4-1.4-3.3zM36.2 49.5c-.2.4-.5.7-.9.8L9.6 58.9l12.5-12.5c1 .5 2.1.9 3.3.9 3.8 0 6.8-3.1 6.8-6.8s-3.1-6.8-6.8-6.8-6.8 3.1-6.8 6.8c0 1.3.4 2.5 1 3.6L7 56.5l8.6-25.8c.1-.4.4-.8.8-.9L39.8 19l7.2 7.2-10.8 23.3zm-14.1-9.1c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3c-1.8.1-3.3-1.4-3.3-3.3zm34.8-15.2l-2.1 2.1c-.5.5-1.3.5-1.8 0L38.7 12.9c-.5-.5-.5-1.3 0-1.8L40.8 9c.2-.2.5-.4.9-.4s.6.1.9.4L57 23.4c.2.2.4.5.4.9-.1.3-.3.6-.5.9z"/>
	</g>
</svg>
	);
};

export default AddAnchorPoint;