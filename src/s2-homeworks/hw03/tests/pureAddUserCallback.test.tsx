export interface User {
	_id: string;
	name: string;
}

export type SetName = (users: User[]) => void;

export function pureAddUserCallback(
	name: string,
	setName: SetName,
	state: User[]
): void {
	const newUser: User = {
		_id: Math.random().toString(36).substr(2, 9),
		name: name,
	};
	const newState = [...state, newUser];
	setName(newState);
}
