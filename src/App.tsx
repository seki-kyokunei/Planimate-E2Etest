import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/theme';
import './translations';
// Firebase sync disabled for local/E2E testing (per README deactivation notes).
// import { AppState } from 'react-native';
// import { useEffect } from 'react';
// import { syncData } from '@/api/firebase/syncData/syncData';
// import { getSyncData } from '@/api/firebase/getData/getSyncData';
import ApplicationNavigator from './navigators/Application';
// import {useStorage} from "@/storage/useStorage";

export const queryClient = new QueryClient();

function App() {
	// Firebase sync disabled for local/E2E testing (per README deactivation notes).
	// const storage = useStorage();
	// useEffect(() => {
	// 	// Add event listener for AppState changes
	// 	const appStateListener = AppState.addEventListener(
	// 		'change',
	// 		nextAppState => {
	// 			if (nextAppState === 'background' || nextAppState === 'inactive') {
	// 				syncData(storage).catch(error => console.error(error));
	// 			}
	// 			if (nextAppState === 'active') {
	// 				getSyncData(storage).catch(error => console.error(error));
	// 			}
	// 		},
	// 	);
	//
	// 	return () => {
	// 		appStateListener.remove();
	// 	};
	// }, []);
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<ApplicationNavigator />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
