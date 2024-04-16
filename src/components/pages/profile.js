import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import url from '../../services/url';

function Profile() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            api.get(url.ADMIN.PROFILE, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
        }
    }, []);

    return (
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                {userInfo ? (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-header">
                                <div className="row align-items-center">
                                    <div className="col ml-md-n2 profile-user-info">
                                        <h4 className="user-name mb-0">{userInfo.name}</h4>
                                        <h6 className="text-muted">{userInfo.email}</h6>
                                        <div className="user-Location"><i className="fa-solid fa-location-dot"></i> {userInfo.address}</div>
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
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
