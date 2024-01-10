import './App.css';
import { useState } from 'react';
import RenderProp from './renderPropPattern/RenderProp';
import Hoc from './Hoc/Hoc';
function App() {
    const [selectedLink, setSelectedLink] = useState(null);

		const handleLinkClick = (link) => {
			setSelectedLink(link);
		};

  const renderComponent = () => {
		switch (selectedLink) {
			case 'Render Props':
				return <RenderProp />;
			case 'Higher Order Components':
				return <Hoc />;
			case 'contact':
			default:
				return null;
		}
	};

	return (
		<>
			<div>
				<nav style={{backgroundColor:"green" ,display:'flex' }}>
					<ul>
						<li
							style={{ cursor: 'pointer' }}
							onClick={() => handleLinkClick('Render Props')}>
							Render Props
						</li>
						<li
							style={{ cursor: 'pointer' }}
							onClick={() => handleLinkClick('Higher Order Components')}>
							Higher Order Components
						</li>
					</ul>
				</nav>
				<div>{renderComponent()}</div>
			</div>
		</>
	);
}

export default App;
