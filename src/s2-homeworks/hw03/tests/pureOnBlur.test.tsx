import React from 'react';
import { pureOnBlur } from '../GreetingContainer';

interface GreetingContainerProps {
	name: string;
	setError: (error: string) => void;
}

const GreetingContainer: React.FC<GreetingContainerProps> = ({
	name,
	setError,
}) => {
	const onBlur = () => {
		pureOnBlur(name, setError);
	};

	return (
		<div>
			<input onBlur={onBlur} />
		</div>
	);
};

export default GreetingContainer;

let name: string;
let error: string;
const setError = (a: string) => {
	error = a;
};

beforeEach(() => {
	name = '';
	error = '';
});

test('name 1', () => {
	name = '1';
	pureOnBlur(name, setError);
	expect(error).toBe('');
});

test('name 2', () => {
	name = '';
	pureOnBlur(name, setError);
	expect(error).toBe('Ошибка! Введите имя!');
});

test('name 3', () => {
	name = '    ';
	pureOnBlur(name, setError);
	expect(error).toBe('Ошибка! Введите имя!');
});
