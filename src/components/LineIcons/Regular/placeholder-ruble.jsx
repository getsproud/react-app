import React from 'react';

function PlaceholderRuble(props) {
	const title = props.title || "placeholder ruble";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C18.3 1.3 7.2 12.4 7.2 26.1 7.2 45.3 30 61.7 31 62.4c.3.2.7.3 1 .3.4 0 .7-.1 1-.3 1-.7 23.8-17.1 23.8-36.4C56.8 12.4 45.7 1.3 32 1.3zm0 57.5c-4.4-3.4-21.3-17.5-21.3-32.7 0-11.8 9.6-21.3 21.3-21.3s21.3 9.6 21.3 21.3c0 15.2-16.9 29.3-21.3 32.7z"/>
		<path d="M37.2 14.6h-7.3c-1 0-1.8.8-1.8 1.8v15.5h-5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.6V41c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.5h5.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.6v-5.2h5.5c3.3 0 6-2.7 6-6s-2.7-6.1-6-6.1zm0 8.6h-5.5v-5h5.5c1.4 0 2.5 1.1 2.5 2.5 0 1.3-1.1 2.5-2.5 2.5z"/>
	</g>
</svg>
	);
};

export default PlaceholderRuble;