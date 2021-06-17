import React from 'react';

function List(props) {
	const title = props.title || "list";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13.6 11.8h48.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H13.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M62.5 30.5H13.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h48.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 52.2H13.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h48.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M2.7 7.5C1.2 7.5 0 8.8 0 10.3S1.2 13 2.7 13c1.5 0 2.7-1.2 2.7-2.7S4.2 7.5 2.7 7.5z"/>
		<path d="M2.7 29.3C1.2 29.3 0 30.5 0 32c0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7z"/>
		<path d="M2.7 51C1.2 51 0 52.2 0 53.7s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7S4.2 51 2.7 51z"/>
	</g>
</svg>
	);
};

export default List;