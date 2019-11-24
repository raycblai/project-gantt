var today = new Date(),
  day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);

Highcharts.ganttChart('project-management-gantt-chart2', {
  title: {
    text: 'Simple Gantt Chart'
  },
  xAxis: [
    {
      id: 'bottom-datetime-axis',
      currentDateIndicator: {
        width: 1,
        dashStyle: 'dot',
        color: 'red',
        label: {
          format: '%Y-%m-%d'
        }
      },
      type: 'datetime',
      tickInterval: day,
      labels: {
        format: '{value:%a}'
      },
      min: today.getTime() - 20 * day,
      max: today.getTime() + 60 * day
    }
  ],

  series: [
    {
      name: 'CETM46 Assignments',
      data: [
        {
          id: 'p1',
          name: 'Assignment 1',
          pointwidth: 3,
          color: 'black'
        },
        {
          id: 's1',
          name: 'Framing business problem',
          parent: 'p1'
        },
        {
          id: 'c11',
          name: 'Defining the problem of choosing wine',
          start: Date.UTC(2019, 10, 1),
          end: Date.UTC(2019, 10, 5),
          parent: 's1'
        },
        {
          id: 'c12',
          name: 'Conceptualize the product - wine recommendation',
          start: Date.UTC(2019, 10, 6),
          end: Date.UTC(2019, 10, 10),
          parent: 's1',
          dependency: 'c11'
        },
        {
          id: 's2',
          name: 'Data Acquisition from Kaggle and Wine Enthusiast',
          start: Date.UTC(2019, 10, 12),
          end: Date.UTC(2019, 10, 20),
          parent: 'p1',
          dependency: 'c12'
        },
        {
          id: 's3',
          name: 'Understanding data and domain knowledge',
          start: Date.UTC(2019, 10, 21),
          end: Date.UTC(2019, 10, 30),
          parent: 'p1',
          dependency: 's2'
        },
        {
          id: 's4',
          name: 'Presentation via Data Visualization',
          dependency: 's3',
          start: Date.UTC(2019, 11, 1),
          end: Date.UTC(2019, 11, 10),
          parent: 'p1'
        },
        {
          id: 's5',
          name: 'Draft the product layout design',
          start: Date.UTC(2019, 11, 10),
          end: Date.UTC(2019, 11, 12),
          parent: 'p1'
        },
        {
          id: 's6',
          name: 'Finishing the report',
          start: Date.UTC(2019, 11, 13),
          end: Date.UTC(2019, 11, 20),
          dependency: ['s4', 's5'],
          parent: 'p1'
        },
        {
          id: 'P1',
          name: 'Assignment 1 Completed',
          start: Date.UTC(2019, 11, 21),
          end: Date.UTC(2019, 11, 21),
          dependency: 'cs6',
          parent: 'p1',
          milestone: true
        }
      ]
    },
    {
      data: [
        {
          id: 'p2',
          name: 'Assignment 2',
          pointwidth: 3,
          color: 'black'
        },
        {
          id: 's21',
          name: 'Start prototype',
          start: Date.UTC(2019, 11, 22),
          end: Date.UTC(2019, 11, 22),
          parent: 'p2',
          dependency: 'P1',
          milestone: true
        },
        {
          id: 's22',
          name: 'Start ETL',
          start: Date.UTC(2019, 11, 22),
          end: Date.UTC(2019, 11, 31),
          parent: 'p2',
          dependency: 's21'
        },
        {
          id: 'c221',
          name: 'Handling the data',
          parent: 's22',
          start: Date.UTC(2019, 11, 21),
          end: Date.UTC(2019, 11, 25),
          dependency: 's21'
        },
        {
          id: 'c222',
          name: 'Data Transformation',
          parent: 's22',
          start: Date.UTC(2019, 11, 26),
          end: Date.UTC(2020, 0, 1),
          dependency: 'c221'
        },
        {
          name: 'Assignment 2 Completed',
          start: Date.UTC(2019, 12, 17),
          end: Date.UTC(2019, 12, 17),
          dependency: 'a2',
          parent: 'p2',
          milestone: true
        }
      ]
    }
  ]
});
