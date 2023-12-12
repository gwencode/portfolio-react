import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import Stack from '../Types/stack';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const stacks = [
  'CSS',
  'EmotionCSS',
  'Express',
  'Docker',
  'Heroku',
  'HTML',
  'JavaScript',
  'Material UI',
  'MongoDB',
  'Netlify',
  'Next.js',
  'Node',
  'Pinia',
  'PostgreSQL',
  'React',
  'React Native',
  'Ruby',
  'Rails',
  'Stimulus',
  'Stripe',
  'SQLite',
  'TypeORM',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Vue.js',
  'Vuetify'
];

type SelectStackProps = {
  stack: Stack;
  setStack: (stack: Stack) => void;
};

export default function SelectStack({ stack, setStack }: SelectStackProps) {
  const handleChange = (event: SelectChangeEvent<typeof stack>) => {
    const {
      target: { value }
    } = event;
    setStack(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="stack-label">Stack</InputLabel>
        <Select
          labelId="stack-label"
          id="stack"
          multiple
          value={stack}
          onChange={handleChange}
          input={<OutlinedInput id="stack" label="Stack" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {stacks.map((stack) => (
            <MenuItem key={stack} value={stack}>
              {stack}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
