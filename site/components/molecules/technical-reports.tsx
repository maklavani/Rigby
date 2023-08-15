'use client'

import { Typography, TableContainer, Table, Paper, TableBody, TableRow, TableCell } from '@mui/material'

const TechnicalReportsMolecule = () => {
	const technicalReports = [
		{
			text: 'Peter C. Rigby, and Daniel M. German. A preliminary examination of code review processes in open source projects. Tech. Rep. DCS-305-IR, University of Victoria, January 2006.'
		},
		{
			text: 'Peter C. Rigby, and Eric G. Manning. Network congestion control mechanism based on the minimum bid in randomized auctions. Tech. rep., University of Victoria, December 2005.'
		},
		{
			text: 'Peter C. Rigby, and Daniel M. German. Towards the Characterization of Open Source Projects: A Framework and its Application. Tech. rep., University of Victoria, December 2005.'
		}
	]

	return (
		<>
			<Typography id="technical" variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
				Technical Reports
			</Typography>

			<TableContainer component={Paper}>
				<Table aria-label="publications">
					<TableBody>
						{technicalReports.map((paper, index) => {
							return (
								<TableRow key={index}>
									<TableCell>{paper.text}</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default TechnicalReportsMolecule
