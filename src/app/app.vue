<template>
	<v-app>
		<v-app-bar app color="dark" dark>
			<h1>Functional Programming</h1>
		</v-app-bar>

		<v-content>
			<v-container>
				<v-row>
					<v-col cols="12">
						<chart />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<grid />
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

<script src="./app.js"></script>
