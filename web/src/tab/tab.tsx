import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from 'styled-components';

const VMTab = styled(Tab)`
  && {
    margin: 0 5rem;
  }
`

const VMTabPanel = styled(TabPanel)`
  && {
    padding: 0;
  }
`

export default function VMCenteredTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', flex: '1', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <VMTab label="Camera Video" value="1" />
              <VMTab label="PointCloud" value="2" />
              <VMTab label="Configure" value="3" />
            </TabList>
          </Box>
          <VMTabPanel value="1">Item One</VMTabPanel>
          <VMTabPanel value="2">Item Two</VMTabPanel>
          <VMTabPanel value="3">Item Three</VMTabPanel>
        </TabContext>
      </Box>
    </>
  );
}