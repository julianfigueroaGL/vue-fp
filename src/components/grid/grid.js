import { AgGridVue } from 'ag-grid-vue';
import { gridData } from '@/utils/constants';
// import { isEmpty } from 'ramda';
export default {
	name: 'grid',
	data: () => ({
		columnDefs: null,
		rowData: gridData,
		sortOptions: [
			{ text: 'Original', callback: () => console.log('Original') },
			{ text: 'Node Name', callback: () => console.log('Node name') },
			{ text: 'Trade Type', callback: () => console.log('Trade Type') },
			{ text: 'Book Name', callback: () => console.log('Book Name') }
		],
		currentItem: ''
	}),
	components: {
		AgGridVue
	},
	beforeMount() {
		this.columnDefs = [
			{ headerName: 'Node', field: 'PNODENAME' },
			{ headerName: 'Trade Type', field: 'TRADETYPE' },
			{ headerName: 'Book name', field: 'BOOKNAME' },
			{ headerName: 'Iso', field: 'ISO' },
			{ headerName: 'Bid Type', field: 'BID_OR_MW' },
			{ headerName: 'Notes', field: 'NOTES' },
			{ headerName: 'Active', field: 'ACTIVE' }
		];
	},
	methods: {
		sortByColumn(option) {
			console.log(option);
			console.log(this.select);
		}
	}
};
