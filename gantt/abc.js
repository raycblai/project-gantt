var chart = new Highcharts.Chart({

chart: {
    renderTo: 'container',
    type: 'bar'
},

title: {
    text: 'Gantt module development plan'  
},

subtitle: {
    text: 'Using fake data'
},

xAxis: {
    categories: ['Planning', 'Development', 'Testing', 'Documentation']
},

yAxis: {
    type: 'datetime',
    min: Date.UTC(2012, 0, 1)
},

        tooltip: {
            formatter: function() {
                 console.log(this.point);
                var point = this.point;
                return '<b>'+ point.category +'</b><br/>'+
                    Highcharts.dateFormat('%b %e, %Y', point.low) + ' - ' +
                    Highcharts.dateFormat('%b %e, %Y', point.y);
            } 
        },

series: [{
    data: [{
        low: Date.UTC(2011, 11, 20),
        y: Date.UTC(2012, 0, 15)
    }, {
        low: Date.UTC(2012, 0, 10),
        y: Date.UTC(2012, 4, 28)
    }, {
        low: Date.UTC(2012, 3, 15),
        y: Date.UTC(2012, 4, 28)
    }, {
        low: Date.UTC(2012, 4, 15),
        y: Date.UTC(2012, 4, 28)
    }]
}]

});
