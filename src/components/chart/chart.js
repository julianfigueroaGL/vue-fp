import { Plotly } from 'vue-plotly';
import { chartData } from '@/utils/constants';

export default {
	name: 'chart',
	components: {
		Plotly
	},
	data: () => ({
		data: chartData,
		layout: {
			title: 'My graph',
			barmode: 'relative',
			plot_bgcolor: 'black',
			paper_bgcolor: 'rgba(0,0,0,0)',
			width: 400
		}
	})
};
