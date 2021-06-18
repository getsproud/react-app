import React from 'react';

function SafeBox(props) {
	const title = props.title || "safe box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 9.1H6c-2.6 0-4.8 2.1-4.8 4.8v27c0 2.6 2.1 4.8 4.8 4.8h5.5v7.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.5h36v7.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.5H58c2.6 0 4.8-2.1 4.8-4.8v-27c0-2.6-2.2-4.8-4.8-4.8zm1.3 31.8c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-27c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v27z"/>
		<path d="M23.8 17H10.7c-1 0-1.8.8-1.8 1.8v7.4c0 1 .8 1.8 1.8 1.8h13.1c1 0 1.8-.8 1.8-1.8v-7.4c-.1-1-.9-1.8-1.8-1.8zM22 24.5h-9.6v-3.9H22v3.9z"/>
		<path d="M52.7 15.8c-1 0-1.8.8-1.8 1.8v17c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-17c-.1-1-.9-1.8-1.8-1.8z"/>
		<path d="M33.2 17h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M42.4 17h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M33.2 25.6h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M42.4 25.6h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M33.2 34.2h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M42.4 34.2h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default SafeBox;