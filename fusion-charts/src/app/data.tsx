export const pieRainRegions = {
  type: 'pie2d',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Répartition de la pluviométrie par région (2024)',
      plottooltext: '<b>$percentValue</b> de la pluie totale est dans $label',
      showlegend: '1',
      showpercentvalues: '1',
      legendposition: 'bottom',
      usedataplotcolorforlabels: '1',
      theme: 'fusion',
      bgColor: '#f4f4f4',
    },
    data: [
      { label: 'Nord', value: '120' },
      { label: 'Sud', value: '90' },
      { label: 'Est', value: '110' },
      { label: 'Ouest', value: '80' },
      { label: 'Centre', value: '130' },
    ],
  },
};

export const monthlyRainfallChart = {
  type: 'mscolumn2d',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Pluviométrie mensuelle (2023 vs 2024)',
      xAxisName: 'Mois',
      yAxisName: 'Pluie (mm)',
      theme: 'fusion',
      bgColor: '#f4f4f4',
    },
    categories: [
      {
        category: Array.from({ length: 12 }, (_, i) => ({
          label: (i + 1).toString().padStart(2, '0'),
        })),
      },
    ],
    dataset: [
      {
        seriesname: '2023',
        data: [
          { value: '80' },
          { value: '70' },
          { value: '100' },
          { value: '110' },
          { value: '140' },
          { value: '120' },
          { value: '85' },
          { value: '75' },
          { value: '90' },
          { value: '105' },
          { value: '80' },
          { value: '65' },
        ],
      },
      {
        seriesname: '2024',
        data: [
          { value: '78' },
          { value: '62' },
          { value: '90' },
          { value: '120' },
          { value: '150' },
          { value: '130' },
          { value: '80' },
          { value: '70' },
          { value: '95' },
          { value: '110' },
          { value: '85' },
          { value: '60' },
        ],
      },
    ],
  },
};