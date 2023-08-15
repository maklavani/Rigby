import { Grid, Button, Divider } from '@mui/material'

const MenuMolecule = () => {
	return (
		<Grid container spacing={1} sx={{ width: 1, p: 1 }}>
			<Grid item sx={{ width: 1 }}>
				<Button href="#bio" sx={{ width: 1, justifyContent: 'left' }}>
					Bio and Research
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button href="#publications" sx={{ width: 1, justifyContent: 'left' }}>
					Publications
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button href="#top-tier" sx={{ width: 1, justifyContent: 'left' }}>
					Top-tier Journal
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button href="#other" sx={{ width: 1, justifyContent: 'left' }}>
					Other referred
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button href="#dissertation" sx={{ width: 1, justifyContent: 'left' }}>
					Dissertation
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Divider />
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button href="#technical" sx={{ width: 1, justifyContent: 'left' }}>
					Technical Reports
				</Button>
			</Grid>
		</Grid>
	)
}

export default MenuMolecule
