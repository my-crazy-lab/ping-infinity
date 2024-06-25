import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

function Forms() {
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Forms"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          docs="https://material-ui.com/components/text-fields/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="outlined"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                      FormHelperTextProps={{
                        children: 'This field is required',
                        component: 'div'
                      }}
                      SelectProps={{
                        native: false,
                        autoWidth: true
                      }}
                      helperText="Some important text"
                    />
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="outlined"
                      InputProps={{
                        readOnly: true
                      }}
                      helperText="This field is disabled"
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                      helperText="Enter your password"
                    />
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                      helperText="This field is read-only"
                    />
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      variant="outlined"
                      helperText="Enter a number"
                    />
                    <TextField
                      id="outlined-search"
                      label="Search field"
                      type="search"
                      variant="outlined"
                      helperText="Enter search text"
                    />
                    <TextField
                      id="outlined-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="filled-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="filled"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                      FormHelperTextProps={{
                        children: 'This field is required',
                        component: 'div'
                      }}
                      SelectProps={{
                        native: false,
                        autoWidth: true
                      }}
                      helperText="Some important text"
                    />
                    <TextField
                      disabled
                      id="filled-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="filled"
                      InputProps={{
                        readOnly: true
                      }}
                      helperText="This field is disabled"
                    />
                    <TextField
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                      helperText="Enter your password"
                    />
                    <TextField
                      id="filled-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="filled"
                      helperText="This field is read-only"
                    />
                    <TextField
                      id="filled-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      variant="filled"
                      helperText="Enter a number"
                    />
                    <TextField
                      id="filled-search"
                      label="Search field"
                      type="search"
                      variant="filled"
                      helperText="Enter search text"
                    />
                    <TextField
                      id="filled-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="filled"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="standard"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                      FormHelperTextProps={{
                        children: 'This field is required',
                        component: 'div'
                      }}
                      SelectProps={{
                        native: false,
                        autoWidth: true
                      }}
                      helperText="Some important text"
                    />
                    <TextField
                      disabled
                      id="standard-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="standard"
                      InputProps={{
                        readOnly: true
                      }}
                      helperText="This field is disabled"
                    />
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                      helperText="Enter your password"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="standard"
                      helperText="This field is read-only"
                    />
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      variant="standard"
                      helperText="Enter a number"
                    />
                    <TextField
                      id="standard-search"
                      label="Search field"
                      type="search"
                      variant="standard"
                      helperText="Enter search text"
                    />
                    <TextField
                      id="standard-helperText"
                      label="Helper text"
                      defaultValue="Default Value"
                      helperText="Some important text"
                      variant="standard"
                      InputProps={{
                        endAdornment: <VolumeUp />
                      }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Select Inputs" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      helperText="Please select your currency"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="filled-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      variant="filled"
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="filled-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      helperText="Please select your currency"
                      variant="filled"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      variant="standard"
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 4.5 + 8,
                              width: 250
                            }
                          }
                        }
                      }}
                      helperText="Please select your currency"
                      variant="standard"
                      InputProps={{
                        startAdornment: <VolumeDown />,
                        endAdornment: <VolumeUp />
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Switches" />
              <Divider />
              <CardContent>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} disabled defaultChecked />
                <Switch {...label} disabled />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Checkboxes &amp; Radios" />
              <Divider />
              <CardContent>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600]
                    }
                  }}
                />
                <Divider sx={{ my: 5 }} />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sliders" />
              <Divider />
              <CardContent>
                <Box sx={{ width: 200 }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ mb: 1 }}
                    alignItems="center"
                  >
                    <VolumeDown />
                    <Slider
                      aria-label="Volume"
                      value={value}
                      onChange={handleChange2}
                    />
                    <VolumeUp />
                  </Stack>
                  <Slider
                    disabled
                    defaultValue={30}
                    aria-label="Disabled slider"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Forms;
