
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
		 			<img src ={imageLeft}  alt = "image1" style={{ height: 400}}/>
		 		</div>

		  <Card maxWidth='800px' mx='auto' mt= '60px'>
		    <Text color="000000" fontWeight='bold' fontSize='2xl' mt='10px' mb='4px' textAlign='center'>
		      Welcome
		    </Text>
		    <Text color="#8E8E8E" fontSize='md' me='26px' lineHeight='1.5' mb='40px' textAlign='center'>	
			This application offers an intuitive and user-friendly way to visualize the complex relationships between genes and phenotypes. By selecting a specific gene and one or more phenotypes, users can easily generate a heatmap that displays the strength of the relationships between the selected gene and phenotypes. 
			The heatmap uses a color gradient to represent different intensities, with darker colors indicating stronger relationships.
			In addition to the heatmap, the summary statistics page provides users with insightful charts that offer a deeper understanding of the dataset from different perspectives. 
			These charts can be used to identify trends and outliers, and to gain a better understanding of the distribution of phenotype data.
			The application is particularly valuable to researchers and scientists in the field of genetics who require a comprehensive tool to analyze and interpret complex data. 
			Heatmap visualization enables users to quickly identify patterns and trends that may not be immediately evident from raw data alone, and provides a valuable tool for gaining new insights into the complex relationships between genes and phenotypes.
		    </Text>
		  </Card>
		  <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >				
				<img src = {imageRight} alt = "image2" style={{ height: 400 }}/>
			</div>

		</SimpleGrid>
			<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '60px', backgroundColor: 'transparent' }} >
				<img src = {imageBelow}  alt = "image3"style={{ height: 400 }} />
			</div>
		</Box>


		
	);
}
