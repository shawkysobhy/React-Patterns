/* eslint-disable react/prop-types */
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const products = Array.from({ length: 20 }, () => {
	return {
		productName: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		price: faker.commerce.price(),
	};
});

const companies = Array.from({ length: 15 }, () => {
	return {
		companyName: faker.company.name(),
		phrase: faker.company.catchPhrase(),
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

function CompanyItem({ company, defaultVisibility }) {
	const [isVisible, setIsVisisble] = useState(defaultVisibility);

	return (
		<li
			className='company'
			onMouseEnter={() => setIsVisisble(true)}
			onMouseLeave={() => setIsVisisble(false)}>
			<p className='company-name'>{company.companyName}</p>
			{isVisible && (
				<p className='company-phrase'>
					<strong>About:</strong> {company.phrase}
				</p>
			)}
		</li>
	);
}

function List({ title, items, xxrender }) {
	const [isOpen, setIsOpen] = useState(true);
	const [isCollapsed, setIsCollapsed] = useState(false);

	const displayItems = isCollapsed ? items.slice(0, 3) : items;

	function toggleOpen() {
		setIsOpen((isOpen) => !isOpen);
		setIsCollapsed(false);
	}

	return (
		<div className='list-container'>
			<div className='heading'>
				<h2>{title}</h2>
				<button onClick={toggleOpen}>
					{isOpen ? <span>&or;</span> : <span>&and;</span>}
				</button>
			</div>
			{isOpen && <ul className='list'>{displayItems.map(xxrender)}</ul>}

			<button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
				{isCollapsed ? `Show all ${items.length}` : 'Show less'}
			</button>
		</div>
	);
}

export default function RenderProp() {
	const [showDesc, setShowDesc] = useState(false);

	return (
		<div>
			<h1>Render Props Demo</h1>
			{showDesc && (
				<p>
					The Render Prop pattern is a technique used in React.js for sharing
					code between components. It involves passing a function as a prop to a
					component, allowing the component to delegate part of its rendering
					logic to the function. This pattern is particularly useful for
					creating reusable components that can be customized based on the
					requirements of the parent component.{' '}
					<a
						style={{ color: 'orange', fontSize: '22px', fontWeight: 'bold' }}
						target='_blank'
						rel='noreferrer'
						href='https://www.patterns.dev/react/render-props-pattern/'>
						more about topic
					</a>
				</p>
			)}
			<button onClick={() => setShowDesc(!showDesc)}>
				{showDesc ? 'show less' : 'show more'}
			</button>
			<div className='col-2'>
				<List
					title='Products'
					items={products}
					xxrender={(product) => (
						<ProductItem key={product.productName} product={product} />
					)}
				/>
				<List
					title='Compines'
					items={companies}
					xxrender={(company) => (
						<CompanyItem
							key={company.companyName}
							company={company}
							defaultVisibility={true}
						/>
					)}
				/>
			</div>
		</div>
	);
}
