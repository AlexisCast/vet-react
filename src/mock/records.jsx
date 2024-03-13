export const mockCostsDataHeaders = [
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

export const mockCostsDataBody = [
	{
		Procedimiento: "Canalizacion",
		Costos: 350,
		Material: "Paniales",
		Costos_2: 30,
		Medicacion: "Metro",
		Costos_3: 95,
		Pruebas: "Perfilcomp",
		Costos_4: 1500,
		Abonos: "",
		Total: "",
	},
	{
		Procedimiento: "Canalizacion 2",
		Costos: 350,
		Material: "Paniales 4",
		Costos_2: 30,
		Medicacion: "Metro",
		Costos_3: 952,
		Pruebas: "Perfilcomp 5",
		Costos_4: 1500,
		Abonos: "",
		Total: "",
	},
];

export const mockAdminMedDataHeaders = [
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

export const mockAdminMedDataBody = [
	{
		Medication_Dosis: "Medication test1",
		hour_1: "10:23",
		hour_2: "",
		hour_3: "",
		hour_4: "1:34",
		hour_5: "",
		hour_6: "3:34",
		hour_7: "4:21",
		hour_8: "",
		hour_9: "6:01",
		hour_10: "",
		hour11: "",
		hour_12: "9:30",
		hour_130: "",
		hour_14: "11:02",
		observations: "test 1",
	},
	{
		Medication_Dosis: "med 34e",
		hour_1: "",
		hour_2: "11:34",
		hour_3: "",
		hour_4: "1:34",
		hour_5: "",
		hour_6: "3:34",
		hour_7: "4:21",
		hour_8: "",
		hour_9: "6:01",
		hour_10: "",
		hour11: "8:23",
		hour_12: "9:30",
		hour_13: "",
		hour_14: "",
		observations: "test 2",
	},
];

export const mockAdminMedData = {
	headerData: mockAdminMedDataHeaders,
	bodyData: mockAdminMedDataBody,
};

export const mockCostsData = {
	headerData: mockCostsDataHeaders,
	bodyData: mockCostsDataBody,
};

export const mockRecordsData = {
	total: 2,
	records: [
		{
			patient: {
				id: "65e852f8588baec917f45cac",
				name: "A CAT 1",
				specie: "GATO",
				ownerName: "LAKIEL DANIEL",
				ownerLastName: "CAST",
			},
			createdAt: "2024-03-13T09:31:06.000Z",
		},
		{
			patient: {
				id: "65e7cca4bfb80ced27f7efb8",
				name: "A DOG",
				specie: "GATO",
				ownerName: "LAKIEL DANIEL",
				ownerLastName: "CAST",
			},
			createdAt: "2024-03-13T09:31:14.000Z",
		},
	],
};
