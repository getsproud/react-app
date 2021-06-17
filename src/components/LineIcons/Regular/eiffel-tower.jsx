import React from 'react';

function EiffelTower(props) {
	const title = props.title || "eiffel tower";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 59.9l-2.1-2.6C42.5 44.3 37 28.7 37 12.1v-1.6c0-1-.8-1.8-1.8-1.8h-1.5V3c0-1-.8-1.8-1.8-1.8S30.1 2 30.1 3v5.7h-1.5c-1 0-1.8.8-1.8 1.8v1.6c0 16.6-5.5 32.3-15.8 45.2l-2 2.6c-.4.5-.5 1.2-.2 1.9s.9 1 1.6 1H26c1 0 1.8-.8 1.8-1.8v-1.6c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2V61c0 1 .8 1.8 1.8 1.8h15.6c.7 0 1.3-.4 1.6-1 .3-.6.2-1.4-.2-1.9zM30.5 12.2h3c0 9.4 1.7 18.5 5 27h-13c3.3-8.6 5-17.6 5-27zm9.2 47.1c-.1-4.2-3.5-7.6-7.7-7.6s-7.6 3.4-7.7 7.6H14.1c4.1-5.2 7.5-10.7 10.1-16.6H40c2.6 5.9 6 11.4 10.1 16.6H39.7z"/>
	</g>
</svg>
	);
};

export default EiffelTower;