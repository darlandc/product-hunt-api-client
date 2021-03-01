import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from './List';

export default function Home() {
  const [value, setValue] = React.useState(0);
  const [option, setOption] = React.useState({
    selected: 'NEWEST',
  });

  const handleChange = (event, tabSelected) => {
    setValue(tabSelected);
    tabSelected === 0
      ? setOption({selected: 'NEWEST'})
      : setOption({selected: 'VOTES'});
  };

  return (
    <>
      <Paper square className="paper">
        <Tabs
          className="tabs"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Most Recent" />
          <Tab label="Most Popular" />
        </Tabs>
      </Paper>
        <List option={option.selected} />
    </>
  );
}
