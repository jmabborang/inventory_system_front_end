import Grid from '@mui/material/Grid';
import { BarChart } from '@mui/x-charts/BarChart';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const otherSetting = {
  height: 400,
  yAxis: [{ label: 'Item Movement by Month', width: 60 }],
  grid: { horizontal: true },
};



const dataset = [
  {
    Return: 86,
    Sold: 21,
	 Waste: 30,
    month: 'January',
  },
  {
    Return: 78,
    Sold: 28,
	 Waste: 40,
    month: 'February',
  },
  {
    Return: 106,
    Sold: 41,
	 Waste: 40,
    month: 'March',
  },
  {
    Return: 92,
    Sold: 73,
	 Waste: 40,
    month: 'April',
  },
  {
    Return: 92,
    Sold: 99,
	 Waste: 40,
    month: 'May',
  },
  {
    Return: 103,
    Sold: 144,
	 Waste: 40,
    month: 'June',
  },
  {
    Return: 105,
    Sold: 319,
	 Waste: 40,
    month: 'July',
  },
  {
    Return: 106,
    Sold: 249,
	 Waste: 40,
    month: 'August',
  },
  {
    Return: 95,
    Sold: 131,
	 Waste: 40,
    month: 'September',
  },
  {
    Return: 97,
    Sold: 55,
	 Waste: 40,
    month: 'October',
  },
  {
    Return: 76,
    Sold: 48,
	 Waste: 40,
    month: 'November',
  },
  {
    Return: 103,
    Sold: 25,
	 Waste: 40,
    month: 'December',
  },
];

const valueFormatter = (value) => `${value}`;

const FormatterDemo = () => {
  return (
    <Grid container spacing={2}>
		<BarChart
			dataset={dataset}
			xAxis={[
				{
					scaleType: 'band',
					dataKey: 'month',
					valueFormatter: (month, context) =>
						context.location === 'tick'
						? `${month.slice(0, 3)} \n2023`
						: `${month} 2023`,
					height: 40,
				},
			]}
			series={[
				{ dataKey: 'Return', label: 'Return', valueFormatter },
				{ dataKey: 'Waste', label: 'Waste', valueFormatter },
				{ dataKey: 'Sold', label: 'Sold', valueFormatter },
			]}
			{...otherSetting}
		/>
		<FormGroup m={6}>
			<FormControlLabel control={<Checkbox defaultChecked />} label="Return" />
			<FormControlLabel control={<Checkbox defaultChecked />} label="Sold" />
			<FormControlLabel control={<Checkbox defaultChecked />} label="Waste" />
		</FormGroup>
	 </Grid>
  );
}


export default FormatterDemo;

