<template>
	<v-row>
		<v-col cols="12">
			<Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
		</v-col>
	</v-row>
</template>

<script src="./chart.js"></script>
