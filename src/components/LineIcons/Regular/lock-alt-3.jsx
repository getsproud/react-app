import React from 'react';

function LockAlt3(props) {
	const title = props.title || "lock alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.3 36.7c-1 0-1.8.8-1.8 1.8v10.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V38.5c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M50.8 17.4h-4.5V10c0-4.8-3.9-8.7-8.7-8.7H26.5c-4.8 0-8.7 3.9-8.7 8.7v7.4h-4.5c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h37.6c2.6 0 4.8-2.1 4.8-4.8V22.1c-.2-2.6-2.3-4.7-4.9-4.7zM21.2 10c0-2.9 2.3-5.2 5.2-5.2h11.1c2.9 0 5.2 2.3 5.2 5.2v7.4H21.2V10zM52 58c0 .7-.6 1.3-1.3 1.3H13.2c-.7 0-1.3-.6-1.3-1.3V22.1c0-.7.6-1.3 1.3-1.3h37.6c.7 0 1.3.6 1.3 1.3V58z"/>
	</g>
</svg>
	);
};

export default LockAlt3;