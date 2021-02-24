import { createContext } from 'react';

export interface UserContextData {
  user: string;
}

export const userContextDefaultValue: UserContextData = {
  user: 'Guest',
};

export const UserContext = createContext<UserContextData>(
  userContextDefaultValue
);
