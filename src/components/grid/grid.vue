<template>
	<v-row>
		<v-col cols="12" sm="3">
			<p>Sort</p>
			<v-select
				v-model="currentItem"
				class="my-2"
				:items="sortOptions"
				label="Original"
				segmented
				@click="sortByColumn(select)"
			></v-select>
		</v-col>
		<v-col cols="12" sm="9">
			<ag-grid-vue
				style="width: 1350px; height: 1200px;"
				class="ag-theme-balham-dark"
				:columnDefs="columnDefs"
				:rowData="rowData"
			>
			</ag-grid-vue>
		</v-col>
	</v-row>
</template>

<script src="./grid.js"></script>

<style lang="scss" src="./grid.scss" scoped></style>
