import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type SelectDate = {
  date: object;
  setDate: (date: object) => void;
};

export default function SelectDate({ date, setDate }: SelectDate) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
            label="Controlled picker"
            value={date}
            onChange={(newDate) => {
              if (newDate === null) {
                return;
              }
              setDate(newDate);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
