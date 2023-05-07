

// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';
import Stats from './components/Stats';

export default function UserReports() {

	return (
		<Box pt={{ base: '80px', xl: '50px' }} mt='80px'>
		  	<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
				<Stats />
			</SimpleGrid>
		</Box>
	);
}
