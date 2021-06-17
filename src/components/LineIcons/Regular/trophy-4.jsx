import React from 'react';

function Trophy4(props) {
	const title = props.title || "trophy 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.4 59.3H45v-3.4c0-2-1.2-3.7-3-4.4L46.4 4c.1-.9-.5-1.7-1.4-1.9-19.4-3.7-28.2 6.2-28.6 6.6-.3.4-.4.9-.4 1.4l5.8 41.4c-1.7.7-2.9 2.4-2.9 4.4v3.4h-8.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H53.3c1 0 1.8-.8 1.8-1.8s-.7-1.8-1.7-1.8zm-14-17.4l-15.9-3.6L22.1 28l19.5-9.5-2.2 23.4zm-.3 3.6l-.5 5.6H25.3l-1.3-9 15.1 3.4zm3.7-40.3l-.8 9.2-20.4 10-2-14c2-1.7 9.3-7.3 23.2-5.2zM22.5 59.3v-3.4c0-.7.6-1.3 1.3-1.3h16.6c.7 0 1.3.6 1.3 1.3v3.4H22.5z"/>
	</g>
</svg>
	);
};

export default Trophy4;