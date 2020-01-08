import React, { Component } from 'react';
import { contractServ } from '../Services/ContractServices';

export default class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            constarcts: [],
            pending: [],
            active: [],
            expired: [],
            history: [],
            totalPage: 0,
            page: 0,
            totalPendingPage: 0,
            pendingPage: 0,
            totalActivePage: 0,
            activePage: 0,
            totalExpiredPage: 0,
            expiredPage: 0,
            totalHistoryPage: 0,
            historyPage: 0,
        }
    }

    componentDidMount() {
        this.loadContracts(0);
        this.loadPendingContracts(0);
        this.loadActiveContracts(0);
        this.loadExpiredContracts(0);
        this.loadHistoryContracts(0);
    }

    loadContracts(page) {
        contractServ.getContracts(page)
            .then(res => {
                if (res.code === 1) {
                    let total = Math.ceil(Number.parseInt(res.info.total) / 4);
                    if (total === 0) total = 1;
                    this.setState({ constarcts: res.info.data, totalPage:   total, });
                }
                else {
                    alert('The was an error when connecting to the server');
                }
            })
            .catch(err => {
                alert('The was an error when connecting to the server');
            })
    }

    loadPendingContracts(page) {
        contractServ.getPendingContracts(page)
            .then(res => {
                if (res.code === 1) {
                    let total = Math.ceil(Number.parseInt(res.info.total) / 4);
                    if (total === 0) total = 1;
                    this.setState({ pending: res.info.data, totalPendingPage: total });
                }
                else {
                    alert('The was an error when connecting to the server');
                }
            })
            .catch(err => {
                alert('The was an error when connecting to the server');
            })
    }

    loadActiveContracts(page) {
        contractServ.getActiveContracts(page)
            .then(res => {
                if (res.code === 1) {
                    let total = Math.ceil(Number.parseInt(res.info.total) / 4);
                    if (total === 0) total = 1;
                    this.setState({ active: res.info.data, totalActivePage: total });
                }
                else {
                    alert('The was an error when connecting to the server');
                }
            })
            .catch(err => {
                alert('The was an error when connecting to the server');
            })
    }

    loadExpiredContracts(page) {
        contractServ.getExpiredContracts(page)
            .then(res => {
                if (res.code === 1) {
                    let total = Math.ceil(Number.parseInt(res.info.total) / 4);
                    if (total === 0) total = 1;
                    this.setState({ expired: res.info.data, totalExpiredPage: total });
                }
                else {
                    alert('The was an error when connecting to the server');
                }
            })
            .catch(err => {
                alert('The was an error when connecting to the server');
            })
    }

    loadHistoryContracts(page) {
        contractServ.getHistoryContracts(page)
            .then(res => {
                console.log(res);
                if (res.code === 1) {
                    let total = Math.ceil(Number.parseInt(res.info.total) / 4);
                    if (total === 0) total = 1;
                    this.setState({ history: res.info.data, totalHistoryPage: total });
                }
                else {
                    alert('The was an error when connecting to the server');
                }
            })
            .catch(err => {
                alert('The was an error when connecting to the server');
            })
    }

    onPagi(pageNavigate) {
        if (pageNavigate !== this.state.page && pageNavigate >= 0 && pageNavigate < this.state.totalPage) {
            this.setState({
                page: pageNavigate,
            })

            this.loadContracts(pageNavigate);
        }
    }

    onPendingPagi(pageNavigate) {
        if (pageNavigate !== this.state.pendingPage && pageNavigate >= 0 && pageNavigate < this.state.totalPendingPage) {
            this.setState({
                pendingPage: pageNavigate,
            })

            this.loadPendingContracts(pageNavigate);
        }
    }

    onActivePagi(pageNavigate) {
        if (pageNavigate !== this.state.activePage && pageNavigate >= 0 && pageNavigate < this.state.totalActivePage) {
            this.setState({
                activePage: pageNavigate,
            })

            this.loadActiveContracts(pageNavigate);
        }
    }

    onExpiredPagi(pageNavigate) {
        if (pageNavigate !== this.state.expiredPage && pageNavigate >= 0 && pageNavigate < this.state.totalExpiredPage) {
            this.setState({
                expiredPage: pageNavigate,
            })

            this.loadExpiredContracts(pageNavigate);
        }
    }

    onHistoryPagi(pageNavigate) {
        if (pageNavigate !== this.state.historyPage && pageNavigate >= 0 && pageNavigate < this.state.totalHistoryPage) {
            this.setState({
                historyPage: pageNavigate,
            })

            this.loadHistoryContracts(pageNavigate);
        }
    }

    generateContract() {
        let content = [];
        for (let e of this.state.constarcts) {
            content.push(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.StartDate}</td>
                    <td>{e.EndDate}</td>
                    <td>{e.EstimatedEndDate}</td>
                    <td>$&nbsp;{e.totalPrice}</td>
                </tr>
            );
        }
        return content;
    }

    generatePendingContract() {
        let content = [];
        for (let e of this.state.pending) {
            content.push(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.StartDate}</td>
                    <td>{e.EndDate}</td>
                    <td>{e.EstimatedEndDate}</td>
                    <td>$&nbsp;{e.totalPrice}</td>
                </tr>
            );
        }
        return content;
    }

    generateActiveContract() {
        let content = [];
        for (let e of this.state.active) {
            content.push(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.StartDate}</td>
                    <td>{e.EndDate}</td>
                    <td>{e.EstimatedEndDate}</td>
                    <td>$&nbsp;{e.totalPrice}</td>
                </tr>
            );
        }
        return content;
    }

    generateExpiredContract() {
        let content = [];
        for (let e of this.state.expired) {
            content.push(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.StartDate}</td>
                    <td>{e.EndDate}</td>
                    <td>{e.EstimatedEndDate}</td>
                    <td>$&nbsp;{e.totalPrice}</td>
                </tr>
            );
        }
        return content;
    }

    generateHistoryContract() {
        let content = [];
        for (let e of this.state.history) {
            content.push(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.StartDate}</td>
                    <td>{e.EndDate}</td>
                    <td>{e.EstimatedEndDate}</td>
                    <td>$&nbsp;{e.totalPrice}</td>
                </tr>
            );
        }
        return content;
    }

    render() {
        var ContractBtn = '';
        var PendingBtn = '';
        var ActivedBtn = '';
        var ExpiredBtn = '';
        var HistoryBtn = '';

        if (this.state.tab === 1) {
            ContractBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-primary';
            ActivedBtn = 'nav-link  cursor-pointer font-weight-bold';
            ExpiredBtn = 'nav-link  cursor-pointer font-weight-bold';
            HistoryBtn = 'nav-link  cursor-pointer font-weight-bold';
            PendingBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else if (this.state.tab === 2) {
            ContractBtn = 'nav-link  cursor-pointer font-weight-bold';
            ActivedBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-success';
            ExpiredBtn = 'nav-link  cursor-pointer font-weight-bold';
            HistoryBtn = 'nav-link  cursor-pointer font-weight-bold';
            PendingBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else if (this.state.tab === 3) {
            ContractBtn = 'nav-link  cursor-pointer font-weight-bold';
            ActivedBtn = 'nav-link  cursor-pointer font-weight-bold';
            ExpiredBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-warning';
            HistoryBtn = 'nav-link  cursor-pointer font-weight-bold';
            PendingBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else if (this.state.tab === 4) {
            ContractBtn = 'nav-link  cursor-pointer font-weight-bold';
            ActivedBtn = 'nav-link  cursor-pointer font-weight-bold';
            ExpiredBtn = 'nav-link  cursor-pointer font-weight-bold';
            HistoryBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-dark';
            PendingBtn = 'nav-link  cursor-pointer font-weight-bold';
        }
        else {
            ContractBtn = 'nav-link  cursor-pointer font-weight-bold';
            ActivedBtn = 'nav-link  cursor-pointer font-weight-bold';
            ExpiredBtn = 'nav-link  cursor-pointer font-weight-bold';
            HistoryBtn = 'nav-link  cursor-pointer font-weight-bold';
            PendingBtn = 'nav-link  cursor-pointer font-weight-bold text-white bg-secondary';
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
                        <div className="my-1">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <div className={ContractBtn} onClick={() => { if (this.state.tab !== 1) this.setState({ tab: 1 }) }}>Pending</div>
                                </li>
                                <li className="nav-item">
                                    <div className={PendingBtn} onClick={() => { if (this.state.tab !== 5) this.setState({ tab: 5 }) }}>Pending</div>
                                </li>
                                <li className="nav-item">
                                    <div className={ActivedBtn} onClick={() => { if (this.state.tab !== 2) this.setState({ tab: 2 }) }}>Actived</div>
                                </li>
                                <li className="nav-item">
                                    <div className={ExpiredBtn} onClick={() => { if (this.state.tab !== 3) this.setState({ tab: 3 }) }}>Expired</div>
                                </li>
                                <li className="nav-item">
                                    <div className={HistoryBtn} onClick={() => { if (this.state.tab !== 4) this.setState({ tab: 4 }) }}>History</div>
                                </li>
                            </ul>
                        </div>

                        <div className="table-responsive">
                            <table className="col-12 table" id="dataTable" width="100%" cellSpacing={0} >
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>EstimatedEnd</th>
                                        <th>Bill</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tab === 1
                                        ?this.generateContract()
                                        : (this.state.tab === 2
                                            ?this.generatePendingContract()
                                            : (this.state.tab === 3
                                                ?this.generateActiveContract()
                                                : (this.state.tab === 4
                                                    ?this.generateExpiredContract()
                                                    :this.generateHistoryContract()
                                                )))}
                                </tbody>
                            </table>

                            {this.state.tab === 1
                                ?
                                <div>
                                    <nav className="w-75 mx-auto mb-4">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item" onClick={() => this.onPagi(0)}>
                                                <a className="page-link cursor-pointer">&lt;&lt;</a>
                                            </li>
                                            <li className="page-item" onClick={() => this.onPagi(this.state.page - 1)}>
                                                <a className="page-link cursor-pointer">&lt;</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link cursor-pointer">
                                                    {this.state.page + 1} / {this.state.totalPage}
                                                </a>
                                            </li>
                                            <li className="page-item" onClick={() => this.onPagi(this.state.page + 1)}>
                                                <a className="page-link cursor-pointer">&gt;</a>
                                            </li>
                                            <li className="page-item" onClick={() => this.onPagi(this.state.totalPage - 1)}>
                                                <a className="page-link cursor-pointer">&gt;&gt;</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                : (this.state.tab === 2
                                    ?
                                    <div>
                                        <nav className="w-75 mx-auto mb-4">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item" onClick={() => this.onPendingPagi(0)}>
                                                    <a className="page-link cursor-pointer">&lt;&lt;</a>
                                                </li>
                                                <li className="page-item" onClick={() => this.onPendingPagi(this.state.pendingPage - 1)}>
                                                    <a className="page-link cursor-pointer">&lt;</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link cursor-pointer">
                                                        {this.state.pendingPage + 1} / {this.state.totalPendingPage}
                                                    </a>
                                                </li>
                                                <li className="page-item" onClick={() => this.onPendingPagi(this.state.pendingPage + 1)}>
                                                    <a className="page-link cursor-pointer">&gt;</a>
                                                </li>
                                                <li className="page-item" onClick={() => this.onPendingPagi(this.state.totalPendingPage - 1)}>
                                                    <a className="page-link cursor-pointer">&gt;&gt;</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    : (this.state.tab === 3
                                        ?
                                        <div>
                                            <nav className="w-75 mx-auto mb-4">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item" onClick={() => this.onActivePagi(0)}>
                                                        <a className="page-link cursor-pointer">&lt;&lt;</a>
                                                    </li>
                                                    <li className="page-item" onClick={() => this.onActivePagi(this.state.activePage - 1)}>
                                                        <a className="page-link cursor-pointer">&lt;</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link cursor-pointer">
                                                            {this.state.activePage + 1} / {this.state.totalActivePage}
                                                        </a>
                                                    </li>
                                                    <li className="page-item" onClick={() => this.onActivePagi(this.state.activePage + 1)}>
                                                        <a className="page-link cursor-pointer">&gt;</a>
                                                    </li>
                                                    <li className="page-item" onClick={() => this.onActivePagi(this.state.totalActivePage - 1)}>
                                                        <a className="page-link cursor-pointer">&gt;&gt;</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        : (this.state.tab === 4
                                            ?
                                            <div>
                                                <nav className="w-75 mx-auto mb-4">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item" onClick={() => this.onExpiredPagi(0)}>
                                                            <a className="page-link cursor-pointer">&lt;&lt;</a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onExpiredPagi(this.state.expiredPage - 1)}>
                                                            <a className="page-link cursor-pointer">&lt;</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link cursor-pointer">
                                                                {this.state.expiredPage + 1} / {this.state.totalExpiredPage}
                                                            </a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onExpiredPagi(this.state.expiredPage + 1)}>
                                                            <a className="page-link cursor-pointer">&gt;</a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onExpiredPagi(this.state.totalExpiredPage - 1)}>
                                                            <a className="page-link cursor-pointer">&gt;&gt;</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            :
                                            <div>
                                                <nav className="w-75 mx-auto mb-4">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item" onClick={() => this.onHistoryPagi(0)}>
                                                            <a className="page-link cursor-pointer">&lt;&lt;</a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onHistoryPagi(this.state.historyPage - 1)}>
                                                            <a className="page-link cursor-pointer">&lt;</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link cursor-pointer">
                                                                {this.state.historyPage + 1} / {this.state.totalHistoryPage}
                                                            </a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onHistoryPagi(this.state.historyPage + 1)}>
                                                            <a className="page-link cursor-pointer">&gt;</a>
                                                        </li>
                                                        <li className="page-item" onClick={() => this.onHistoryPagi(this.state.totalHistoryPage - 1)}>
                                                            <a className="page-link cursor-pointer">&gt;&gt;</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        )))}
                        </div>


                    </div>
                </div>
                {/* End skill tag table */}
            </div>
        )
    }
}
