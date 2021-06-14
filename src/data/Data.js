export const donutChartData = {
    "donut1":{
        "data":{"a": 5, "b": 15},
        "colors":["#47987A", "#D2D7D8"],
        "detail":{'numerical':"25%",'desc':"Health"}
    },
    "donut2":{
        "title":"Health Status",
        "data":{a: 10, b: 3, c:7},
        "legends":['Good','Warning','Critical'],
        "colors": ["#00B59B", "#FFBD35", "#FF453C"],
        "detail":{'numerical':"407",'desc':"Total"},
        "stats":"10%  Increase in Critical Issues"
    },
    "donut3":{
        "title":"Infrastructure Discovered",
        "data":{a: 9, b: 8, c:4},
        "colors":['#7972CD','#13ABDC','#4567FF'],
        "legends": ['Oracle','Azure','AWS'],
        "stats":"Oracle has the most number of critical issues"
    },
    "donut4":{
        "title":"Service Status",
        "data":{a: 12, b: 3, c:3},
        "colors": ['#90D4DD', '#4567FF','#00B59B'],
        "legends":['App','Database','Web'],
        "stats":"Number of database services that are down have decreased by 5%"
    },
    "donut5":{
        "title":"Network Vulnerability ( This week )",
        "data":{a: 10, b: 3, c:7},
        "colors": ['#6490DE', '#FFBD35','#FF4128'],
        "legends": ['Medium', 'High','Critical'],
        "stats":"The infrastructure that was down has increased by 10% since yesterday."
    },
    "donut6":{
        "title":"Code Vulnerability ( This week )",
        "data":{a: 2, b: 4, c:6},
        "colors": ['#FFBD35','#FF4128','#6490DE'],
        "legends":['Critical','High','Medium'],
        "stats":"The infrastructure that was down has increased by 10% since yesterday."
    },
    "donut7":{
        "title":"WebApp Vulnerability ( This week )",
        "data":{a: 4, b: 8, c:3},
        "colors":['#FF4128','#FFBD35','#6490DE'],
        "legends":['Critical','High','Medium'],
        "stats":"The infrastructure that was down has increased by 10% since yesterday."
    },
    "donut8":{
        "title":"OSS Vulnerability ( This week )",
        "data":{a: 10, b: 2, c:8},
        "colors":['#FF4128','#FFBD35','#6490DE'],
        "legends":['Critical','High','Medium'],
        "stats":"The infrastructure that was down has increased by 10% since yesterday."
    }
}

export const headerInfo = {
    'stats':{
        'Applications': 407,
        'Critical (14% of total)': 57,
        'Warning (6% of total)':20
    },
    'timeInfo':['MTTD - 25s','MTTA - 2m 3s','MTTR - 4h 36m 6s']
};

