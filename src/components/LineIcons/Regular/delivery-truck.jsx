import React from 'react';

function DeliveryTruck(props) {
	const title = props.title || "delivery truck";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 35.3h-4.6V18.9c0-2.2-1.2-4.2-3.2-5.1L28.5 4.3c-1.6-.8-3.5-.8-5.1 0l-19 9.5c-2 1-3.2 2.9-3.2 5.1v35.7c0 3.2 2.6 5.7 5.7 5.7h9.4c1 0 1.8-.8 1.8-1.8v-1.6h8.4c.8 1.8 2.6 3 4.7 3s3.9-1.2 4.7-3h12.6c.8 1.8 2.6 3 4.7 3s3.9-1.2 4.7-3H61c1 0 1.8-.8 1.8-1.8V42.8c0-4.1-3.4-7.5-7.6-7.5zM14.7 56.8H7c-1.2 0-2.2-1-2.2-2.2V18.9c0-.9.5-1.6 1.2-2l18.9-9.5c.6-.3 1.4-.3 2 0l18.9 9.5c.8.4 1.2 1.1 1.2 2v12.4c-.3-.4-.8-.6-1.3-.6H36v-2c0-3.2-2.6-5.7-5.7-5.7h-9.8c-3.2 0-5.7 2.6-5.7 5.7v28.1zm17.8-26.2H18.2v-2c0-1.2 1-2.2 2.2-2.2h9.8c1.2 0 2.2 1 2.2 2.2v2zm-14.3 3.5H44V53.4h-7.7c-.6-2.3-2.6-3.9-5.1-3.9s-4.5 1.7-5.1 3.9H18V34.1zm13.1 22.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7zm22.1 0c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm5.9-3h-.8c-.6-2.3-2.6-3.9-5.1-3.9s-4.5 1.7-5.1 3.9h-.8V38.8h7.7c2.2 0 4.1 1.8 4.1 4.1v10.5z"/>
	</g>
</svg>
	);
};

export default DeliveryTruck;