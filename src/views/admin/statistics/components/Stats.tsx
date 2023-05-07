// Chakra imports
import {Text, Box } from '@chakra-ui/react';
import { red } from '@mui/material/colors';
import { ResponsiveBar } from '@nivo/bar';
import CustomCard from 'components/card/Card';
import { generateBarChartData} from 'data/analysis';
// Custom components
const data = generateBarChartData();

export default function Stats() {
    // console.log(getBarChartPhenoTypeFreqCount())
	return (
        <div>
            <Box display='flex' justifyContent='center' width='800px' height='500px' >
            <CustomCard flexDirection='column' px='4px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
				<Text me='auto' color={red} fontSize='xl' fontWeight='700' lineHeight='100%'>
					Phenotype Count Frequency
				</Text>
                <Text me='auto' color={red} fontSize='medium' lineHeight='100%'>
                    The barchart below describes the distribution of phenotype_count in the dataset. 
                    Greater than 90% of the genes have a phenotype count of 1 or 2.
				</Text>
                <ResponsiveBar
                    data = {data}
                    keys={[
                        'count'
                    ]}
                    indexBy="freq"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'phenotype count',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'frequency',
                        legendPosition: 'middle',
                        legendOffset: -50
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                />
        </CustomCard>
        </Box>
        </div>
	);
}
