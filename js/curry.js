
// 基于准备好的dom,初始化echarts实例
var myChart = echarts.init(document.getElementById('curry'),'essos');

// 指定图表的配置项和数据
var option = {
    color: ['#a56e79', '#d88c82', '#f4b88c'],
    title: {
      text: 'Stephen Curry\'s Historical threes'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#fdfcf6'
        }
      }
    },
    legend: {
      data: ['FG3_PCT', 'FG3A', 'FG3M']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          "2009-10-04","2009-10-07","2009-10-09","2009-10-10","2009-10-12","2009-10-17","2009-10-20","2009-10-22","2009-10-28","2009-10-30","2009-11-04","2009-11-06","2009-11-08","2009-11-09","2009-11-11","2009-11-13","2009-11-14","2009-11-17","2009-11-18","2009-11-20","2009-11-24","2009-11-25","2009-11-28","2009-11-30","2009-12-01","2009-12-03","2009-12-05","2009-12-07","2009-12-09","2009-12-11","2009-12-12","2009-12-14","2009-12-16","2009-12-18","2009-12-22","2009-12-23","2009-12-26","2009-12-28","2009-12-29","2010-01-02","2010-01-05","2010-01-06","2010-01-08","2010-01-11","2010-01-13","2010-01-15","2010-01-18","2010-01-20","2010-01-22","2010-01-23","2010-01-26","2010-01-27","2010-01-29","2010-01-31","2010-02-02","2010-02-03","2010-02-06","2010-02-08","2010-02-10","2010-02-16","2010-02-17","2010-02-19","2010-02-21","2010-02-23","2010-02-25","2010-02-27","2010-03-02","2010-03-03","2010-03-05","2010-03-06","2010-03-08","2010-03-11","2010-03-13","2010-03-15","2010-03-20","2010-03-22","2010-03-24","2010-03-27","2010-03-28","2010-03-31","2010-04-02","2010-04-04","2010-04-06","2010-04-07","2010-04-10","2010-04-11","2010-04-13","2010-04-14","2010-10-08","2010-10-10","2010-10-12","2010-10-16","2010-10-18","2010-10-19","2010-10-21","2010-10-27","2010-10-29","2010-11-05","2010-11-07","2010-11-08","2010-11-10","2010-11-11","2010-11-13","2010-11-15","2010-11-19","2010-11-21","2010-11-22","2010-11-24","2010-11-26","2010-11-27","2010-11-30","2010-12-02","2010-12-05","2010-12-07","2010-12-08","2010-12-25","2010-12-27","2010-12-29","2010-12-31","2011-01-01","2011-01-03","2011-01-05","2011-01-07","2011-01-09","2011-01-12","2011-01-14","2011-01-17","2011-01-19","2011-01-21","2011-01-22","2011-01-24","2011-01-26","2011-01-28","2011-01-30","2011-02-03","2011-02-05","2011-02-07","2011-02-09","2011-02-10","2011-02-13","2011-02-15","2011-02-16","2011-02-22","2011-02-25","2011-02-27","2011-03-01","2011-03-02","2011-03-04","2011-03-06","2011-03-08","2011-03-09","2011-03-11","2011-03-13","2011-03-14","2011-03-16","2011-03-18","2011-03-20","2011-03-21","2011-03-23","2011-03-25","2011-03-27","2011-03-29","2011-03-30","2011-04-02","2011-04-05","2011-04-06","2011-04-10","2011-04-11","2011-04-13","2011-12-17","2011-12-20","2011-12-25","2011-12-26","2011-12-31","2012-01-02","2012-01-04","2012-01-20","2012-01-23","2012-01-25","2012-01-27","2012-01-31","2012-02-02","2012-02-04","2012-02-07","2012-02-09","2012-02-12","2012-02-13","2012-02-15","2012-02-17","2012-02-18","2012-02-20","2012-02-22","2012-02-29","2012-03-05","2012-03-07","2012-03-10","2012-03-11","2012-10-08","2012-10-15","2012-10-17","2012-10-19","2012-10-31","2012-11-02","2012-11-03","2012-11-05","2012-11-07","2012-11-09","2012-11-10","2012-11-14","2012-11-16","2012-11-18","2012-11-19","2012-11-21","2012-11-23","2012-11-24","2012-11-29","2012-12-01","2012-12-03","2012-12-05","2012-12-07","2012-12-08","2012-12-10","2012-12-12","2012-12-14","2012-12-15","2012-12-18","2012-12-19","2012-12-21","2012-12-22","2012-12-26","2012-12-28","2012-12-29","2013-01-02","2013-01-05","2013-01-09","2013-01-11","2013-01-13","2013-01-19","2013-01-21","2013-01-23","2013-01-25","2013-01-26","2013-01-28","2013-02-02","2013-02-05","2013-02-06","2013-02-08","2013-02-09","2013-02-12","2013-02-19","2013-02-20","2013-02-22","2013-02-24","2013-02-26","2013-02-27","2013-03-01","2013-03-02","2013-03-04","2013-03-06","2013-03-08","2013-03-09","2013-03-11","2013-03-13","2013-03-15","2013-03-17","2013-03-18","2013-03-20","2013-03-23","2013-03-25","2013-03-27","2013-03-30","2013-04-03","2013-04-05","2013-04-07","2013-04-09","2013-04-11","2013-04-12","2013-04-15","2013-04-17","2013-04-20","2013-04-23","2013-04-26","2013-04-28","2013-04-30","2013-05-02","2013-05-06","2013-05-08","2013-05-10","2013-05-12","2013-05-14","2013-05-16","2013-10-05","2013-10-07","2013-10-08","2013-10-15","2013-10-18","2013-10-23","2013-10-24","2013-10-30","2013-10-31","2013-11-02","2013-11-04","2013-11-06","2013-11-09","2013-11-12","2013-11-14","2013-11-16","2013-11-18","2013-11-23","2013-11-26","2013-11-27","2013-11-29","2013-12-01","2013-12-03","2013-12-06","2013-12-07","2013-12-09","2013-12-11","2013-12-13","2013-12-15","2013-12-17","2013-12-19","2013-12-21","2013-12-23","2013-12-25","2013-12-27","2013-12-29","2013-12-31","2014-01-02","2014-01-03","2014-01-05","2014-01-07","2014-01-08","2014-01-10","2014-01-15","2014-01-17","2014-01-18","2014-01-20","2014-01-24","2014-01-26","2014-01-28","2014-01-30","2014-01-31","2014-02-04","2014-02-06","2014-02-08","2014-02-10","2014-02-12","2014-02-19","2014-02-20","2014-02-22","2014-02-24","2014-02-26","2014-02-28","2014-03-02","2014-03-04","2014-03-05","2014-03-07","2014-03-09","2014-03-11","2014-03-12","2014-03-14","2014-03-16","2014-03-18","2014-03-20","2014-03-22","2014-03-28","2014-03-30","2014-04-01","2014-04-02","2014-04-04","2014-04-06","2014-04-10","2014-04-11","2014-04-13","2014-04-14","2014-04-19","2014-04-21","2014-04-24","2014-04-27","2014-04-29","2014-05-01","2014-05-03","2014-10-07","2014-10-09","2014-10-12","2014-10-16","2014-10-17","2014-10-21","2014-10-24","2014-10-29","2014-11-01","2014-11-02","2014-11-05","2014-11-08","2014-11-09","2014-11-11","2014-11-13","2014-11-15","2014-11-16","2014-11-21","2014-11-23","2014-11-25","2014-11-26","2014-11-28","2014-11-30","2014-12-02","2014-12-04","2014-12-06","2014-12-08","2014-12-10","2014-12-13","2014-12-14","2014-12-16","2014-12-18","2014-12-22","2014-12-23","2014-12-25","2014-12-27","2014-12-30","2015-01-02","2015-01-05","2015-01-07","2015-01-09","2015-01-13","2015-01-14","2015-01-16","2015-01-17","2015-01-19","2015-01-21","2015-01-23","2015-01-25","2015-01-27","2015-01-30","2015-01-31","2015-02-03","2015-02-04","2015-02-06","2015-02-07","2015-02-09","2015-02-11","2015-02-20","2015-02-24","2015-02-26","2015-02-27","2015-03-01","2015-03-02","2015-03-04","2015-03-06","2015-03-08","2015-03-09","2015-03-11","2015-03-14","2015-03-16","2015-03-18","2015-03-20","2015-03-21","2015-03-23","2015-03-24","2015-03-27","2015-03-28","2015-03-31","2015-04-02","2015-04-04","2015-04-05","2015-04-07","2015-04-09","2015-04-11","2015-04-13","2015-04-15","2015-04-18","2015-04-20","2015-04-23","2015-04-25","2015-05-03","2015-05-05","2015-05-09","2015-05-11","2015-05-13","2015-05-15","2015-05-19","2015-05-21","2015-05-23","2015-05-25","2015-05-27","2015-06-04","2015-06-07","2015-06-09","2015-06-11","2015-06-14","2015-06-16","2015-10-05","2015-10-08","2015-10-13","2015-10-15","2015-10-17","2015-10-22","2015-10-27","2015-10-30","2015-10-31","2015-11-02","2015-11-04","2015-11-06","2015-11-07","2015-11-09","2015-11-11","2015-11-12","2015-11-14","2015-11-17","2015-11-19","2015-11-20","2015-11-22","2015-11-24","2015-11-27","2015-11-28","2015-11-30","2015-12-02","2015-12-05","2015-12-06","2015-12-08","2015-12-11","2015-12-12","2015-12-16","2015-12-18","2015-12-23","2015-12-25","2015-12-28","2016-01-02","2016-01-04","2016-01-05","2016-01-08","2016-01-09","2016-01-11","2016-01-13","2016-01-14","2016-01-16","2016-01-18","2016-01-20","2016-01-22","2016-01-25","2016-01-27","2016-01-30","2016-01-31","2016-02-03","2016-02-06","2016-02-09","2016-02-10","2016-02-19","2016-02-20","2016-02-22","2016-02-24","2016-02-25","2016-02-27","2016-03-03","2016-03-06","2016-03-07","2016-03-09","2016-03-11","2016-03-12","2016-03-14","2016-03-16","2016-03-18","2016-03-19","2016-03-21","2016-03-23","2016-03-25","2016-03-27","2016-03-29","2016-03-30","2016-04-01","2016-04-03","2016-04-05","2016-04-07","2016-04-09","2016-04-10","2016-04-13","2016-04-16","2016-04-24","2016-05-09","2016-05-11","2016-05-16","2016-05-18","2016-05-22","2016-05-24","2016-05-26","2016-05-28","2016-05-30","2016-06-02","2016-06-05","2016-06-08","2016-06-10","2016-06-13","2016-06-16","2016-06-19","2016-10-01","2016-10-04","2016-10-06","2016-10-14","2016-10-15","2016-10-19","2016-10-21","2016-10-25","2016-10-28","2016-10-30","2016-11-01","2016-11-03","2016-11-04","2016-11-07","2016-11-09","2016-11-10","2016-11-13","2016-11-16","2016-11-18","2016-11-19","2016-11-21","2016-11-23","2016-11-25","2016-11-26","2016-11-28","2016-12-01","2016-12-03","2016-12-05","2016-12-07","2016-12-08","2016-12-10","2016-12-11","2016-12-13","2016-12-15","2016-12-17","2016-12-20","2016-12-22","2016-12-23","2016-12-25","2016-12-28","2016-12-30","2017-01-02","2017-01-04","2017-01-06","2017-01-08","2017-01-10","2017-01-12","2017-01-16","2017-01-18","2017-01-20","2017-01-22","2017-01-23","2017-01-25","2017-01-28","2017-02-01","2017-02-02","2017-02-04","2017-02-08","2017-02-10","2017-02-11","2017-02-13","2017-02-15","2017-02-23","2017-02-25","2017-02-27","2017-02-28","2017-03-02","2017-03-05","2017-03-06","2017-03-08","2017-03-10","2017-03-14","2017-03-16","2017-03-18","2017-03-20","2017-03-21","2017-03-24","2017-03-26","2017-03-28","2017-03-29","2017-03-31","2017-04-02","2017-04-04","2017-04-05","2017-04-10","2017-04-12","2017-04-16","2017-04-19","2017-04-22","2017-04-24","2017-05-02","2017-05-04","2017-05-06","2017-05-08","2017-05-14","2017-05-16","2017-05-20","2017-05-22","2017-06-01","2017-06-04","2017-06-07","2017-06-09","2017-06-12","2017-09-30","2017-10-05","2017-10-08","2017-10-13","2017-10-17","2017-10-20","2017-10-21","2017-10-23","2017-10-25","2017-10-27","2017-10-29","2017-10-30","2017-11-02","2017-11-04","2017-11-06","2017-11-08","2017-11-11","2017-11-16","2017-11-18","2017-11-19","2017-11-22","2017-11-24","2017-11-25","2017-11-29","2017-12-01","2017-12-03","2017-12-04","2017-12-30","2018-01-03","2018-01-04","2018-01-06","2018-01-08","2018-01-13","2018-01-15","2018-01-17","2018-01-20","2018-01-23","2018-01-25","2018-01-27","2018-01-30","2018-02-02","2018-02-03","2018-02-06","2018-02-08","2018-02-10","2018-02-12","2018-02-14","2018-02-22","2018-02-24","2018-02-26","2018-02-28","2018-03-02","2018-03-06","2018-03-08","2018-03-23","2018-05-01","2018-05-04","2018-05-06","2018-05-08","2018-05-14","2018-05-16","2018-05-20","2018-05-22","2018-05-24","2018-05-26","2018-05-28","2018-05-31","2018-06-03","2018-06-06","2018-06-08","2018-09-29","2018-10-08","2018-10-10","2018-10-12","2018-10-16","2018-10-19","2018-10-21","2018-10-22","2018-10-24","2018-10-26","2018-10-28","2018-10-29","2018-10-31","2018-11-02","2018-11-05","2018-11-08","2018-12-01","2018-12-03","2018-12-05","2018-12-07","2018-12-10","2018-12-12","2018-12-14","2018-12-17","2018-12-19","2018-12-22","2018-12-23","2018-12-25","2018-12-27","2018-12-29","2018-12-31","2019-01-03","2019-01-05","2019-01-08","2019-01-11","2019-01-13","2019-01-15","2019-01-16","2019-01-18","2019-01-21","2019-01-24","2019-01-26","2019-01-28","2019-01-31","2019-02-02","2019-02-06","2019-02-08","2019-02-10","2019-02-12","2019-02-13","2019-02-21","2019-02-23","2019-02-25","2019-02-27","2019-02-28","2019-03-02","2019-03-05","2019-03-08","2019-03-10","2019-03-13","2019-03-16","2019-03-18","2019-03-19","2019-03-21","2019-03-24","2019-03-27","2019-03-29","2019-03-31","2019-04-02","2019-04-04","2019-04-05","2019-04-07","2019-04-09","2019-04-13","2019-04-15","2019-04-18","2019-04-21","2019-04-24","2019-04-26","2019-04-28","2019-04-30","2019-05-04","2019-05-06","2019-05-08","2019-05-10","2019-05-14","2019-05-16","2019-05-18","2019-05-20","2019-05-30","2019-06-02","2019-06-05","2019-06-07","2019-06-10","2019-06-13","2019-10-05","2019-10-10","2019-10-14","2019-10-18","2019-10-24","2019-10-27","2019-10-28","2019-10-30","2020-03-05","2020-12-12","2020-12-15","2020-12-17","2020-12-22","2020-12-27","2021-01-01","2021-01-03","2021-01-04","2021-01-06","2021-01-08","2021-01-10","2021-01-12","2021-01-14","2021-01-18","2021-01-20","2021-01-21","2021-01-23","2021-01-25","2021-01-27","2021-01-28","2021-01-30","2021-02-02","2021-02-04","2021-02-06","2021-02-08","2021-02-09","2021-02-11","2021-02-13","2021-02-15","2021-02-17","2021-02-19","2021-02-23","2021-02-24","2021-02-26","2021-02-28","2021-03-03","2021-03-11","2021-03-14","2021-03-15","2021-03-17","2020-12-22","2020-12-25","2020-12-27","2020-12-29","2021-01-01","2021-03-29","2021-04-01","2021-04-04","2021-04-06","2021-04-09","2021-04-10","2021-04-12","2021-04-14","2021-04-15","2021-04-17","2021-04-19","2021-04-21","2021-04-23","2021-04-25","2021-04-27","2021-04-29","2021-05-01","2021-05-03","2021-05-04","2021-05-06","2021-05-08","2021-05-10","2021-05-11","2021-05-16","2021-05-19","2021-05-21","2021-10-04","2021-10-06","2021-10-08","2021-10-15","2021-10-19","2021-10-21","2021-10-24","2021-10-26","2021-10-28","2021-10-30","2021-11-03","2021-11-05","2021-11-07","2021-11-08","2021-11-10","2021-11-12","2021-11-14","2021-11-16","2021-11-18","2021-11-21","2021-11-24","2021-11-26","2021-11-28","2021-11-30","2021-12-03","2021-12-04","2021-12-06","2021-12-08","2021-12-11","2021-12-13","2021-12-14","2021-12-17","2021-12-20","2021-12-23","2021-12-25","2021-12-28","2022-01-01","2022-01-03","2022-01-05","2022-01-09","2022-01-11","2022-01-13","2022-01-14","2022-01-18","2022-01-20","2022-01-21","2022-01-23","2022-01-25","2022-01-27","2022-01-29","2022-01-31","2022-02-03","2022-02-07","2022-02-09","2022-02-10","2022-02-12","2022-02-14","2022-02-16","2022-02-24","2022-02-27","2022-03-01","2022-03-03","2022-03-05","2022-03-08","2022-03-10","2022-03-12","2022-03-14","2022-03-16","2022-04-16","2022-04-18","2022-04-21","2022-04-24","2022-04-27","2022-05-01","2022-05-03","2022-05-07","2022-05-09","2022-05-11","2022-05-13","2022-05-18","2022-05-20","2022-05-22","2022-05-24","2022-05-26","2022-06-02","2022-06-05","2022-06-08","2022-06-10","2022-06-13","2022-06-16","2022-09-30","2022-10-02","2022-10-09","2022-10-14","2022-10-18","2022-10-21","2022-10-23","2022-10-25","2022-10-27","2022-10-29","2022-10-30","2022-11-01","2022-11-03","2022-11-07","2022-11-11","2022-11-13","2022-11-14","2022-11-16","2022-11-18","2022-11-20","2022-11-23","2022-11-25","2022-11-27","2022-11-29","2022-12-02","2022-12-03","2022-12-05","2022-12-10","2022-12-13","2022-12-14"]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
      series: [
        {
        name: 'FG3_PCT : Three Point Percentage',
        type: 'line',
        // stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(139, 63, 80)'
            },
            {
              offset: 1,
              color: 'rgb(139, 63, 80)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [0.333,0.2,0,0.4,0,0,0,0.333,0,0.667,0.5,0,0.5,0.5,0,0,1,0.333,0.25,0.667,0.5,0.25,0.2,0.5,0.333,0.333,0,0.5,0.25,0,0.75,0.25,0,0.556,0.333,0.6,0.75,0,0,0.5,1,0,0.5,0.5,0.6,0.25,0.625,0.375,0.429,0.444,0.3,0.333,0.5,1,0.4,0,0.429,0.2,0.636,0.1,0.25,0.5,0.333,0.125,0.4,0.5,0.375,0.5,0.556,0.5,0.5,0.286,0.625,0.556,0.333,0.4,0.667,0.6,1,0.25,0.2,0.455,0.5,0.6,0.5,0.5,0.25,0.667,1,0.2,1,0.667,0.25,0.167,0,0.5,0.333,0.25,0,0.5,1,0.4,0,0.667,0.5,0.333,0.167,0,0.8,0.667,0.5,0.333,0.571,0.6,0,0,0.667,0,0.8,0.5,0.5,0.333,0.75,0,0.167,0.714,0.4,0,0.429,0.333,0.4,0.333,0.8,0.375,0.5,0.5,0,0.333,0.667,0.4,1,0,0.5,0,0.714,0.5,0.429,0.25,0.333,0.4,0.5,0.4,0.667,0.625,0.5,0.4,0.333,0.5,0.667,0.667,0.25,0.625,0.167,0.333,0.6,0.333,0.5,0.75,0.5,0.25,0.5,0,0.333,0.375,0.667,0.75,0.333,0.286,0.75,0.286,0,0.4,0.375,0.5,0.667,0.5,0.25,0,0.6,0.667,0.6,0.333,0,0.667,0.5,0.5,0,0,0.8,0.5,0,0,0.6,0.286,0.333,0.333,0.333,0.5,0,0,0.5,0.429,0.5,1,0.5,0.571,0.6,0.5,0.667,0.556,0.25,0.571,0.333,0.4,0.273,0.333,0.583,0.615,0.3,0.571,0.25,0.8,0.75,0.2,0.5,0.375,0.778,0.25,0.75,0.214,0.429,0.556,0.333,0.6,0.2,0.286,0.444,0.333,0.4,0.444,0.333,0.333,0.2,0.7,0.846,0.273,0.333,0.4,0.4,0.375,0.333,0.6,0.714,0,0.455,0.667,0.5,0.6,0.333,0.222,0.583,0.4,0.375,0.444,0.222,0.5,0.6,0.538,0.364,0.4,0.4,0.571,0.545,0.167,0.5,0.429,0.333,0.333,0.5,0.143,0.25,0,0.571,0.5,0.3,0.2,0.5,0.2,0.4,0.643,0.625,0.222,0,0.4,0.5,0.5,0,0.571,0.222,0.4,0.6,0.4,0.625,0.429,0.2,0.286,0.313,0.545,0.2,0.571,0.286,0.375,0.444,0.667,0.333,0.167,0.5,0.2,0.533,0.143,0.2,0.182,0.2,0.375,0.308,0.6,0.222,0.273,0.6,0.625,0.286,1,0.615,0.143,0.667,0.3,0.667,1,0.25,0.625,0.75,0.333,0.2,0.455,0.364,0.4,0.25,0.25,0.2,0.2,0.4,0.5,0.5,0.5,0.6,0.25,0.625,0.5,0.375,0.25,0.4,0.5,0.286,0.8,0.5,0.538,0.333,0.143,0.375,0.5,0.571,0.25,0.429,0,0.75,0.571,1,0.143,0.8,0.429,0.222,0.375,0.2,0.5,0.667,0.4,0,0.429,0.5,0.556,0.333,0.333,0.727,0.75,0.1,0.333,0.333,0.5,0.2,0.143,0.6,0.273,0.6,0.1,0.417,0.2,0.4,0.2,0.444,0.5,0.455,0.25,0.5,0.375,0.444,0.7,0.333,0.25,0.4,0.6,0.286,0.2,0.222,0.455,0.444,0.333,0.625,0.444,0.556,0.25,0.2,0.5,0.556,0.333,0.75,0.625,0.5,0.462,0.625,1,0.538,0.143,0.6,0.333,0.333,0.2,0.5,0.625,0.556,0.667,0.667,0.667,0.545,0.25,0.5,0.625,0.615,0.455,0.5,0.5,0.308,0.333,0.389,0.75,0.5,0.182,0.2,0.444,0.462,0.615,0.545,0.455,0.778,0.462,0.273,0.333,0.133,0.538,0.571,0.538,0.273,0.6,0.545,0.125,1,0.5,0.5,0.417,0.444,0.571,0.5,0.636,0.5,0.2,0.429,0.3,0.615,0.313,0.5,0.429,0.273,0.375,0.333,0.563,0.5,0.5,0.727,0.6,0.556,0.3,0.462,0.222,0.4,0.333,0.25,0.25,0.462,0.2,0.5,0.5,0.364,0.571,0.364,0.417,0.5,0.467,0.583,0.333,0.533,0.667,0.429,0.455,0.273,0.733,0.111,0.438,0.5,0.538,0.375,0.455,0.5,0.667,0.75,0.333,0.1,0.538,0.333,0.5,0.438,0.444,0.615,0.5,0.083,0.222,0.4,0.417,0.222,0.75,0.5,0.571,0.692,0.286,0.429,0.214,0.444,0.526,0.714,0.143,0.313,0.455,0.429,0.625,0.273,0.2,0.375,0.429,0.583,0.375,0.5,0.333,0.538,0.333,0.462,0.286,0.2,0.5,0.4,0.222,0.4,0.5,0.615,0.3,0.4,0.625,0.5,0.333,0,0.765,0.5,0.538,0.556,0.333,0.2,0.091,0.333,0.583,0.4,0.5,0.364,0.308,0.714,0.286,0,0.333,0.273,0.4,0.556,0.25,0.625,0.444,0.231,0.5,0.286,0.5,0.5,0.333,0.385,0.385,0.455,0.364,0.333,0.417,0.333,0.455,0.538,0.333,0.5,0.6,0.733,0.3,0.571,0.25,0.333,0.364,0.091,0.25,0.6,0.5,0,0.222,0.182,0.385,0.4,0.222,0.125,0.385,0.286,0.75,0.583,0.333,0.455,0.417,0.273,0.5,0.444,0.643,0.375,0.667,0.75,0.357,0.375,0.333,0.357,0.636,0.25,0.625,0.273,0.4,0.438,0.667,0.429,0.385,0.545,0.364,0.556,0.222,0.222,0.167,0.4,0.667,0.667,0.333,0.364,0.545,0.2,0.364,0.231,0.429,0.636,0.75,0.5,0.222,0.286,0.375,0.222,0.444,0.4,0.375,0.364,0.231,0.333,0.375,0.556,0.455,0.769,0.462,0.4,0.5,0.5,0.286,0.5,0.545,0.333,0.533,0.556,0.615,0.143,0.3,0.417,0.222,0.444,0.429,0.333,0.3,0.727,0.417,0.444,0.444,0.444,0.5,0,0.375,0.5,0.333,0.444,0.5,0.2,0.125,0.417,0.462,0.25,0.357,0.467,0.455,0.529,0.1,0.467,0.556,0.375,0.667,0.571,0.556,0.556,0.375,0.462,0.688,0.545,0.467,0.5,0.636,0.333,0.5,0,0.333,0.6,0.643,0.444,0.5,0.25,0.357,0.333,0.556,0.353,0.4,0.25,0.4,0.25,0.556,0.333,0.5,0.25,0.455,0.579,0.615,0.529,0.273,0.2,0.25,0.5,0.75,0.556,0.222,0.6,0.273,0.5,0.357,0.357,0.625,0.455,0.286,0.286,0.294,0.333,0.4,0.4,0.267,0.333,0.417,0.333,0.571,0.417,0.5,0.5,0.579,0.625,0.5,0.111,0.75,0.3,0.5,0.667,0.455,0.667,0.111,0.8,0.4,0.3,0.231,0.222,0.286,0.273,0.364,0.6,0.286,0.375,0.438,0.444,0.3,0.429,0.222,0.357,0.273,0.2,0.667,0.375,0.4,0.182,0.222,0.4,0.143,0.25,0.286,0.385,0.462,0.2,0.333,0.333,0.5,0.417,0.167,0.643,0.1,0.375,0.455,0.25,0.5,0.357,0.5,0.583,0.364,0.5,0.75,0.5,0.4,0.579,0.545,0.4,0.526,0.222,0.636,0.25,0.375,0.5,0.091,0.375,0.286,0.357,0.125,0.667,0.571,0.182,0.2,0.2,0.333,0.556,0.333,0.429,0.455,0.25,0.5,0.417,0.533,0.556,0.688,0.308,0.579,0.588,0.143,0.444,0.5,0.556,0.353,0.412,0.444,0.4,0.462,0.524,0.231,0.091,0.409,0.667,0.4,0.375,0.667,0.214,0.5,0.25,0.615,0.267,0.444,0.35,0.4,0.273,0.385,0.364,0.474,0.333,0.529,0.231,0.643,0.563,0.167,0.545,0.4,0.538,0.214,0.545,0.294,0.538,0.353,0.214,0.333,0.357,0.357,0.333,0.571,0.313,0.357,0.5,0.1,0.111,0.364,0.222,0.333,0.4,0.5,0.375,0.308,0.077,0.2,0.6,0.3,0.5,0.571,0.4,0.375,0.313,0.125,0.615,0.143,0.286,0.3,0.313,0.8,0.444,0.167,0.417,0.5,0.5,0.25,0.5,0.5,0.333,0.273,0.455,0.417,0.273,0.25,0.286,0.375,0.353,0.333,0.6,0.5,0.4,0.286,0.5,0.417,0.545,0.5,0,0.545,0.25,0.375,0.25,0.111,0.308,0.455,0.583,0.444,0.5,0.231,0.286,0.4,0.533,0.583,0.545,0.333,0.429,0.636,0.385,0.5,0.4,0.462,0.364,0.357,0.5,0.471,0.2,0.545,0.3,0.5]
      },
      {
        name: 'FG3A : Three Pointers Attempted',
        type: 'line',
        // stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(221, 105, 94)'
            },
            {
              offset: 1,
              color: 'rgb(221, 105, 94)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [3,5,3,5,2,2,1,6,1,3,2,1,2,2,2,0,2,6,4,3,4,4,5,2,6,3,2,4,4,3,4,4,2,9,6,5,4,1,1,2,6,2,2,2,5,4,8,8,7,9,10,3,4,2,5,2,7,5,11,10,4,6,3,8,5,6,8,2,9,8,4,7,8,9,3,5,6,5,2,4,5,11,6,5,10,6,4,6,3,5,1,3,4,6,5,6,3,4,3,4,1,5,3,3,6,3,6,2,5,3,6,3,7,5,0,5,6,3,5,2,6,3,4,6,6,7,5,3,7,9,5,3,5,8,4,4,6,3,3,5,3,3,2,2,7,8,7,4,3,5,4,10,6,8,4,5,3,2,3,6,4,8,6,3,5,6,6,4,4,4,2,4,3,8,3,4,6,7,8,7,3,5,8,2,9,6,4,2,5,9,5,3,0,3,2,4,1,1,5,4,0,6,10,7,6,6,6,6,5,3,8,7,4,2,10,7,5,6,6,9,8,7,3,5,11,3,12,13,10,7,4,5,8,5,8,8,9,8,8,14,7,9,3,10,5,7,9,3,5,9,6,9,5,10,13,11,9,5,5,8,6,10,7,5,11,9,8,10,9,9,12,10,8,9,9,6,15,13,11,10,10,7,11,6,8,14,6,9,10,7,8,4,7,4,10,5,10,5,5,14,8,9,3,10,4,8,5,7,9,5,10,10,8,7,5,7,16,11,5,7,7,16,9,3,6,6,10,5,15,7,5,11,10,8,13,10,9,11,10,8,7,4,13,7,6,10,9,4,4,8,4,9,5,11,11,5,4,4,5,5,5,10,12,6,5,4,8,12,8,4,5,10,7,5,14,13,6,7,8,14,7,8,7,2,4,7,3,7,5,7,9,8,5,8,9,10,7,7,6,9,6,6,11,8,10,3,9,6,5,7,5,11,10,10,12,5,5,5,9,6,11,4,8,8,9,10,6,8,5,5,7,5,9,11,9,6,16,9,9,12,10,8,9,9,4,8,12,13,8,2,13,7,10,6,6,10,6,8,9,12,9,6,11,4,10,8,13,11,6,4,13,9,18,8,8,11,10,9,13,13,11,11,9,13,11,6,15,13,7,13,11,5,11,8,1,10,8,12,9,14,8,11,16,10,7,10,13,16,10,14,11,8,12,16,6,8,11,15,9,10,13,9,5,6,8,4,13,5,10,8,11,14,11,12,16,15,12,9,15,9,7,11,11,15,9,16,10,13,8,11,12,15,16,15,10,13,9,14,16,9,13,12,12,9,10,12,9,8,10,14,13,14,7,14,9,19,7,7,16,11,14,8,11,10,8,14,12,8,8,9,13,15,13,14,5,6,5,9,5,12,13,10,10,8,10,6,10,17,8,13,9,9,10,11,6,12,10,8,11,13,7,7,8,9,11,5,9,8,8,9,13,10,7,6,6,9,13,13,11,11,9,12,6,11,13,9,12,15,15,10,14,4,6,11,11,8,10,10,11,9,11,13,15,9,8,13,7,8,12,9,11,12,11,8,9,14,8,12,8,14,8,12,14,11,4,8,11,10,16,9,7,13,11,11,9,9,9,6,5,9,6,9,11,11,10,11,13,7,11,4,10,9,7,8,9,9,10,8,11,13,9,8,9,11,13,13,10,16,10,7,8,11,15,15,9,13,7,10,12,9,9,7,9,10,11,12,9,9,9,12,0,8,10,9,9,6,5,8,12,13,8,14,15,11,17,10,15,9,8,3,7,9,9,16,13,16,11,15,4,11,12,6,4,9,10,14,9,14,8,14,9,9,17,15,8,15,8,9,15,20,12,11,19,13,17,11,10,8,12,8,18,9,5,11,10,14,14,16,11,14,14,17,15,10,10,15,9,12,18,14,12,10,12,19,8,10,9,12,10,2,12,11,6,9,5,5,10,13,9,14,11,11,15,14,16,16,9,10,14,9,14,11,5,9,8,15,11,9,10,7,12,7,13,13,10,15,12,16,12,6,14,10,8,11,12,8,14,10,12,11,10,8,14,10,19,11,10,19,9,11,20,16,14,11,8,7,14,8,9,7,11,10,10,15,9,12,14,11,12,10,12,15,18,16,13,19,17,14,9,14,9,17,17,18,20,13,21,13,11,22,9,15,8,6,14,14,8,13,15,9,20,15,11,13,11,19,9,17,13,14,16,6,11,15,13,14,11,17,13,17,14,15,14,14,12,14,16,14,12,10,9,11,9,6,10,8,16,13,13,10,10,10,14,7,10,8,16,8,13,7,7,10,16,5,9,6,12,4,14,4,6,10,9,11,11,12,11,8,14,8,17,9,10,10,5,7,14,12,11,14,9,11,4,8,8,9,13,11,12,9,14,13,14,10,15,12,11,9,7,11,13,14,10,13,11,14,8,17,10,11,10,10]
      },
      {
        name: 'FG3M : Three Pointers Made',
        type: 'line',
        // stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(240, 147, 91)'
            },
            {
              offset: 1,
              color: 'rgb(240, 147, 91)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,4,2,0,0,6,2,2,2,2,3,0,0,4,3,2,2,5,4,3,3,4,5,2,4,1,2,3,1,7,8,3,4,1,4,6,1,4,3,7,2,6,3,3,5,1,6,1,2,4,1,2,4,2,3,1,7,11,3,3,2,2,3,2,6,5,0,5,6,4,6,3,2,7,4,3,4,2,3,9,7,4,4,4,4,6,1,4,6,2,3,5,1,2,0,4,2,3,1,5,1,2,9,5,2,0,4,2,4,0,4,2,2,6,4,5,3,1,2,5,6,1,4,2,6,4,2,2,1,5,1,8,1,1,2,2,3,4,6,2,3,6,5,2,4,8,1,4,3,6,4,1,5,3,3,1,5,4,2,1,1,1,1,2,5,6,3,3,1,5,6,3,1,2,5,2,4,7,7,2,1,3,7,4,2,3,0,3,4,3,1,4,3,2,3,1,4,6,4,0,3,3,5,2,2,8,6,1,1,3,3,1,1,3,3,6,1,5,1,2,1,4,3,5,1,4,3,4,7,2,2,2,3,2,1,2,5,4,2,10,4,5,3,2,4,5,3,3,5,6,6,5,2,7,1,6,2,2,2,3,5,5,8,6,4,6,1,5,5,8,5,3,2,4,3,7,6,4,2,2,4,6,8,6,5,7,6,3,2,2,7,4,7,3,3,6,1,1,5,4,5,4,8,4,7,8,2,3,3,8,5,5,6,3,3,4,9,3,4,8,9,5,3,6,2,2,2,2,1,6,1,5,4,4,8,4,5,8,7,7,3,8,6,3,5,3,11,1,7,5,7,3,5,6,10,12,5,1,7,3,7,7,4,8,6,1,2,4,5,2,6,5,8,9,4,3,3,4,10,5,1,5,5,6,5,3,2,3,6,7,3,4,3,7,5,6,4,1,3,2,2,2,6,8,3,4,5,5,2,0,13,4,7,5,3,2,1,2,7,4,4,4,4,5,2,0,3,3,2,5,2,5,4,3,5,2,3,3,3,5,5,5,4,3,5,2,5,7,3,6,9,11,3,8,1,2,4,1,2,6,5,0,2,2,5,6,2,1,5,2,6,7,3,5,5,3,4,4,9,3,8,6,5,3,4,5,7,1,5,3,4,7,6,3,5,6,4,5,2,2,1,2,6,4,3,4,6,2,4,3,3,7,3,5,2,2,3,2,4,4,3,4,3,3,3,5,5,10,6,4,8,5,2,4,6,5,8,5,8,1,3,5,2,4,3,3,3,8,5,4,4,4,6,0,3,5,3,4,3,1,1,5,6,2,5,7,5,9,1,7,5,3,2,4,5,5,6,6,11,6,7,2,7,4,3,0,3,6,9,4,7,2,5,3,5,6,6,2,6,2,5,5,10,3,5,11,8,9,3,2,2,6,6,10,2,3,3,5,5,5,10,5,4,4,5,5,4,4,4,3,5,6,8,5,5,6,11,5,5,1,9,3,1,8,5,4,1,4,2,3,3,2,4,3,4,9,4,6,7,4,3,6,2,5,3,1,6,3,6,2,2,4,1,1,1,0,2,0,0,0,2,0,2,1,0,1,1,0,0,2,2,1,2,2,1,1,1,2,1,0,2,1,0,3,1,0,5,2,3,3,0,0,1,6,0,1,1,3,1,5,3,3,4,3,1,2,2,2,0,3,1,7,1,1,3,1,1,2,3,3,1,5,4,2,2,5,5,1,2,4,3,2,1,1,5,3,3,5,3,1,4,3,1,1,2,1,1,0,3,1,1,0,2,1,2,0,2,3,1,1,0,4,2,3,1,4,3,0,0,4,0,4,1,3,1,3,0,1,5,2,0,3,3,2,1,4,3,2,2,0,1,2,2,3,0,1,0,5,4,3,1,1,2,2,4,4,5,2,2,1,1,2,4,1,5,1,1,3,2,3,3,2,1,1,0,1,3,2,3,2,2,6,2,0,2,3,1,6,3,1,0,3,6,3,1,0,2,1,2,0,3,2,5,6,2,5,4,8,5,1,9,1,3,5,3,4,5,5,7,4,5,6,7,4,11,6,4,10,2,7,5,6,7,1,3,2,5,1,6,4,2,2,2,5,5,4,6,5,3,5,5,8,10,11,4,11,10,2,4,7,5,6,7,8,8,6,11,3,1,9,6,6,3,4,3,7,2,8,4,4,7,6,3,5,4,9,3,9,3,9,9,1,6,6,7,3,6,5,7,6,3,5,5,5,4,8,5,5,6,1,1,4,2,2,4,4,6,4,1,2,6,3,7,4,4,3,5,1,8,1,2,3,5,4,4,1,5,2,7,1,3,5,3,3,5,5,3,2,4,3,6,3,6,5,2,2,7,5,6,7,0,6,1,3,2,1,4,5,7,4,7,3,4,4,8,7,6,3,3,7,5,7,4,6,4,5,4,8,2,6,3,5,]
      }
    ]
  };

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);