import { Box, SimpleGrid } from '@chakra-ui/react';
import { generatePhenotypeCountFreqChartData, generatePhenotypeFreqChartData } from 'data/analysis';
import Stats from './components/Stats';

export default function UserReports() {
	const phenoTypeFreqCountText = 'The barchart below describes the distribution of phenotype_count in the dataset. Greater than 90% of the genes have a phenotype count of 1 or 2.'
	const phenoTypeFreqText = 'This barchart describes the distribution of phenotype in the dataset. This chart can help understand that the dataset contains more mice with growth region phenotype abnormalities than with pigmentation phenotype abnormalities.'

	return (
		<Box pt={{ base: '80px', xl: '50px' }} mt='80px'>
		  	<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
			  	<Stats title={'Phenotype Frequency'} data={generatePhenotypeFreqChartData()} text={phenoTypeFreqText} keys={['count']} indexBy={'phenotype'} legendBottom={'phenotype'} axisBottomRotation={-30} legendLeft={'frequency'} />
				<Stats title={'Phenotype Count Frequency'} data={generatePhenotypeCountFreqChartData()} text={phenoTypeFreqCountText} keys={['count']} indexBy={'freq'} legendBottom={'phenotype count'} axisBottomRotation={0} legendLeft={'frequency'} />
			</SimpleGrid>
		</Box>
	);
}
