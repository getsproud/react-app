import React from 'react';

function Umbrella(props) {
	const title = props.title || "umbrella";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 5.4V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v2.4C15.6 6.3 3.7 17.8 2.2 32.9c-.1 1.3.3 2.5 1.1 3.4.9 1 2.1 1.5 3.4 1.5h23.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V37.9h23.5c1.3 0 2.5-.5 3.4-1.5.9-.9 1.3-2.2 1.1-3.5-1.5-15.1-13.4-26.6-28-27.5zM58.1 34c-.2.2-.5.4-.8.4H6.7c-.3 0-.6-.1-.8-.4-.1-.1-.3-.4-.3-.8C7.1 19.4 18.4 8.9 32 8.9s24.9 10.5 26.3 24.4c.1.4-.1.6-.2.7z"/>
	</g>
</svg>
	);
};

export default Umbrella;