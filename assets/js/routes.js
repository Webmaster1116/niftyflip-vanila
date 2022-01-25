const routes = [
  {
    path: "/",
    template: `<div class="dashboard">
                <!-- Begin: Introduction part -->
                <div class="intro">
                <div class="text">
                    <h1 style="font-size: 1.9rem">Let the adventure<br />begin</h1>
                    <label>
                    Solana's first P2P gambleing site<br />what are you waiting for?
                    </label>
                    <div>
                    <button class="btn btn-pink btn-shadow mt-4 mt-2 line-height-2">
                        Join Discord
                    </button>
                    </div>
                </div>
                <div class="avatar-box">
                    <span class="avatar">
                    <img
                        src="assets/img/avatar3.png"
                        width="180px"
                        class="avatar-style"
                    />
                    </span>
                    <span class="avatar">
                    <img
                        src="assets/img/avatar.gif"
                        width="180px"
                        class="avatar-style"
                    />
                    </span>
                    <span class="avatar">
                    <img
                        src="assets/img/avatar1.png"
                        width="180px"
                        class="avatar-style"
                    />
                    </span>
                </div>
                </div>
                <!-- End: Introduction part -->

                <!-- Begin: Filter and game create part -->
                <div class="filter-group my-3">
                <div class="d-flex align-items-center toggle color-white sm-12">
                    <span>Sort by price</span>
                    <input type="checkbox" id="switch" /><label for="switch"
                    >Toggle</label
                    >
                    <span style="margin-left: 10px">Sort by date</span>
                </div>
                <div class="d-flex sm-9 text-right">
                    <div class="d-flex align-items-center dark mx-03">
                    <i class="fa fa-circle-o" style="font-size: 1.4rem"></i>
                    <span class="mx-03"
                        >Total games <span style="font-weight: bold">10 </span></span
                    >
                    </div>
                    <div class="d-flex align-items-center dark mx-03">
                    <i class="fa fa-circle-o" style="font-size: 1.4rem"></i>
                    <span class="mx-03"
                        >Total value <span style="font-weight: bold">10,201</span></span
                    >
                    </div>
                </div>
                <div class="sm-3">
                    <button class="btn btn-pink line-height-2">Create games</button>
                </div>
                </div>
                <!-- End: Filter and game create part -->

                <!-- Begin: List part -->
                <div class="list">
                <div class="d-flex aling-items-center sm-12">
                    <div class="avatar-list">
                    <div class="dark-panel">
                        <i
                        class="fa fa-circle-o pr-03"
                        style="border-right: 1px solid #262c40"
                        ></i>
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03"
                        style="border-radius: 50%"
                        width="20px"
                        />
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03 avatar-outline"
                        width="20px"
                        />
                    </div>
                    </div>
                    <div class="dark-panel mx-03 ml-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                </div>
                <div class="item-list">
                    <div class="dark-panel color-white">19&nbsp;SOL</div>
                    <div class="dark-panel color-white">Join</div>
                    <div class="dark-panel color-white">
                    <i class="fa fa-eye"></i
                    ><span style="margin-left: 5px" id="view_modal">Spectate</span>
                    </div>
                </div>
                </div>
                <div class="list">
                <div class="d-flex aling-items-center sm-12">
                    <div class="avatar-list">
                    <div class="dark-panel">
                        <i
                        class="fa fa-circle-o pr-03"
                        style="border-right: 1px solid #262c40"
                        ></i>
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03"
                        style="border-radius: 50%"
                        width="20px"
                        />
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03 avatar-outline"
                        width="20px"
                        />
                    </div>
                    </div>
                    <div class="dark-panel mx-03 ml-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                </div>
                <div class="item-list">
                    <div class="dark-panel color-white">19&nbsp;SOL</div>
                    <div class="dark-panel color-white">Join</div>
                    <div class="dark-panel color-white">
                    <i class="fa fa-eye"></i
                    ><span style="margin-left: 5px">Spectate</span>
                    </div>
                </div>
                </div>
                <div class="list">
                <div class="d-flex aling-items-center sm-12">
                    <div class="avatar-list">
                    <div class="dark-panel">
                        <i
                        class="fa fa-circle-o pr-03"
                        style="border-right: 1px solid #262c40"
                        ></i>
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03"
                        style="border-radius: 50%"
                        width="20px"
                        />
                        <img
                        src="assets/img/avatarmini1.png"
                        class="mx-03 avatar-outline"
                        width="20px"
                        />
                    </div>
                    </div>
                    <div class="dark-panel mx-03 ml-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                    <div class="dark-panel mx-03">
                    <img
                        src="assets/img/avatar.gif"
                        width="23px"
                        style="border-radius: 50%"
                    />
                    </div>
                </div>
                <div class="item-list">
                    <div class="dark-panel color-white">19&nbsp;SOL</div>
                    <div class="dark-panel color-white">Join</div>
                    <div class="dark-panel color-white">
                    <i class="fa fa-eye"></i
                    ><span style="margin-left: 5px">Spectate</span>
                    </div>
                </div>
                </div>
                <!-- End: List part -->
            </div>
            <!-- Begin: Modal -->
            <div class="modal-container">
            <div class="modal">
                <div class="modal-header">
                <span class="btn btn-close modal-close" id="close_modal">x</span>
                <img class="avatar-outline" src="assets/img/avatarmini1.png" />
                </div>
                <div class="modal-body">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="chat-item">
                    <div class="dark-panel justify-content-center">
                        <span>Coinflip&nbsp;created</span>
                    </div>
                    <div class="dark-panel justify-content-center">
                        <span>Coinflip&nbsp;Won</span>
                    </div>
                    <div class="dark-panel justify-content-center">
                        <span>Deposts</span>
                    </div>
                    <div class="dark-panel justify-content-center">
                        <span>Withdraws</span>
                    </div>
                    </div>
                    <div class="chart-panel" id="chart_panel"></div>
                </div>
                </div>
            </div>
            </div>
            <!-- End: Modal -->
            <script src="./assets/js/modal.js"></script>`,
  },
  {
    path: "/withdraw",
    template: `<div class="dashboard">
                <div class="title">
                <img src="assets/img/logo.png" width="50px" />
                <h1 class="color-white">Withdraw</h1>
                </div>
                <div class="withdraw-panel">
                <div class="card-panel">
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                </div>
                <div class="checkout text-center">
                    <span class="btn btn-close" id="close_checkout">x</span>
                    <h5>Subscribe Items</h5>
                    <div class="items">
                    <img src="assets/img/avatar1.png" />
                    <div class="d-flex-col justify-content-between">
                        <p>Lorem ipsum</p>
                        <p class="font-bold">150&nbsp;SOL</p>
                    </div>
                    </div>
                    <div class="items">
                    <img src="assets/img/avatar1.png" />
                    <div class="d-flex-col justify-content-between">
                        <p>Lorem ipsum</p>
                        <p class="font-bold">150&nbsp;SOL</p>
                    </div>
                    </div>
                    <div class="checkout-footer">
                    <button class="btn btn-pink">WITHDRAW</button>
                    </div>
                </div>
                </div>
            </div>`,
  },
  {
    path: "/deposit",
    template: `<div class="dashboard">
                <div class="title">
                <img src="assets/img/logo.png" width="50px" />
                <h1 class="color-white">Deposit</h1>
                </div>
                <div class="withdraw-panel">
                <div class="card-panel">
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel justify-content-center">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                    <div class="card">
                    <img src="assets/img/avatar1.png" />
                    <div class="dark-panel">
                        <span>190&nbsp;SOL</span>
                    </div>
                    </div>
                </div>
                <div class="checkout text-center">
                    <span class="btn btn-close" id="close_checkout">x</span>
                    <h5>Subscribe Items</h5>
                    <div class="items">
                    <img src="assets/img/avatar1.png" />
                    <div class="d-flex-col justify-content-between">
                        <p>Lorem ipsum</p>
                        <p class="font-bold">150&nbsp;SOL</p>
                    </div>
                    </div>
                    <div class="items">
                    <img src="assets/img/avatar1.png" />
                    <div class="d-flex-col justify-content-between">
                        <p>Lorem ipsum</p>
                        <p class="font-bold">150&nbsp;SOL</p>
                    </div>
                    </div>
                    <div class="checkout-footer">
                    <button class="btn btn-pink">DEPOSIT</button>
                    </div>
                </div>
                </div>
            </div>`,
  },
]
