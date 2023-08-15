import { Grid, Button, Divider } from '@mui/material'

const MenuMolecule = () => {
	return (
		<Grid container sx={{ width: 1, p: 1 }}>
			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#bio" sx={{ width: 1, justifyContent: 'left' }}>
					Bio and Research
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#publications" sx={{ width: 1, justifyContent: 'left' }}>
					Publications
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#top-tier" sx={{ width: 1, justifyContent: 'left' }}>
					Top-tier Journal
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#other" sx={{ width: 1, justifyContent: 'left' }}>
					Other referred
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#dissertation" sx={{ width: 1, justifyContent: 'left' }}>
					Dissertation
				</Button>
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Divider />
			</Grid>

			<Grid item sx={{ width: 1 }}>
				<Button size="small" href="#technical" sx={{ width: 1, justifyContent: 'left' }}>
					Technical Reports
				</Button>
			</Grid>
		</Grid>
	)
}

export default MenuMolecule
