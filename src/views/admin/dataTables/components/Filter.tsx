import { CSSProperties, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import RangeSlider from "./RangeSlider";


interface FilterProps {
  threshold: number;
  phenotypes: string[];
  genes: string[];
  onSelectionChange: (genes: string[], phenotypes: string[]) => void;
  onThresholdChange: (threshold: number) => void;
}

export default function Filter(props: FilterProps) {
  const filterStyle: CSSProperties = {
    position: "relative",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "65px",
    alignItems: "center",
  };

  const filterContainerStyle = {
    display: "flex",
  };
  
  // Extract the marker_symbol values from the JSON data

  const [selectedPhenotypes, setSelectedPhenotypes] = useState<string[]>([]);
  const [selectedGenes, setSelectedGenes] = useState<string[]>([]);

  const handleGeneSelection = (event: any, selectedGenes: string[]) => {
    setSelectedGenes(selectedGenes);
    setSelectedPhenotypes([])
    props.onSelectionChange(selectedGenes, props.phenotypes);
  };

  const handlePhenotypeSelection = (event: any, selectedPhenotypes: any) => {
    setSelectedPhenotypes(selectedPhenotypes);
    setSelectedGenes([])
    props.onSelectionChange(props.genes, selectedPhenotypes);
  };

  return (
  <div style={filterContainerStyle}>
    <div style={filterStyle}>
      <div>
        <Autocomplete
        multiple
        id="geneTypes"
        placeholder="Select genes"
        limitTags={2}
        options={props.genes}
        value={selectedGenes}
        onChange={handleGeneSelection}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select genes"
            InputLabelProps={{
              shrink: true,
              style: { color: 'grey' }
            }}
          />
        )}
        sx={{ width: '300px' }}
      />
      </div>
      <div><RangeSlider threshold={props.threshold} onThresholdChange={props.onThresholdChange}/></div>
      <div>
      <Autocomplete
        id="phenotypeSystem"
        options={props.phenotypes}
        multiple
        placeholder="Select top level phenotype system"
        limitTags={1}
        value={selectedPhenotypes}
        onChange={handlePhenotypeSelection}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select top level phenotype system"
            InputLabelProps={{
              shrink: true,
              style: { color: 'grey' }

            }}
          />
        )}
        sx={{ width: '300px' }}
      />
      </div>
    </div>
  </div>
  
  );
}

