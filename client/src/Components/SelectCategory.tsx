import TextField from '@mui/material/TextField';

type SelectCategoryProps = {
  category: string;
  setCategory: (category: string) => void;
};

export default function SelectCategory({
  category,
  setCategory
}: SelectCategoryProps) {
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
        defaultValue={category}
        variant="filled"
        SelectProps={{
          native: true
        }}
        onChange={(e) => setCategory(e.target.value)}
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
