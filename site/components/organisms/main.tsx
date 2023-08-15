'use client'

import dynamic from 'next/dynamic'
import { Box, Toolbar, Typography, Button } from '@mui/material'

// Components
const PublicationsMolecule = dynamic(() => import('@/components/molecules/publications'))
const TopTierMolecule = dynamic(() => import('@/components/molecules/top-tier'))

const MainOrganism = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Toolbar />

			<Typography variant="h4" component="h3" gutterBottom>
				Bio and Research Interests
			</Typography>

			<Typography variant="body1" textAlign="justify" gutterBottom sx={{ mb: 3 }}>
				Peter C. Rigby is an associate professor in Software Engineering at{' '}
				<Button href="http://www.cs.concordia.ca/" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Concordia University
				</Button>{' '}
				in Montreal. His overarching research interest is in understanding how developers collaborate to produce successful software systems. His research program is driven
				by a desire to determine empirically the factors that lead to the development of successful software and to adapt, apply, and validate these techniques in different
				settings. Empirical Software Engineering involves mining large data sets to provide an empirical basis for software engineering practices. Software Analytics is
				then used to provide statistical predictions of, for example, the areas of the system that would benefit from increased developer attention. Grounded, empirical
				findings are necessary to advance software development as an engineering discipline. He is currently focusing on the following research areas: software testing,
				developer turnover and knowledge loss, code review, and statistical machine translation from English to code. He currently holds two grants to fund this research:
				an NSERC Discovery Grant and a CRD with Ericsson.
			</Typography>

			<Typography variant="body1" textAlign="justify" gutterBottom sx={{ mb: 3 }}>
				Before becoming professor at Concordia, he was a postdoctoral researcher working with{' '}
				<Button href="http://www.cs.mcgill.ca/~martin/" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Martin Robillard
				</Button>{' '}
				at McGill University. He received his PhD from the University of Victoria with advisers{' '}
				<Button href="http://www.cs.uvic.ca/~mstorey" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Margaret-Anne Storey
				</Button>{' '}
				<Button href="http://www.thechiselgroup.org/" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					(The Chisel Group)
				</Button>{' '}
				and{' '}
				<Button href="http://turingmachine.org/" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Daniel M. German
				</Button>
				. He was a visiting researcher with{' '}
				<Button href="http://www.cs.ucdavis.edu/~devanbu/" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Prem Devanbu
				</Button>{' '}
				at UC Davis. He received a Bachelor degree at the{' '}
				<Button href="http://www.site.uottawa.ca/eng/school/ugrad/softwareengineering.html" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					University of Ottawa
				</Button>{' '}
				in Software Engineering.
			</Typography>

			<Typography variant="body1" textAlign="justify" gutterBottom sx={{ mb: 3 }}>
				Rigby introduced the PhD program in Software Engineering at Concordia University. As the Software Engineering undergraduate program director he was responsible for
				the CEAB accreditation and also lead an update of the curriculum. He has taught Software Maintenance, Human Computer Interaction, Software Architectures, Mining
				Software Repositories, and Modern Software Testing.
			</Typography>

			<Typography variant="body1" textAlign="justify" gutterBottom sx={{ mb: 3 }}>
				For more information or to apply to work in my research lab, please{' '}
				<Button href="mailto:peter.rigby@concordia.ca" target="_black" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					email me.
				</Button>
			</Typography>

			<PublicationsMolecule />
			<TopTierMolecule />
		</Box>
	)
}

export default MainOrganism
