import TextField from '@mui/material/TextField';

export default function SelectCategory() {
  const categories = [
    { value: 'Full Stack', label: 'Full Stack' },
    { value: 'Front End', label: 'Front End' },
    { value: 'Back End', label: 'Back End' }
  ];

  return (
    <>
      <TextField
        id="category"
        select
        required
        fullWidth
        label="Category"
        defaultValue="Full Stack"
        variant="filled"
        SelectProps={{
          native: true
        }}
      >
        {categories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </>
  );
}
