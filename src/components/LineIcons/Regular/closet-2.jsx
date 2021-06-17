import React from 'react';

function Closet2(props) {
	const title = props.title || "closet 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.6 1.3H15.4c-3.2 0-5.8 2.6-5.8 5.8v44.8c0 3.2 2.6 5.8 5.8 5.8h.1V61c0 1 .8 1.8 1.8 1.8S19 62 19 61v-3.4h26V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.4h.1c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM13.1 51.8V7c0-1.2 1-2.3 2.3-2.3h14.9V54H15.4c-1.2.1-2.3-.9-2.3-2.2zm37.8 0c0 1.2-1 2.3-2.3 2.3H33.8V4.8h14.9c1.2 0 2.3 1 2.3 2.3v44.7z"/>
		<path d="M20.3 29.8h2.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.3c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
		<path d="M43 26.3h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H43c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Closet2;