function App(){
    return(
    <div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav messages={state.messages}/>
            <SideNav />
          </nav>
  
          <div id="page-wrapper">
  
              <div className="container-fluid">
  
                  
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-header">
                              Dashboard <small>Statistics Overview</small>
                          </h1>
                          <ol className="breadcrumb">
                              <li className="active">
                                  <i className="fa fa-dashboard"></i> Dashboard
                              </li>
                          </ol>
                      </div>
                  </div>
                  <div className="row">
                    <Comments newComments={state.newComments} />
                    <Tasks newTasks={state.newTasks} />
                    <Orders newOrders={state.newOrders} />
                    <Tickets tickets={state.tickets} />
                  </div>
                    <AreaChart />
                  <div className="row">
                    <DonutChart />
                    <div className="col-lg-4">
                        <TaskPanel tasks={state.tasks}/>
                    </div>
                    <div className="col-lg-4">
                        <TransactionPanel orders={state.orders}/>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>)
}