'use client'

import { Typography, Button, TableContainer, Table, Paper, TableBody, TableRow, TableCell } from '@mui/material'

const PublicationsMolecule = () => {
	const publications = [
		{
			text: 'Beheshtian MJ, Bavand A, Rigby PC. (2021). Software Batch Testing to Save Build Test Resources and to Reduce Feedback Time. IEEE Transactions on Software Engineering (TSE’21).',
			links: [{ title: 'View paper', link: 'https://www.computer.org/csdl/journal/ts/5555/01/09392370/1sq7BkZ9nsk' }]
		},
		{
			text: "Bavand A, Rigby PC. (2021). Mining Historical Test Failures to Dynamically Batch Tests to Save CI Resources. International Conference on Software Maintenance and Evolution (ICSME'21)",
			links: [{ title: 'View paper', link: '/paper/Bavand2021ICSME.pdf' }]
		},
		{
			text: "Rehman M, Rigby PC. (2021). Quantifying No-Fault-Found Test Failures to Prioritize Inspection of Flaky Tests at Ericsson. ACM SIGSOFT International Symposium on Foundations of Software Engineering (FSE'21) Industry Track",
			links: [{ title: 'View paper', link: 'https://dl.acm.org/doi/abs/10.1145/3468264.3473930' }]
		},
		{
			text: "Querel L-P, Rigby PC. (2021). Warning-Introducing Commits vs Bug-Introducing Commits: A tool, statistical models, and a preliminary user study. International Conference on Program Comprehension in the Replication and Negative results track (ICPC'21-RENE).",
			links: [
				{ title: 'View paper', link: '/paper/Querel2021ICPC-RENE.pdf' },
				{ title: 'WarningsGuru tool', link: 'https://github.com/louisq/warningsguru' },
				{ title: 'Replication package', link: 'https://zenodo.org/record/3747582#.YGXmoUhKjlw' }
			]
		},
		{
			text: '"Do code review measures explain the incidence of post-release defects?" Krutauz, A., Dey, T., Rigby, P.C., Mockus, A., Empir Software Eng 25, 3323–3356 (EMSE\'20). Presented as a journal first paper at FSE\'20.',
			links: [{ title: 'View paper', link: 'https://doi.org/10.1007/s10664-020-09837-4' }]
		},
		{
			text: '"Mitigating Turnover with Code Review Recommendation: Balancing Expertise, Workload, and Knowledge Distribution" Ehsan Mirsaeedi, Peter C. Rigby. International Conference on Software Engineering (ICSE 2020).',
			links: [
				{ title: 'View paper', link: '/paper/Mirsaeedi2020ICSE.pdf' },
				{ title: 'Recorded talk', link: 'https://www.youtube.com/watch?app=desktop&v=G0QnVkHoiHQ' },
				{ title: 'Slides', link: 'https://drive.google.com/open?id=1aKORepREFURILPbY9Z4jHNmXU52aypfg' },
				{ title: 'Github app', link: 'https://github.com/apps/sofiarec' },
				{ title: 'Replication package', link: 'https://github.com/CESEL/RelationalGit' }
			]
		},
		{
			text: '"Improving Bug Triaging with High Confidence Predictions at Ericsson" Aindrila Sarkar, Peter C. Rigby, Bela Bartalos ICSME\'19',
			links: [
				{ title: 'PDF', link: '/paper/Sarkar2019ICSME.pdf' },
				{ title: 'Slides', link: 'https://docs.google.com/presentation/d/1zGdV_PlMKdFyw5Q_e83lOW7CiSCu-UbZDw_RdV7mGkY/edit?usp=sharing' }
			]
		},
		{
			text: '"Bisecting Commits and Modeling Commit Risk during Testing." Armin Najafi, Peter C. Rigby, Weiyi Shang. Foundations of Software Engineering, FSE\'19.',
			links: [{ title: 'PDF', link: '/paper/Najafi2019FSE.pdf' }]
		},
		{
			text: '"Natural Software Revisited" Musfiqur Rahman, Dharani Palani, Peter C. Rigby. International Conference on Software Engineering (ICSE 2019).',
			links: [
				{ title: 'PDF', link: 'https://drive.google.com/open?id=19zvuu-ebHWQBFNkalLjwqaZmSrwafnmW' },
				{ title: 'Slides', link: 'https://docs.google.com/presentation/d/1LAzjOtQel2ecfw2FS3pzwq3SRmNxnG9_EaNEunV9y4o/edit?usp=sharing' }
			]
		},
		{
			text: '“Etiquette, Incompetence, Codes of Conduct on Open Source Software Projects” Peter C. Rigby. Keynote at OSS conference.',
			links: [{ title: 'Slides', link: 'https://docs.google.com/presentation/d/1HRyI-v1S2f8ez3vzc-70JXnNQjGM22hQWr0dS3gFidM/edit?usp=sharing' }]
		},
		{
			text: '"Improving Test Effectiveness Using Test Executions History: An Industrial Experience Report" Armin Najafi, Weiyi Shang, Peter C. Rigby. International Conference on Software Engineering (ICSE Industry Track 2019).',
			links: [{ title: 'PDF', link: 'https://drive.google.com/file/d/18iYWqFVUQxIm23pEioC7Raxw2dC1FbVE/view?usp=sharing' }]
		},
		{
			text: '"Mining Historical Test Logs to Predict Bugs and Localize Faults in the Test Logs" Anunay Amar, Peter C. Rigby. International Conference on Software Engineering (ICSE 2019).',
			links: [
				{ title: 'PDF', link: 'https://drive.google.com/file/d/1mC84Tmxw6HqNyJxv3HiS5vkmtwv5Q-yd/view?usp=sharing' },
				{ title: 'Slides', link: 'https://docs.google.com/presentation/d/1Ymup9yBPZHSGknTtnPy1drC_b5fMXR7FLDx8jGbvu2w/edit?usp=sharing' }
			]
		},
		{
			text: '"Cleaning StackOverflow for use in Machine Translation" Musfiqur Rahman, Dharani Palani, Peter C. Rigby, Tien Nguyen. Mining Software Repository (MSR data track 2019).',
			links: [
				{ title: 'PDF', link: 'https://drive.google.com/file/d/1J--ZoJeylFdFdOdDVJkUajuTNTlR05tj/view?usp=sharing' },
				{ title: 'Slides', link: 'https://docs.google.com/presentation/d/1dJXl1PeoXb8ZLpvIM-QfK4ZBdhqQDgN7W59xNYhpa8s/edit?usp=sharing' }
			]
		},
		{
			text: "Rahman MT*, Rigby PC, Shihab E. (2018). The Modular and Feature Toggle Architectures of Google Chrome. Empirical Software Engineering (EMSE) Presented as a journal first paper at FSE'18.",
			links: [{ title: 'PDF', link: 'https://rdcu.be/3e9k' }]
		},
		{
			text: "Zhu Y*, Shihab E, Rigby PC. (2018). Test Re-prioritization in Continuous Testing Environments. The 34th International Conference on Software Maintenance and Evolution (ICSME'18).",
			links: [
				{ title: 'PDF', link: '/paper/Zhu2018ICSME.pdf' },
				{ title: 'Slides', link: 'https://docs.google.com/presentation/d/17SVkQbw2iwy4IenWTF9xGCEcxU7WxcIoN_eBqm-dFDE/edit?usp=sharing' }
			]
		},
		{
			text: "Nguyen AT, Rigby PC, Nguyen T, Palani D*, Karanfil M*, Nguyen NT. (2018). Statistical Translation of English Texts to API Code Templates. The 34th International Conference on Software Maintenance and Evolution (ICSME'18).",
			links: [{ title: 'PDF', link: '/paper/T2API2018ICSME.pdf' }]
		},
		{
			text: 'Rahman MT*, Rigby PC. (2018). The Impact of Failing, Flaky, and High Failure Tests on the number of Crash Reports associated with Firefox Builds. Symposium on the Foundations of Software Engineering ESEC/FSE 2018 (Industry Track).',
			links: [{ title: 'PDF', link: '/paper/Rahman2018FseIndustry.pdf' }]
		},
		{
			text: 'Querel LP*, Rigby PC. (2018). WarningsGuru: Integrating statistical bug models with static analysis to provide timely and specific bug warnings. Symposium on the Foundations of Software Engineering ESEC/FSE 2018 (Formal Demonstration Track).',
			links: [{ title: 'PDF', link: '/paper/Querel2018FseDemo.pdf' }]
		}
	]

	return (
		<>
			<Typography variant="h5" component="h3" gutterBottom>
				Publications
			</Typography>

			<Typography variant="body1" textAlign="justify" gutterBottom sx={{ mb: 3 }}>
				See{' '}
				<Button href="https://scholar.google.ca/citations?user=lGVxz58AAAAJ&hl=en" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					my Google Scholar
				</Button>{' '}
				profile for the complete publication list. An <b>incomplete</b> list of my recent publications and pre-prints follows:
			</Typography>

			<TableContainer component={Paper}>
				<Table aria-label="publications">
					<TableBody>
						{publications.map((paper, index) => {
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

export default PublicationsMolecule
