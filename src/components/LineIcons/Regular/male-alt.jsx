import React from 'react';

function MaleAlt(props) {
	const title = props.title || "male alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.8 1.2H38.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h18.6l-18.7 18c-3.9-3.2-8.8-5-14.2-5-12.4 0-22.5 10.1-22.5 22.5S11.6 62.8 24 62.8s22.5-10.1 22.5-22.5c0-5.8-2.2-11.1-5.8-15.1L59 7.6v18c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.9c-.1-2.5-2.2-4.7-4.8-4.7zM24 59.3c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19c0 10.4-8.5 19-19 19z"/>
	</g>
</svg>
	);
};

export default MaleAlt;