import React, { Component } from 'react'
import IncomeStatistic from './IncomeStatistic';
import TopTutor from './TopTutor';
import TopMajor from './TopMajor';

export default class Statistic extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            tab: 1,
        }

    }

    render() {
        var IncomeStatisticBtn = '';
        var TopTutorBtn = '';
        var TopMajorBtn = '';
        if (this.state.tab === 1) {
            IncomeStatisticBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-secondary';
            TopTutorBtn = 'nav-link  cursor-pointer font-weight-bold';
            TopMajorBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else if (this.state.tab === 2) {
            IncomeStatisticBtn = 'nav-link  cursor-pointer font-weight-bold';
            TopTutorBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-secondary';
            TopMajorBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else {
            IncomeStatisticBtn = 'nav-link  cursor-pointer font-weight-bold';
            TopTutorBtn = 'nav-link  cursor-pointer font-weight-bold';
            TopMajorBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-secondary';
        }

        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Contracts table</h1>
                <p className="mb-4">
                    All the contract that was made by tutor and learner is saved.
                </p>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Contracts</h6>
                    </div>
                    <div className="card-body">
                        <div className="mt-1">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <div className={IncomeStatisticBtn} onClick={() => { if (this.state.tab !== 1) this.setState({ tab: 1 }) }}>Income Statistic</div>
                                </li>
                                <li className="nav-item">
                                    <div className={TopTutorBtn} onClick={() => { if (this.state.tab !== 2) this.setState({ tab: 2 }) }}>Top Tutor</div>
                                </li>
                                <li className="nav-item">
                                    <div className={TopMajorBtn} onClick={() => { if (this.state.tab !== 3) this.setState({ tab: 3 }) }}>Top Major</div>
                                </li>
                            </ul>
                        </div>

                        <div className="table-responsive">
                            {this.state.tab === 1
                            ?
                            <IncomeStatistic></IncomeStatistic>
                            :(this.state.tab === 2
                            ?<TopTutor></TopTutor>
                            :<TopMajor></TopMajor>)}
                        </div>
                    </div>
                </div>
                {/* End skill tag table */}
            </div>
        )
    }
}
