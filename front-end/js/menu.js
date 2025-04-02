var token = localStorage.getItem("token");
const exceptionCode = 417;
var tokenFcm = "";
async function loadMenu() {
    var dn = `<a href="login.html" class="btn btn-primary">Đăng nhập</a>`
    var giohang = '';
    if (token != null) {
        var user = JSON.parse(localStorage.getItem("user"));
        dn = `<div class="dropdown me-3">
                        <a class="btn btn-outline-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fas fa-user"></i> ${user.hoTen}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-user-circle me-2"></i>Tài khoản</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-history me-2"></i>Lịch sử mua hàng</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li onclick="logout()"><a class="dropdown-item text-danger" href="#"><i class="fas fa-sign-out-alt me-2"></i>Đăng xuất</a></li>
                        </ul>
                    </div>`
        giohang = `<a href="#" class="btn btn-outline-dark me-2 position-relative" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                        </span>
                    </a>`
    }

    var menu =
        `
        <div class="container">
            <a class="navbar-brand" href="index.html">Dojin Luxury</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Thêm form tìm kiếm -->
                <form class="d-flex me-auto ms-4">
                    <div class="input-group">
                        <input class="form-control" type="search" placeholder="Tìm kiếm sản phẩm..." aria-label="Search" style="min-width: 300px;">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </form>

                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Trang chủ</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Danh mục
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Túi xách tay</a></li>
                            <li><a class="dropdown-item" href="#">Túi đeo chéo</a></li>
                            <li><a class="dropdown-item" href="#">Túi đeo vai</a></li>
                            <li><a class="dropdown-item" href="#">Balo</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">Giới thiệu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Liên hệ</a></li>
                </ul>
                
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#orderTrackingModal">
                        <i class="fas fa-truck me-1"></i> Tra cứu đơn hàng
                    </button>
                    ${giohang}
                    ${dn}
                </div>
            </div>
        </div>

        <div class="modal fade" id="orderTrackingModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tra cứu đơn hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="orderNumber" class="form-label">Mã đơn hàng</label>
                            <input type="text" class="form-control" id="orderNumber" placeholder="Nhập mã đơn hàng của bạn">
                        </div>
                        <div class="mb-3">
                            <label for="phoneNumber" class="form-label">Số điện thoại</label>
                            <input type="tel" class="form-control" id="phoneNumber" placeholder="Nhập số điện thoại đặt hàng">
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Tra cứu</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="cartModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Giỏ hàng của bạn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <!-- Danh sách sản phẩm trong giỏ -->
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="/SanPham/img/1.jpg" alt="Túi xách" style="width: 50px; height: 50px; object-fit: cover" class="me-2">
                                            <span>Túi xách thời trang</span>
                                        </div>
                                    </td>
                                    <td>1,200,000đ</td>
                                    <td>
                                        <div class="input-group" style="width: 120px">
                                            <button class="btn btn-outline-secondary btn-sm">-</button>
                                            <input type="text" class="form-control text-center" value="1">
                                            <button class="btn btn-outline-secondary btn-sm">+</button>
                                        </div>
                                    </td>
                                    <td>1,200,000đ</td>
                                    <td>
                                        <button class="btn btn-outline-danger btn-sm">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- Tổng tiền -->
                    <div class="d-flex justify-content-end">
                        <div class="text-end">
                            <p class="mb-2">Tạm tính: <strong>1,200,000đ</strong></p>
                            <p class="mb-2">Phí vận chuyển: <strong>30,000đ</strong></p>
                            <h5>Tổng cộng: <span class="text-danger">1,230,000đ</span></h5>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tiếp tục mua sắm</button>
                    <a href="/checkout" class="btn btn-primary">Tiến hành thanh toán</a>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById("menu").innerHTML = menu
    try { loadFooter(); } catch (error) {}
}




function loadFooter() {
    var foo = `<div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Về chúng tôi</h5>
                    <p>Chuyên cung cấp các loại túi xách thời trang chất lượng cao</p>
                </div>
                <div class="col-md-4">
                    <h5>Liên hệ</h5>
                    <p>
                        <i class="fas fa-phone"></i> 0123 456 789<br>
                        <i class="fas fa-envelope"></i> info@tuixinh.com<br>
                        <i class="fas fa-map-marker-alt"></i> 123 Đường ABC, Quận XYZ
                    </p>
                </div>
                <div class="col-md-4">
                    <h5>Theo dõi chúng tôi</h5>
                    <div class="social-links">
                        <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-light me-3"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>`
    document.getElementById("footer").innerHTML = foo;
}

async function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace('login.html')
}


function formatmoney(money) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(money);
}



