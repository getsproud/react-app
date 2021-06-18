import React from 'react';

function HospitalLocationAlt(props) {
	const title = props.title || "hospital location alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 36.4c-1 0-1.8.8-1.8 1.8v3.9h-5.4v-3.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v11.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.9h5.4v3.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V38.2c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M23.6 16.5c-5.6 0-10.2 4.6-10.2 10.2S18 36.9 23.6 36.9s10.2-4.6 10.2-10.2-4.5-10.2-10.2-10.2zm0 16.9a6.7 6.7 0 1 1 6.7-6.7c.1 3.7-3 6.7-6.7 6.7z"/>
		<path d="M47.1 28.2c-.4 0-.8 0-1.1.1.1-.5.1-1 .1-1.4C46 14.5 36 4.5 23.6 4.5S1.3 14.5 1.3 26.8c0 12.1 20.4 30 21.2 30.7.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.2-.1 3.7-3.2 7.8-7.7 2.4 5.7 8 9.6 14.5 9.6 8.6 0 15.7-7 15.7-15.7s-7-15.5-15.6-15.5zM23.6 53.9C17.5 48.3 4.8 35 4.8 26.8 4.8 16.4 13.2 8 23.6 8s18.9 8.5 18.9 18.9c0 .6-.1 1.4-.3 2.1-6.3 2-10.9 7.9-10.9 14.9 0 .7.1 1.4.1 2-3 3.6-6.1 6.5-7.8 8zM47.1 56c-6.7 0-12.2-5.5-12.2-12.2s5.5-12.2 12.2-12.2 12.2 5.5 12.2 12.2S53.8 56 47.1 56z"/>
	</g>
</svg>
	);
};

export default HospitalLocationAlt;