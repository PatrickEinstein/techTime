import { useTheme } from "@mui/material/styles";
import { Send } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function InputAdornments() {
    const theme = useTheme();
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">
      <Typography
          variant="h5"
          
          sx={{
           
            fontSize: "18px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Send us a message </Typography>
      </InputLabel>
      <OutlinedInput sx={{
        backgroundColor:"blue"
      }}
        id="outlined-adornment-amount"
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="warning"  size="large">
              <Send />
            </IconButton>{" "}
          </InputAdornment>
        }
        label="Amount"
      />
    </FormControl>
  );
}
