import grid from '@/components/grid/grid.vue';
import chart from '@/components/chart/chart.vue';

export default {
	name: 'App',
	components: {
		grid,
		chart
	},
	created() {
		this.$vuetify.theme.dark = true;
	}
};
