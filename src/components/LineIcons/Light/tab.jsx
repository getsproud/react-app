import React from 'react';

function Tab(props) {
	const title = props.title || "tab";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.9 0H11.1C9.5 0 8.3 1.3 8.3 2.9v58.3c0 1.6 1.3 2.9 2.9 2.9h41.7c1.6 0 2.9-1.3 2.9-2.9V2.9C55.7 1.3 54.5 0 52.9 0zm-.2 61H11.3V3h41.5v58z"/>
		<path d="M23.7 12.1H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-8.3c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
		<ellipse cx="40.3" cy="10.6" rx="1.7" ry="1.7"/>
		<ellipse cx="32" cy="54.2" rx="2.8" ry="2.8"/>
	</g>
</svg>
	);
};

export default Tab;