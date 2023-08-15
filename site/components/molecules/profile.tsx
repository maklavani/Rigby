'use client'

import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'

// Types
import type { ProfileMoleculeProps } from '@/types/components/molecules/profile'

const ProfileMolecule = (props: ProfileMoleculeProps) => {
	// Props
	const { elevation, borderRadius } = props

	return (
		<Card elevation={elevation} sx={{ mb: !elevation ? 3 : 1, borderRadius }}>
			<CardMedia component="img" image="/images/headshot.jpg" alt="Peter C. Rigbys" />

			<CardContent>
				<Typography gutterBottom variant="h5" component="h1">
					Peter C. Rigbys
				</Typography>

				<Typography variant="body2" color="text.secondary">
					Associate Professor of Software Engineering Concordia University, Montreal, Canada Professional Engineer (P.Eng in Ontario)
					<br />
					Email:{' '}
					<Button href="mailto:peter.rigby@concordia.ca" target="_blank" size="small" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
						peter.rigby@concordia.ca
					</Button>
					<br />
					Phone:{' '}
					<Button href="tel:+1-514-848-2424" target="_blank" size="small" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
						+1-514-848-2424 ext 3167
					</Button>
				</Typography>
			</CardContent>

			<CardActions>
				<Button href="https://scholar.google.ca/citations?user=lGVxz58AAAAJ&hl=en" target="_blank" size="small" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Publication list on Google Scholar
				</Button>

				<Button href="https://users.encs.concordia.ca/~pcr/hours" target="_blank" size="small" sx={{ py: 0, px: 0.5, textTransform: 'capitalize' }}>
					Office hours
				</Button>
			</CardActions>
		</Card>
	)
}

export default ProfileMolecule
