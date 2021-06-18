import React from 'react';

function Sprout(props) {
	const title = props.title || "sprout";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 59L38.7 44.4c-1.3-.8-2.7-1.4-4.2-1.7v-14c.9.2 1.8.3 2.8.3 4.9 0 10-2.2 14-6.2 5.4-5.4 7.5-12.9 5.3-19.1l-.3-.8-.8-.3C49.3.4 41.8 2.5 36.4 8 31.1 13.3 29 20.6 31 26.7v15.8c-2 .2-3.9.8-5.6 1.9L2.1 59c-.7.4-1 1.2-.8 2 .2.7.9 1.3 1.7 1.3h58c.8 0 1.5-.5 1.7-1.3.2-.8-.1-1.6-.8-2zm-23-48.6c4.2-4.2 10-6 14.6-4.8 1.3 4.7-.6 10.5-4.8 14.6-4.2 4.2-10 6-14.6 4.8-1.3-4.6.6-10.4 4.8-14.6zM9.1 58.7l18.1-11.4c2.9-1.8 6.7-1.8 9.6 0l18.1 11.4H9.1z"/>
	</g>
</svg>
	);
};

export default Sprout;