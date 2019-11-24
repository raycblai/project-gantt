var today = new Date(),
  day = 1000 * 60 * 60 * 24,
  // Utility functions
  dateFormat = Highcharts.dateFormat,
  defined = Highcharts.defined,
  isObject = Highcharts.isObject,
  reduce = Highcharts.reduce;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

Highcharts.ganttChart('project-management-gantt-chart', {
  series: [
    {
      name: 'CETM46',
      data: [
        {
          name: 'Assignment-1',
          id: 'assignment-1',
          owner: 'Ray'
        },
        {
          name: 'Formulating the belief',
          id: 'Phase-1A',
          parent: 'assignment-1',
          start: today - 2 * day,
          end: today + 6 * day,
          completed: {
            amount: 0.2
          },
          owner: 'Ray'
        },
        {
          name: 'Working on data',
          id: 'Phase-1B',
          dependency: 'Phase-1A',
          parent: 'assignment-1',
          start: today + 6 * day,
          end: today + 8 * day,
          owner: 'Ray'
        },
        {
          name: 'Establish Thinking',
          id: 'Phase-1C',
          dependency: 'Phase-1B',
          parent: 'assignment-1',
          start: today + 9.5 * day,
          milestone: true,
          owner: 'Ray'
        },
        {
          name: 'Developing the solution',
          id: 'Phase-1D',
          dependency: 'Phase-1C',
          parent: 'assignment-1',
          owner: 'Ray'
        },
        {
          name: 'XXX',
          id: 'Phase-1E',
          dependency: 'Phase-1B',
          parent: 'assignment-1',
          start: today + 10 * day,
          end: today + 11 * day,
          owner: 'Ray'
        },
        {
          name: 'YYY',
          dependency: ['Phase-1D', 'Phase-1E'],
          parent: 'assignment-1',
          start: today + 11 * day,
          end: today + 13 * day
        }
      ]
    },
    {
      name: 'Product',
      data: [
        {
          name: 'New product launch',
          id: 'new_product',
          owner: 'Peter'
        },
        {
          name: 'Development',
          id: 'development',
          parent: 'new_product',
          start: today - day,
          end: today + 11 * day,
          completed: {
            amount: 0.6,
            fill: '#e80'
          },
          owner: 'Susan'
        },
        {
          name: 'Beta',
          id: 'beta',
          dependency: 'development',
          parent: 'new_product',
          start: today + 12.5 * day,
          milestone: true,
          owner: 'Peter'
        },
        {
          name: 'Final development',
          id: 'finalize',
          dependency: 'beta',
          parent: 'new_product',
          start: today + 13 * day,
          end: today + 17 * day
        },
        {
          name: 'Launch',
          dependency: 'finalize',
          parent: 'new_product',
          start: today + 17.5 * day,
          milestone: true,
          owner: 'Peter'
        }
      ]
    }
  ],
  title: {
    text: 'CETM46 Assignment Project Gantt Chart'
  },
  xAxis: {
    currentDateIndicator: true,
    min: today - 3 * day,
    max: today + 18 * day
  }
});
