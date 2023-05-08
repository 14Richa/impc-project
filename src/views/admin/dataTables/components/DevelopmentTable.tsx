import { Box } from '@chakra-ui/react';
// // Custom components
import CustomCard from 'components/card/Card';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import React from 'react';
import { HeatmapData } from 'data/analysis';

interface HeatmapProps {
	heatmapData: HeatmapData[];
}


export default function Heatmap(props: HeatmapProps) {
  
	const heatmapStyle: React.CSSProperties = {
	  backgroundColor: '#f1f1f1',
	  position: 'absolute',
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)',
	  height: '1100px',
	  width: '1000px',
	  borderRadius: '20px',
	};
  
	return (
	<><Box display='flex' justifyContent='center' width='1500px' height='1200px'>
			<CustomCard flexDirection='column' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
				<Box>
					<div>
						<div style={heatmapStyle}>
							<ResponsiveHeatMap
								data={props.heatmapData}
								margin={{ top: 120, right: 110, bottom: 80, left: 100 }}
								valueFormat=">-.2s"
								axisTop={{
									tickSize: 5,
									tickPadding: 5,
									tickRotation: -30,
									legend: '',
									legendOffset: 46,
								}}
								axisRight={{
									tickSize: 5,
									tickPadding: 5,
									tickRotation: 0,
									legend: 'gene',
									legendPosition: 'middle',
									legendOffset: 70,
								}}
								axisLeft={{
									tickSize: 5,
									tickPadding: 5,
									tickRotation: 0,
									legend: 'gene',
									legendPosition: 'middle',
									legendOffset: -72,
								}}
								colors={{
									type: 'sequential',
									scheme: 'greens',
								}}
								emptyColor="#00A693" />
						</div>

					</div>

				</Box>
			</CustomCard>
		</Box><div style= {{marginLeft: '180px', marginTop: '20px'}}> Note: The dataset has been preprocessed for optimized performance.
			Genes with phenotype_count less than 10 have been removed from the dataset for this heatmap.</div></>
	
	);
  }