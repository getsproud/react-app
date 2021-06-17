import React from 'react';

function Court(props) {
	const title = props.title || "court";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.8 20.3h-9.3c-.6-10.6-9.4-19-20.1-19-10.7 0-19.5 8.4-20.1 19H3.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.4v35.5H7.1c-1 0-1.8.8-1.8 1.8S6.1 63 7.1 63h49.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.1V23.8h6.1c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM31.5 4.8c8.8 0 16 6.9 16.6 15.5H14.9c.5-8.7 7.8-15.5 16.6-15.5zm6.1 19v35.5h-11V23.8h11zm-24.6 0h10.1v35.5H13V23.8zm38.2 35.5H41.1V23.8h10.1v35.5z"/>
	</g>
</svg>
	);
};

export default Court;