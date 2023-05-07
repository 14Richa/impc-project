import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import {useState } from 'react';


function valuetext(value: number) {
  return `${value}%`;
}

interface RangeSliderProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export default function RangeSlider(props: RangeSliderProps) {

	const [topGenethreshold, setThreshold] = useState<number>(props.threshold);
  
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="subtitle1" gutterBottom>
        Filter top {topGenethreshold}% of the genes that have the highest phenotype count
      </Typography>
      <Slider
        aria-label="Top gene threshold"
        defaultValue={topGenethreshold}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
        onChange={(event, value) => {
          setThreshold(value as number);
          props.onThresholdChange(value as number);
        }}
      />
    </Box>
  );
}
