export const initialCostsDataHeaders = [
	{ field: "Procedimiento", headerName: "Procedimiento", width: 150 },
	{ field: "Costos", headerName: "Costos", width: 100 },
	{ field: "Material", headerName: "Material", width: 150 },
	{ field: "Costos_2", headerName: "Costos", width: 100 },
	{ field: "Medicacion", headerName: "Medicacion", width: 150 },
	{ field: "Costos_3", headerName: "Costos", width: 100 },
	{ field: "Pruebas", headerName: "Pruebas", width: 150 },
	{ field: "Costos_4", headerName: "Costos", width: 150 },
	{ field: "Abonos", headerName: "Abonos", width: 150 },
	{ field: "Total", headerName: "Total", width: 150 },
];

export const initialCostsDataBody = [
	{
		Procedimiento: "",
		Costos: "",
		Material: "",
		Costos_2: "",
		Medicacion: "",
		Costos_3: "",
		Pruebas: "",
		Costos_4: "",
		Abonos: "",
		Total: "",
	},
];

export const initialAdminMedDataHeaders = [
	{ field: "Medication_Dosis", headerName: "Medication / Dosis", width: 350 },
	{ field: "hour_1", headerName: "10", width: 80 },
	{ field: "hour_2", headerName: "11", width: 80 },
	{ field: "hour_3", headerName: "12", width: 80 },
	{ field: "hour_4", headerName: "1", width: 80 },
	{ field: "hour_5", headerName: "2", width: 80 },
	{ field: "hour_6", headerName: "3", width: 80 },
	{ field: "hour_7", headerName: "4", width: 80 },
	{ field: "hour_8", headerName: "5", width: 80 },
	{ field: "hour_9", headerName: "6", width: 80 },
	{ field: "hour_10", headerName: "7", width: 80 },
	{ field: "hour_11", headerName: "8", width: 80 },
	{ field: "hour_12", headerName: "9", width: 80 },
	{ field: "hour_13", headerName: "10", width: 80 },
	{ field: "hour_14", headerName: "11", width: 80 },
	{ field: "observations", headerName: "Observations", width: 250 },
];

export const initialAdminMedDataBody = [
	{
		Medication_Dosis: "",
		hour_1: "",
		hour_2: "",
		hour_3: "",
		hour_4: "",
		hour_5: "",
		hour_6: "",
		hour_7: "",
		hour_8: "",
		hour_9: "",
		hour_10: "",
		hour11: "",
		hour_12: "",
		hour_130: "",
		hour_14: "",
		observations: "",
	},
];

export const mockAdminMedData = {
	headerData: initialAdminMedDataHeaders,
	bodyData: initialAdminMedDataBody,
};

export const initialCostsData = {
	headerData: initialCostsDataHeaders,
	bodyData: initialCostsDataBody,
};
