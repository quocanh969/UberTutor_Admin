import React, { Component } from 'react'
import { contractServ } from '../Services/ContractServices';

export default class TopMajor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 0,
            topList: [],
        }

        this.handleMethodChange = this.handleMethodChange.bind(this);
        this.statistic();
    }

    statistic() {
        switch(this.state.method)
        {
            case 0:
            {
                contractServ.getTopMajorsByIncome(1)
                .then(res=>{
                    if(res.code === 1)
                    {
                        this.setState({topList: res.info.data});
                    }
                    else
                    {
                        alert('There was an error when connecting to the server');    
                    }
                })
                .catch(err=>{
                    alert('There was an error when connecting to the server');
                })
                break;
            }
            case 1:
            {
                contractServ.getTopMajorsByIncome(7)
                .then(res=>{
                    if(res.code === 1)
                    {
                        this.setState({topList: res.info.data});
                    }
                    else
                    {
                        alert('There was an error when connecting to the server');    
                    }
                })
                .catch(err=>{
                    alert('There was an error when connecting to the server');
                })
                break;
            }
            case 2:
            {
                contractServ.getTopMajorsByIncome(30)
                .then(res=>{
                    if(res.code === 1)
                    {
                        this.setState({topList: res.info.data});
                    }
                    else
                    {
                        alert('There was an error when connecting to the server');    
                    }
                })
                .catch(err=>{
                    alert('There was an error when connecting to the server');
                })
                break;
            }
            case 3:
            {
                contractServ.getTopMajorsByIncome(90)
                .then(res=>{
                    if(res.code === 1)
                    {
                        this.setState({topList: res.info.data});
                    }
                    else
                    {
                        alert('There was an error when connecting to the server');    
                    }
                })
                .catch(err=>{
                    alert('There was an error when connecting to the server');
                })
                break;
            }
            case 4:
            {
                contractServ.getTopMajorsAllTime()
                .then(res=>{
                    if(res.code === 1)
                    {
                        this.setState({topList: res.info.data});
                    }
                    else
                    {
                        alert('There was an error when connecting to the server');    
                    }
                })
                .catch(err=>{
                    alert('There was an error when connecting to the server');
                })
                break;
            }
            default:
            {
                return;
            }
                
        }
    }
    
    handleMethodChange(e)
    {        
        this.setState({method: Number.parseInt(e.target.value)});        
    }

    generateTable() {
        let content = [];
        for(let i = 0; i< this.state.topList.length;i++)
        {
            let e = this.state.topList[i];
            content.push(
                <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td className='text-center'>{e.id}</td>
                    <td>{e.name}</td>
                    <td>$&nbsp;{e.total}</td>
                </tr>
            );
        }
        return content;
    }

    render() {
        return (
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-10 text-dark'>
                        Top tutor in:&nbsp;&nbsp;&nbsp;
                        <select defaultValue={0} onChange={this.handleMethodChange}>
                            <option value={0}>1 Day</option>
                            <option value={1}>1 Week</option>
                            <option value={2}>30 Day</option>
                            <option value={3}>90 Day</option>
                            <option value={4}>All</option>
                        </select>
                    </div>
                    <div className='col-2 btn btn-primary cursor-pointer font-weight-bold' onClick={()=>{this.statistic()}}>
                        MAKE STATISTIC
                    </div>
                </div>
                
                <div>
                {this.state.method === 0
                ?'Top 5 major have most income of 1 day'
                :(this.state.method === 1
                ?'Top 5 major have most income of 7 days'
                :(this.state.method === 2
                    ?'Top 5 major have most income of 30 days'
                    :(this.state.method === 3
                        ?'Top 5 major have most income of 90 days'
                        :'Top 5 major have most income of all times')))}
                </div>
                <div className='px-3 my-3'>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Major Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
