import React, { useState } from 'react';
import { pureOnEnter } from '../GreetingContainer';

interface GreetingContainerProps {}

const GreetingContainer: React.FC<GreetingContainerProps> = () => {
	const [name, setName] = useState<string>('');
	const [error, setError] = useState<string | null>(null);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		pureOnEnter(event, () => {
			if (name.trim()) {
				setError(null);
			} else {
				setError('Name is required');
			}
		});
	};

	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={handleNameChange}
				onKeyPress={handleKeyPress}
			/>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</div>
	);
};

export default GreetingContainer;
