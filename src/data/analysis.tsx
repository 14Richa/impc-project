import { PhenotypeData } from "views/admin/dataTables";
import { BarDatum } from "@nivo/bar";

const jsonData = require('./data.json');



export function calculateTopGenes(data: PhenotypeData[], threshold: number): PhenotypeData[] {
  const sortedData = [...data].sort((a, b) => b.phenotype_count - a.phenotype_count);
  const topCount = Math.ceil(sortedData.length * threshold / 100);
  return sortedData.slice(0, topCount);
}

type Gene = {
	marker_symbol: string;
};

export function getUniqueGeneOptions(data: PhenotypeData[]): string[]{
    const genes: Gene[] = data.map((item: { marker_symbol: any; }) => ({ marker_symbol: item.marker_symbol }));
  	const geneOptions: string[] = genes.map((gene) => gene.marker_symbol);
  	const geneSet = new Set(geneOptions);
  	const allGenes = Array.from(geneSet);
    return allGenes;
}

type Phenotype = {
	top_level_mp_term_name: string;
};

export interface BarChartDatum {
    "phenotype count": number;
    "frequency": number;
    "color": string;
}

export function generatePhenotypeCountFreqChartData(): BarDatum[]{
    const data: PhenotypeData[] = jsonData;
    const frequency : { [count: number]: number } = {};
    for (let i = 0; i < data.length; i++) {
        const count = data[i].phenotype_count;
        if (frequency[count]) {
          frequency[count]++;
        } else {
          frequency[count] = 1;
        }
    }

    const res: BarDatum[] = [];
    for (const num in frequency) {
      res.push({
        freq: parseInt(num),
        count: frequency[num],
      });
    }
    return res;
};

export function generatePhenotypeFreqChartData(): BarDatum[]{

	const data: PhenotypeData[] = jsonData;
    const frequency : { [phenotype: string]: number } = {};
    for (let i = 0; i < data.length; i++) {
		const phenotype = data[i].top_level_phenotype_term.top_level_mp_term_name
    	if (frequency[phenotype]) {
      		frequency[phenotype]++;
    	} else {
      		frequency[phenotype] = 1;
    	}
    }

    const res: BarDatum[] = [];
    for (const phenotype in frequency) {
      res.push({
        phenotype: phenotype,
        count: frequency[phenotype],
      });
    }
    return res;
};

export function getUniquePhenotypeOptions(data: PhenotypeData[]): string[]{
    const phenotypes: Phenotype[] = data.map((item: { top_level_phenotype_term: { top_level_mp_term_name: any; }; }) => ({ top_level_mp_term_name: item.top_level_phenotype_term.top_level_mp_term_name }));
  	const phenotypeOptions: string[] = phenotypes.map((phenotype) => phenotype.top_level_mp_term_name);
  	const phenotypeSet = new Set(phenotypeOptions);
  	const allPhenotypes = Array.from(phenotypeSet);
    return allPhenotypes;
}

export interface HeatmapData {
	id: string;
	data: { x: string; y: number }[];
}
export function getDataForHeatmap(data: PhenotypeData[], selectedGenes: string[], selectedPhenotypes: string[], dataSize:number): HeatmapData[] {
	const filteredData = data.filter((item) => {
	  const { marker_symbol, top_level_phenotype_term } = item;
	  const { top_level_mp_term_name } = top_level_phenotype_term;
	  return selectedGenes.includes(marker_symbol) && selectedPhenotypes.includes(top_level_mp_term_name);
	});
  
	const heatmapData: HeatmapData[] = [];
	const markerToData = new Map<string, { x: string; y: number }[]>();
  
	for (let i = 0; i < filteredData.length; i++) {
	  const { marker_symbol, top_level_phenotype_term, phenotype_count } = filteredData[i];
	  const { top_level_mp_term_name } = top_level_phenotype_term;
  
	  const pair: { x: string, y: number } = {x: top_level_mp_term_name, y: phenotype_count};
  
	  if (markerToData.has(marker_symbol)) {
		markerToData.get(marker_symbol)!.push(pair);
	  } else {
		markerToData.set(marker_symbol, [pair]);
	  }
	}
  
	markerToData.forEach((value: { x: string; y: number }[], key: string) => {
	  heatmapData.push({
		id: key,
		data: value,
	  });
	});
  
	return heatmapData.slice(0, dataSize);
}