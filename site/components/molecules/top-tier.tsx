'use client'

import { Typography, Button, TableContainer, Table, Paper, TableBody, TableRow, TableCell } from '@mui/material'

const TopTierMolecule = () => {
	const topTier = [
		{
			text: 'Shams Azad, Peter C. Rigby, and Latifa Guerrouj. Generating api call rules from version history and stack overflow posts. ACM Trans. Softw. Eng. Methodol. Selected to be presented as a journal first publication at ICSE’17 25, 4, Jan. 2017, 29:1–29:22.',
			links: [{ title: 'PDF', link: '/paper/Azad2017TOSEM.pdf' }]
		},
		{
			text: 'Peter C. Rigby, Yue Cai Zhu, Samuel Donadelli, and Audris Mockus. Quantifying and Mitigating Turnover-Induced Knowledge Loss: Case Studies of Chrome and a Project at Avaya. In Proceedings of the 2016 International Conference on Software Engineering, 2016, ICSE ’16. (Acceptance rate: 101/530 or 19%).',
			links: [{ title: 'PDF', link: '/paper/Rigby2016ICSE.pdf' }]
		},
		{
			text: 'Md Tajmilur Rahman, and Peter C. Rigby. Release stabilization on linux and chrome. Software, IEEE 32, 2, Mar 2015, 81–88.',
			links: [{ title: 'PDF', link: '/paper/Rahman2015IEEES-preprint.pdf' }]
		},
		{
			text: 'Peter C. Rigby, Daniel M. German, Laura Cowen, and Margaret-Anne Storey. Peer Review on Open-Source Software Projects: Parameters, Statistical Models, and Theory. ACM Trans. Softw. Eng. Methodol. 23, 4, 2014, 35:1–35:33.',
			links: [{ title: 'PDF', link: '/paper/Rigby2014TOSEM.pdf' }]
		},
		{
			text: 'Peter C. Rigby, and Christian Bird. Convergent contemporary software peer review practices. In Proceedings of the 2013 9th Joint Meeting on Foundations of Software Engineering, 2013, ESEC/FSE 2013, ACM, pp. 202–212. (Acceptance rate: 51/251 or 20%).',
			links: [{ title: 'PDF', link: '/paper/Rigby2013FSE.pdf' }]
		},
		{
			text: 'Peter C. Rigby, and Martin P. Robillard. Discovering Essential Code Elements in Informal Documentation. In Proceedings of the 2013 International Conference on Software Engineering, 2013, ICSE ’13, IEEE Press, pp. 832–841. (Acceptance rate: 85/461 or 18.5%).',
			links: [{ title: 'PDF', link: '/paper/RR2013ICSE.pdf' }]
		},
		{
			text: 'Peter Rigby, Brendan Cleary, Frederic Painchaud, Margaret-Anne Storey, and Daniel German. Contemporary peer review in action: Lessons from open source development. IEEE Software 29, 6, Nov. 2012, 56–61.',
			links: [{ title: 'PDF', link: '/paper/Rigby2012IEEE.pdf' }]
		},
		{
			text: 'Peter C. Rigby, and Margaret-Anne Storey. Understanding broadcast based peer review on open source software projects. In Proceeding of the 33rd International Conference on Software Engineering, 2011, ICSE ’11, ACM, pp. 541–550. (Acceptance rate: 62/441 or 14%).',
			links: [{ title: 'PDF', link: '/paper/Rigby2011ICSE.pdf' }]
		},
		{
			text: 'Peter C. Rigby, Daniel M. German, and Margaret-Anne Storey. Open source software peer review practices: A case study of the apache server. In ICSE ’08: Proceedings of the 30th International Conference on Software engineering, 2008, ACM, pp. 541–550. (Acceptance rate: 56/371 or 15%).',
			links: [{ title: 'PDF of the extended TOSEM version', link: '/paper/Rigby2014TOSEM.pdf' }]
		}
	]

	return (
		<>
			<Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
				Top-tier Journal and Conference Publications
			</Typography>

			<TableContainer component={Paper}>
				<Table aria-label="publications">
					<TableBody>
						{topTier.map((paper, index) => {
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

export default TopTierMolecule