export const scatterPlotData={
    'ScatterPlot1':{
        "title":"Critical Issue Trend ( This year )",
        'data': [
            {'x':"2021-01-1", 'y':25},
            {'x':"2021-02-1", 'y':50},
            {'x':'2021-03-1', 'y':65},
            {'x':'2021-04-1', 'y':90},
            {'x':'2021-05-1', 'y':125},
            {'x':'2021-06-1', 'y':49},
            {'x':'2021-07-1', 'y':58},
            {'x':'2021-08-1', 'y':65},
            {'x':'2021-09-1', 'y':99},
            {'x':'2021-10-1', 'y':98},
            {'x':'2021-11-1', 'y':25},
            {'x':'2021-12-1','y':150}
        ],
        'dotColor':'#92D4DC',
        'lineColor':'#646464',
        "yValues":[0, 25, 50, 75, 100, 125, 150, 175],
        'stats':"69% Increase in Critical Issues in the last Mth"
    },
    'ScatterPlot2':{
        "title":"Cost Trend",
        'data': [
            {'x':"2021-01-1", 'y':5},
            {'x':"2021-02-1", 'y':6},
            {'x':'2021-03-1', 'y':10},
            {'x':'2021-04-1', 'y':15},
            {'x':'2021-05-1', 'y':20},
            {'x':'2021-06-1', 'y':25},
            {'x':'2021-07-1', 'y':30},
            {'x':'2021-12-1','y':50}
        ],
        'data2':[
            {'x':"2021-01-1", 'y':15},
            {'x':"2021-02-1", 'y':13},
            {'x':'2021-03-1', 'y':12},
            {'x':'2021-04-1', 'y':18},
            {'x':'2021-05-1', 'y':32},
            {'x':'2021-06-1', 'y':29},
            { 'x': '2021-07-1', 'y': 24 },
            { 'x': '2021-08-1', 'y': 23 },
            {'x':'2021-09-1','y':35},
            {'x':'2021-12-1','y':40}
        ],
        'data3':[
            {x:'2021-07-1', y:30},
            {x:'2021-12-1', y:70},
            {x:'2021-12-1',y:25}
        ],
        "yValues":[0, 10, 20, 30, 40, 50, 60, 70],
        'dotColor':'#7972CD',
        'areaColor':'#8ED4DE',
        'curveColor':'#005B9F',
        'lineColor':'#5C5C5C',
        'colors':['#0059A1','#796FD0','#8ED4DE'],
        'legends':['Budget','Spends','Forecast'],
        'stats':"Current spending is higher than budgeted"
    },
    "ScatterPlot3":{
        "yValues":[0, 5, 10, 15, 20, 25, 30, 35],
        "xValues":['Su','M','Tu','W','T','F','S'],
        'data':[
            {x:'Su', y:5},
            {x:'M', y:13},
            {x:'Tu',y:9},
            {x:'W', y:20},
            {x:'T', y:13},
            {x:'F',y:9},
            {x:'S',y:10}
        ],
        lineColor:'#979797',
        dotColor:'#608CE4'
    },
    "ScatterPlot4":{
        "yValues":[0, 5, 10, 15, 20, 25, 30, 35],
        "xValues":['Su','M','Tu','W','T','F','S'],
        'data':[
            {x:'Su', y:5},
            {x:'M', y:10},
            {x:'Tu',y:20},
            {x:'W', y:15},
            {x:'T', y:9},
            {x:'F',y:15},
            {x:'S',y:10}
        ],
        lineColor:'#979797',
        dotColor:'#608CE4'
    }
}

export const barGraphData = {
    'bar1':{
        'data':[
            {y:'Good',x:30},
            {y:'Warning',x:5},
            {y:'Critical', x:10},
            {y:'Total', x:50}
        ],
        'xValues':[0, 10, 20, 30, 40, 50],
        'colors':['#00B69B','#FFBD35','#FF453C','#4567FF']
    },
    'bar2':{
        'data':[
            {y:25,x:'Total'},
            {y:20,x:'Up'},
            {y:25, x:'Down'}
        ],
        'yValues':[0, 5, 10, 15, 20, 25, 30],
        'color':'#005B9F'
    },
    'bar3':{
        'title':'Current Expenses',
        'data':[
            {'group': "ON PREM", 'Budget': "30", 'Spent': "40"},
            {'group': "AWS", 'Budget': "50", 'Spent': "30"},
            {'group': "AZURE", 'Budget': "20", 'Spent': "20"},
            {'group': "ORACLE", 'Budget': "30", 'Spent': "40"}
        ],
        'colors':['#66C0F5','#6490DE'],
        'stats':'Based on previous expenses, suggest a 10% increase'
    }
}

export const otherInfo={
    'title':'Overall Security',
    'info1':{
        'Incidents':'15',
        'Network':'4',
        'Code': '4',
        'Web': '4',
        'Oss': '3',
        '': '',
        'MTTD':'2m 5s',
        'MTTR':'3d4h5m',
        'Patch Implant':'5h 30m'
    }
}