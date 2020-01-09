import React, { Component } from 'react';
import { contractServ } from '../Services/ContractServices';
import ZingChart from "zingchart-react";

export default class IncomeStatistic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            method: 0,
            year: 0,
            month: 0,
            total: 0,
            date: new Date(),
            series: [{
                text: "Income",
                values:this.arr,
            }],
            config: {
              backgroundColor: "#ecf2f6",
              graphset: [
                {
                  type: "line",
                  backgroundColor: "#fff",
                  borderColor: "#dae5ec",
                  borderWidth: "1px",
                  width: "100%",
                  height: "100%",
                  x: "0",
                  y: "0",
                  title: {
                    text: "Year's Income",
                    marginTop: "7px",
                    marginLeft: "12px",
                    backgroundColor: "none",
                    fontColor: "#707d94",
                    fontFamily: "Arial",
                    fontSize: "11px",
                    shadow: false,
                    textAlign: "left"
                  },
                  plot: {
                    animation: {
                      delay: 500,
                      effect: "ANIMATION_SLIDE_LEFT"
                    }
                  },
                  plotarea: {
                    margin: "50px 25px 70px 46px"
                  },
                  scaleY: {
                    values: "0:500000:50000",
                    //values: "0:100:25",
                    guide: {
                      alpha: 0.75,
                      lineColor: "#d2dae2",
                      lineStyle: "solid",
                      lineWidth: "1px"
                    },
                    item: {
                      paddingRight: "5px",
                      fontColor: "#8391a5",
                      fontFamily: "Arial",
                      fontSize: "10px"
                    },
                    lineColor: "none",
                    tick: {
                      visible: false
                    }
                  },
                  legend: {
                    margin: "auto auto 15 auto",
                    backgroundColor: "none",
                    borderWidth: "0px",
                    item: {
                      margin: "0px",
                      padding: "0px",
                      fontColor: "#707d94",
                      fontFamily: "Arial",
                      fontSize: "9px"
                    },
                    layout: "x4",
                    marker: {
                      type: "match",
                      padding: "3px",
                      fontFamily: "Arial",
                      fontSize: "10px",
                      lineWidth: "2px",
                      showLine: "true",
                      size: 4
                    },
                    shadow: false
                  },
                  scaleLabel: {
                    padding: "5px 10px",
                    backgroundColor: "#707d94",
                    borderRadius: "5px",
                    fontColor: "#ffffff",
                    fontFamily: "Arial",
                    fontSize: "10px"
                  },
                  crosshairX: {
                    lineColor: "#707d94",
                    lineWidth: "1px",
                    plotLabel: {
                      padding: "5px 10px",
                      alpha: 1,
                      borderRadius: "5px",
                      fontColor: "#000",
                      fontFamily: "Arial",
                      fontSize: "10px",
                      shadow: false
                    }
                  },
                  tooltip: {
                    visible: false
                  },
                  series: [
                    {
                      text: "Income",
                      values: this.arr,
                      lineColor: "#4dbac0",
                      lineWidth: "2px",
                      marker: {
                        backgroundColor: "#fff",
                        borderColor: "#36a2a8",
                        borderWidth: "1px",
                        shadow: false,
                        size: 3
                      },
                      palette: 0,
                      shadow: false
                    },
                  ]
                }
              ]
            }
        }

        this.handleMethodChange = this.handleMethodChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }
 
    drawChart() {
        // validate
        if((this.state.method === 1 && (this.state.year === 0 || this.state.month === 0)) || (this.state.method === 2 && this.state.year === 0))
        {
            alert('Please choose the right duration');
        }
        else
        {
            if(this.state.method === 0)
            {// by year
                contractServ.getIncomeEachYear()
                .then(res=>{
                    if(res.code === 1)
                    {
                        let data = res.info.data;
                        let tempSeries = data.map(e=>{
                            return e.total;
                        })
                        this.setState({series:{values: tempSeries}});
                    }
                    else
                    {
                        console.log(res.info.message);
                    }
                })
                .catch(err=>{
                    console.log(err);
                }) 
            }
            else if(this.state.method === 1)
            {// by month
                contractServ.getStatisticByMonth(this.state.year,this.state.month)
                .then(res=>{
                    let data = res.info.data;
                    let tempSeries = data.map(e=>{
                        return e.total;
                    })
                    this.setState({series:{values: tempSeries}});
                })
                .catch(err=>{
                    console.log(err);
                })                
            }
            else if(this.state.method === 3)
            {// by date 
                console.log(this.state.date);               
                //let dayStr = `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1 < 10 ? '0'+(this.state.date.getMonth()+1):(this.state.date.getMonth()+1)}-${this.state.date.getDate() < 10 ? '0'+this.state.date.getDate():this.state.date.getDate()}`
                //console.log(dayStr);
                contractServ.getStatisticByDate(this.state.date)
                .then(res=>{
                    if(res.info.data[0].total === null)
                    {
                        this.setState({total: 0});
                    }
                    else
                    {
                        this.setState({total: res.info.data[0].total});
                    }
                })
                .catch(err=>{
                    console.log(err);
                })                
            }
            else
            {// by week
                contractServ.getStatisticByWeek(this.state.year)
                .then(res=>{
                    let data = res.info.data;
                    let tempSeries = data.map(e=>{
                        return e.total;
                    })
                    this.setState({series:{values: tempSeries}});
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }

    generateByMonthOption() {
        let content = [];
        for(let i = 1; i <= 12; i++)
        {
            content.push(
                <option key={i} value={i}>{i}</option>
            );
        }
        return content;
    }

    generateByYearOption() {
        let content = [];
        for(let i = 2010; i <= 2030; i++)
        {
            content.push(
                <option key={i} value={i}>{i}</option>
            );
        }
        return content;
    }

    handleMethodChange(e)
    {        
        this.setState({method: Number.parseInt(e.target.value),year: 0, month: 0, date: new Date()});        
    }

    handleDateChange(e)
    {
        this.setState({date: e.target.value});
    }

    handleMonthChange(e)
    {
        this.setState({month: Number.parseInt(e.target.value)});
    }

    handleYearChange(e)
    {
        this.setState({year: Number.parseInt(e.target.value)});
    }

    render() {
        return (
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-5 text-dark'>
                        Method:&nbsp;&nbsp;&nbsp;
                        <select defaultValue={0} onChange={this.handleMethodChange}>
                            <option value={0}>By Year</option>
                            <option value={1}>By Month</option>
                            <option value={2}>By Week</option>
                            <option value={3}>By Date</option>
                        </select>
                    </div>
                    {this.state.method === 0
                    ?
                    <div className='col-5'></div>
                    :
                    (this.state.method === 1
                        ?
                        <div className='col-5 row'>
                            <div className='col-6 text-dark'>
                                Year:&nbsp;&nbsp;&nbsp;
                                <select defaultValue={0} onChange={this.handleYearChange}>
                                    <option value={0}>--/--</option>
                                    {this.generateByYearOption()}
                                </select>
                            </div>
                            <div className='col-6 text-dark'>
                                Month:&nbsp;&nbsp;&nbsp;
                                <select defaultValue={0} onChange={this.handleMonthChange}>
                                    <option value={0}>--/--</option>
                                    {this.generateByMonthOption()}
                                </select>
                            </div>
                        </div>
                        :(this.state.method === 2
                            ?
                        <div className='col-5 text-dark'>
                            Year:&nbsp;&nbsp;&nbsp;
                            <select defaultValue={0} onChange={this.handleYearChange}>
                                <option value={0}>--/--</option>
                                {this.generateByYearOption()}
                            </select>
                        </div>
                        :
                        <div className='col-5 text-dark'>
                            <input type='date' ref='endDate' defaultValue={new Date()} className='col-8' onChange={this.handleDateChange}></input>
                        </div>
                    ))}
                    <div className='col-2 btn btn-primary cursor-pointer' onClick={()=>{this.drawChart()}}>
                        Draw chart !!
                    </div>
                </div>
                
                <div>
                {this.state.method === 0
                ?'From year 2010 as 0 in the chart'
                :(this.state.method === 1
                ?'From day 1 of month as 0 in the chart'
                :(this.state.method === 2
                    ?'From week 1 as 0 in the chart'
                    :`Income in 1 date`))}
                </div>
                <div className='px-3 my-3'>
                    {this.state.method !== 3
                    ?
                    <ZingChart ref='chart' data={this.state.config} series={this.state.series} scaleX={this.state.scaleX}/>
                    :<h3 className='font-weight-bold'>Total Income:  $ {this.state.total}</h3>
                    }
                </div>
            </div>
        )
    }
}
