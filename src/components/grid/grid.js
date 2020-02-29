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
		currentItem(column) {
			const unsortedData = gridData;
			if (column !== 'ORIGINAL') {
				const sortByStatus = sortDataByColumn(column);
				this.rowData = sortByStatus(gridData);
			} else if (column == 'ORIGINAL') {
				this.rowData = unsortedData;
			}
		}
	}
};
