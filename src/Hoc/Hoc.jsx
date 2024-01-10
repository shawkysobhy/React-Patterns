/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faker } from '@faker-js/faker';
import withToggles from './withToggles';
import { useState } from 'react';

const products = Array.from({ length: 20 }, () => {
	return {
		productName: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		price: faker.commerce.price(),
	};
});

function ProductItem({ product }) {
	return (
		<li className='product'>
			<p className='product-name'>{product.productName}</p>
			<p className='product-price'>${product.price}</p>
			<p className='product-description'>{product.description}</p>
		</li>
	);
}

function ProductList({ title, items }) {
	return (
		<ul className='list'>
			{items.map((product) => (
				<ProductItem key={product.productName} product={product} />
			))}
		</ul>
	);
}

const ProductListWithToggles = withToggles(ProductList);
export default function Hoc() {
	const [showDesc, setShowDesc] = useState(false);
	return (
		<>
			<button onClick={() => setShowDesc(!showDesc)}>
				{showDesc ? 'show less' : 'show more'}
			</button>
			{showDesc && (
				<p>
					Within our application, we often want to use the same logic in
					multiple components. This logic can include applying a certain styling
					to components, requiring authorization, or adding a global state. One
					way of being able to reuse the same logic in multiple components, is
					by using the higher order component pattern. This pattern allows us to
					reuse component logic throughout our application. A Higher Order
					Component (HOC) is a component that receives another component. The
					HOC contains certain logic that we want to apply to the component that
					we pass as a parameter. After applying that logic, the HOC returns the
					element with the additional logic.{' '}
					<a
						href='https://www.patterns.dev/react/hoc-pattern'
						style={{ color: 'orange', fontSize: '22px', fontWeight: 'bold' }}
						target='_blank'
						rel='noreferrer'>
						for more about Hoc visit ...
					</a>
				</p>
			)}
			<div>
				<h1>Render Props Demo</h1>
				<div className='col-2'>
					<ProductListWithToggles title='Products HOC' items={products} />
				</div>
			</div>
		</>
	);
}
