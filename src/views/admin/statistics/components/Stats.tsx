// Chakra imports
import {Text, Box } from '@chakra-ui/react';
import { red } from '@mui/material/colors';
import { BarDatum, ResponsiveBar } from '@nivo/bar';
import CustomCard from 'components/card/Card';

export interface StatsProps {
    title: string;
    data: BarDatum[];
    text: string;
    keys: string[];
    indexBy: string;
    legendBottom: string;
    axisBottomRotation: number;
    legendLeft: string;
  }

export default function Stats(props: StatsProps) {
    const {title, data, text, keys, indexBy, legendBottom, axisBottomRotation, legendLeft} = props;
	return (
        <div>
            <Box display='flex' justifyContent='center' width='700px' height='500px' >
            <CustomCard flexDirection='column' px='4px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
				<Text me='auto' color={red} fontSize='xl' fontWeight='700' lineHeight='100%'>
					{title}
				</Text>
                <Text me='auto' color={red} fontSize='medium' lineHeight='100%'>
				{text}
                </Text>
                <ResponsiveBar
                    data = {data}
                    keys={keys}
                    indexBy={indexBy}
                    margin={{ top: 50, right: 120, bottom: 100, left: 80 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: axisBottomRotation,
                        legend: legendBottom,
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: legendLeft,
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
