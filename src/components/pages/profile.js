import { useEffect, useState } from 'react';
import api from '../../services/api';
import url from '../../services/url';

function Profile() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Lấy token từ localStorage
        const token = localStorage.getItem('accessToken');

        // Kiểm tra xem token có tồn tại hay không
        if (token) {
            // Gửi yêu cầu đến server để lấy thông tin người dùng
            api.get(url.ADMIN.PROFILE, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                // Nếu nhận được dữ liệu từ server, cập nhật state userInfo
                setUserInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
        }
    }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render

    return (
        <div className="page-wrapper" style={{textAlign: "justify"}}>
            <div className="content container-fluid">
                {/* Hiển thị thông tin người dùng */}
                {userInfo && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-header">
                                <div className="row align-items-center">
                                    <div className="col-auto profile-image">
                                        <a href="#">
                                            <img className="rounded-circle" alt="User Image" src={userInfo.avatar} />
                                        </a>
                                    </div>
                                    <div className="col ml-md-n2 profile-user-info">
                                        <h4 className="user-name mb-0">{userInfo.name}</h4>
                                        <h6 className="text-muted">{userInfo.email}</h6>
                                    </div>
                                    <div className="col-auto profile-btn">
                                        <a href="#" className="btn btn-primary">
                                            Edit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Các phần khác của profile component */}
            </div>
        </div>
    );
}

export default Profile;
