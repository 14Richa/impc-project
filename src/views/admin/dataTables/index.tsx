
// Chakra imports
import { Box } from '@chakra-ui/react';
import Heatmap from 'views/admin/dataTables/components/DevelopmentTable';
import Filter from './components/Filter';
import { useState } from 'react';
import { calculateTopGenes, getUniqueGeneOptions, getUniquePhenotypeOptions, getDataForHeatmap } from '../../../data/analysis';
const jsonData = require('../../../data/preprocessed.json');


export interface PhenotypeData {
	marker_accession_id: string;
	marker_symbol: string;
	top_level_phenotype_term: {
	  top_level_mp_term_id: string;
	  top_level_mp_term_name: string;
	};
	procedures: string[];
	phenotype_terms: {
	  mp_term_id: string;
	  mp_term_name: string;
	}[];
	phenotype_count: number;
}


  



export default function Settings() {

	const [topGenethreshold, setThreshold] = useState<number>(100);
	

	const phenotypeData: PhenotypeData[] = jsonData;
	const restrictedData = calculateTopGenes(phenotypeData, topGenethreshold);
	// console.log("Top genethreshold: ", topGenethreshold)
	// console.log("Restricted data: ", restrictedData.length)
  	
	
  	const allGenes = getUniqueGeneOptions(restrictedData);
	const allPhenotypes = getUniquePhenotypeOptions(restrictedData);
	console.log("All pheno: ", allPhenotypes.length)


	const [selectedGenes, setSelectedGenes] = useState<string[]>(allGenes);
	const [selectedPhenotypes, setSelectedPhenotypes] = useState<string[]>(allPhenotypes);
	
	if (selectedGenes.length === 0) {
		setSelectedGenes(allGenes);
	}
	if (selectedPhenotypes.length === 0) {
		setSelectedPhenotypes(allPhenotypes);
	}

	const heatmapData = getDataForHeatmap(restrictedData, selectedGenes, selectedPhenotypes, 100);

	
	  return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
		  <Filter
		  	threshold={topGenethreshold}
			genes={allGenes}
			phenotypes={allPhenotypes}
			onSelectionChange={(genes, phenotypes) => {
			  setSelectedGenes(genes);
			  setSelectedPhenotypes(phenotypes);
			}}
			onThresholdChange={(threshold: number) => {
					setThreshold(threshold);
			}}
		  />
		  <Heatmap heatmapData={heatmapData} />
		</Box>
	  );
	}