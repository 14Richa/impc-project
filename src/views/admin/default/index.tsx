

// Chakra imports
import { Box, Text, SimpleGrid  } from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function UserReports() {
	return (

		<Box pt={{ base: '80px', xl: '50px' }} mt='80px'>
		<SimpleGrid columns={3} spacing={4}>
				<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >
		 			<img src = "https://o.remove.bg/downloads/ff054da4-d174-493d-ab0a-dd4cf3ec036a/embryo_image_1-removebg-preview.png" style={{ height: 400 }}/>
		 		</div>
		  <Card maxWidth='800px' mx='auto' mt= '60px'>
		    <Text color="000000" fontWeight='bold' fontSize='2xl' mt='10px' mb='4px' textAlign='center'>
		      Welcome
		    </Text>
		    <Text color="#8E8E8E" fontSize='md' me='26px' lineHeight='1.7' mb='40px'>				
			This application allows you to visualize the relationships between genes and phenotypes in a user-friendly way.
				Using this application, you can select a gene and one or more phenotypes to display on the heatmap.
			<br/>
			The heatmap will show the intensity of the relationship between the selected gene and phenotypes, with darker colors indicating stronger relationships.
			<br/>
			The application is especially useful for researchers and scientists who study genetics and want to better understand the relationships between genes and phenotypes.
			With my heatmap visualization, you can quickly identify patterns and trends in the data that might not be immediately apparent from raw data alone.
		    </Text>
		  </Card>
		  <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >				
				<img src = "https://o.remove.bg/downloads/c88a12e7-75ae-4021-b306-f16e517baa7f/embryo_image_3-removebg-preview.png" style={{ height: 400 }}/>
			</div>

		</SimpleGrid>
			<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >
				<img src = "https://o.remove.bg/downloads/9b28f583-9485-4afd-b2ee-f3045dfcdcd4/embryo_image_2-removebg-preview.png" style={{ height: 400 }} />
			</div>
		</Box>


		
	);
}
