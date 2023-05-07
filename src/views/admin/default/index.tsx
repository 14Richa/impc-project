

// Chakra imports
import { Box, Text, SimpleGrid  } from '@chakra-ui/react';
import Card from 'components/card/Card';

const imageRight = require('../../../assets/embryo_image_3-removebg-preview.png');
const imageLeft = require('../../../assets/embryo_image_1-removebg-preview.png');
const imageBelow = require('../../../assets/embryo_image_2-removebg-preview.png')

export default function UserReports() {
	return (

		<Box pt={{ base: '80px', xl: '50px' }} mt='80px'>
		<SimpleGrid columns={3} spacing={4}>
				<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >
		 			<img src ={imageLeft} style={{ height: 400}}/>
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
				<img src = {imageRight} style={{ height: 400 }}/>
			</div>

		</SimpleGrid>
			<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >
				<img src = {imageBelow} style={{ height: 400 }} />
			</div>
		</Box>


		
	);
}
