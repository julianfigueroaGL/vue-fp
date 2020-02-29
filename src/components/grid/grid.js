import { AgGridVue } from 'ag-grid-vue';
import { gridData, optionsToSortBy, dataGridColumns } from '@/utils/constants';
import { sortDataByColumn } from '@/utils/sorting/index';

export default {
	name: 'grid',
	data: () => ({
		columnDefs: null,
		rowData: gridData,
		sortOptions: optionsToSortBy,
		currentItem: ''
	}),
	components: {
		AgGridVue
	},
	beforeMount() {
		this.columnDefs = dataGridColumns;
	},
	watch: {
		currentItem(option) {
			const unsortedData = gridData;
			if (option !== 'ORIGINAL') {
				const sortByStatus = sortDataByColumn(option);
				this.rowData = sortByStatus(gridData);
			} else if (option == 'ORIGINAL') {
				this.rowData = unsortedData;
			}
		}
	}
};
