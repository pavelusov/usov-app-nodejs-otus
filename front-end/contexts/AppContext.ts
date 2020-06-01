import { createContext } from 'react';
const AppContext = createContext({ access: false, apiHost: '' });

export default AppContext;
