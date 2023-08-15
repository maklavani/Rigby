'use client'

import { Typography, Button, TableContainer, Table, Paper, TableBody, TableRow, TableCell } from '@mui/material'

const OtherReferredMolecule = () => {
	const otherReferred = [
		{
			text: 'Md Tajmilur Rahman, Louis Querel, Peter C. Rigby, and Bram Adams. Feature Toggles: A case study and survey. In Proceedings of the 13th Working Conference on Mining Software Repositories, 2016, MSR ’16. (Acceptance rate: 36/103 or 27%).',
			links: [{ title: 'PDF', link: '/paper/Rahman2016MSR.pdf' }]
		},
		{
			text: 'Latifa Guerrouj, David Bourque, and Peter C. Rigby. Leveraging Informal Documentation to Summarize Classes and Methods in Context. In 37th IEEE New Ideas Emerging Research track of the International Conference on Software Engineering, 2015, NIER ’15, IEEE Press. (Acceptance rate: 25/135 or 18%).'
		},
		{
			text: 'Samuel M. Donadelli, Yue Cai Zhou, and Peter C. Rigby. Organizational volatility and post-release defects: A replication case study using data from Google Chrome. In Proceedings of the 12th Working Conference on Mining Software Repositories, 2015.'
		},
		{
			text: 'Latifa Guerrouj, Shams Azad, and Peter C. Rigby. The Influence of App Churn on App Success and StackOverflow Discussions. In 22nd IEEE International Conference on Software Analysis, Evolution, and Reengineering, 2015, SANER ’15, IEEE Press. (Acceptance rate: 46/144 or 32%).'
		},
		{
			text: 'Peter C. Rigby, Alberto Bacchelli, Georgios Gousios, and Murtuza Mukadam. A Mixed Methods Approach to Mining Code Review Data: Examples and a replication study of multi-commit reviews. In Analyzing Software Data, C. Bird, T. Menzies, and T. Zimmermann, Eds. Morgan Kaufmann, 2015.'
		},
		{
			text: 'Md Tajmilur Rahman, and Peter C. Rigby. Contrasting Development and Release Stabilization Work on the Linux Kernel. In International Workshop on Release Engineering 2014.',
			links: [{ title: 'PDF', link: '/paper/Rahman2014RelEng.pdf' }]
		},
		{
			text: 'Murtuza Mukadam, Christian Bird, and Peter C. Rigby. Gerrit software code review data from android. In Proceedings of the 10th Working Conference on Mining Software Repositories, 2013, MSR ’13, IEEE Press, pp. 45–48.'
		},
		{
			text: 'Peter C. Rigby, Earl T Barr, Christian Bird, Prem Devanbu, and Daniel M German. What Effect does Distributed Version Control have on OSS Project Organization? In International Workshop on Release.'
		},
		{
			text: 'Earl T. Barr, Christian Bird, Peter C. Rigby, Abram Hindle, Daniel M. German, and Premkumar Devanbu. Cohesive and isolated development with branches. In Proceedings of the 15th International Conference on Fundamental Approaches to Software Engineering (FASE’12), 2012.'
		},
		{
			text: 'Christian Bird, Peter C. Rigby, Earl T. Barr, David J. Hamilton, Daniel M. German, and Prem Devanbu. The promises and perils of mining git. In MSR ’09: Proceedings of the 2009 6th IEEE International Working Conference on Mining Software Repositories, 2009, IEEE Computer Society, p. 10. (Acceptance rate: 14/47 or 30%).'
		},
		{
			text: 'Peter C. Rigby, and Ahmed E. Hassan. What can oss mailing lists tell us? a preliminary psychometric text analysis of the apache developer mailing list. In MSR ’07: Proceedings of the Fourth International Workshop on Mining Software Repositories, 2007, IEEE Computer Society, p. 10. (Acceptance rate: 15/39 or 38%).'
		},
		{
			text: 'Daniel M. German, Peter C. Rigby, and Margaret-Anne Storey. Using evolutionary annotations from change logs to enhance program comprehension. In MSR ’06: Proceedings of the 2006 international workshop on Mining software repositories, 2006, ACM Press, pp. 159–162.'
		},
		{
			text: 'Margaret-Anne Storey, Li-Te Cheng, Ian Bull, and Peter Rigby. Shared waypoints and social tagging to support collaboration in software development. In CSCW ’06: Proceedings of the 2006 20th anniversary conference on Computer supported cooperative work, 2006, ACM Press, pp. 195–198.'
		},
		{
			text: 'Margaret-Anne Storey, Li-Te Cheng, Ian Bull, and Peter Rigby. Waypointing and social tagging to support program navigation. In CHI ’06: CHI ’06 extended abstracts on Human factors in computing systems, 2006, ACM Press, pp. 1367–1372.'
		},
		{
			text: 'Peter C. Rigby, Davor Čubranić, Suzanne Thompson, Daniel M. German, and Margaret-Anne Storey. The challenges of creating open source educational software: the Gild experience. In Open Educational Symposium of the 1st International Conference on Open Source Systems, 2005, pp. 338–340.'
		},
		{
			text: 'Peter C. Rigby, and Suzanne Thompson. Study of novice programmers using Eclipse and Gild. In eclipse ’05: Proceedings of the 2005 OOPSLA workshop on Eclipse technology eXchange, 2005, ACM Press, pp. 105–109.'
		}
	]

	return (
		<>
			<Typography id="other" variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
				Other referred publications
			</Typography>

			<TableContainer component={Paper}>
				<Table aria-label="publications">
					<TableBody>
						{otherReferred.map((paper, index) => {
							return (
								<TableRow key={index}>
									<TableCell>{paper.text}</TableCell>

									<TableCell>
										{paper.links &&
											paper.links.map((item, index) => {
												return (
													<Button key={index} href={item.link} target="_black" sx={{ textTransform: 'capitalize' }}>
														{item.title}
													</Button>
												)
											})}
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default OtherReferredMolecule
