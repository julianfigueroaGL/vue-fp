import { pipe, flatten, groupBy, map, prop, sortBy, toPairs } from 'ramda';

const GROUP_PROPERTY = 'TRANSACTIONID';

export const sortDataByColumn = (sortProperty, groupProperty = GROUP_PROPERTY) => {
	const valuesKey = 'rows';

	const pairsToObject = ([key, rows]) => {
		return {
			[groupProperty]: key,
			[sortProperty]: rows[0][sortProperty],
			[valuesKey]: rows
		};
	};

	const sortById = pipe(groupBy(prop(groupProperty)), toPairs, map(pairsToObject));

	const ungroup = pipe(
		map(group => group[valuesKey]),
		flatten
	);

	return pipe(sortById, sortBy(prop(sortProperty)), ungroup);
};
