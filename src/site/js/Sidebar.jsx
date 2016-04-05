import React from 'react';
import Navigation from '~/Navigation';
import { IndexLink } from 'react-router';

export default function Sidebar() {
    return (
        <aside className="posFixTL width-20 height-100 borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke overflow-auto">
            <div className="textAlign-center paddingTopBottom-l borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                <div className="paddingTopBottom-m">
                    <div className="marginBottom-s">
                        <IndexLink to="/">
                            <svg className="link fill-blue fill-effect--hover" id="marvel-logo" width={80} height={34} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 34">
                                <path d="M67.93,22c-29.1-2.21-53.16,4.67-58.54,7.22-3,1.36-3.21,3.06-2.78,4C7,33.94,8.43,34.36,10,33.6c11.55-6.12,34.92-11,57.94-9.6A1,1,0,0,0,67.93,22Zm7.21-8.58c-1.22,1.36-3,2.38-3.56,1.87s0-2.12,0-2.12C74.44,11.34,80,6.67,80,3.1c0-3.31-3-4.33-6.17-1.27a22.83,22.83,0,0,0-5.39,9.68c-1.65,1.61-4.26,3.65-6.6,3.65-1.22,0-1.56-.85-1.39-2C62.45,13.13,68,11.6,68,7a2.76,2.76,0,0,0-3-2.72c-2.52,0-5.73,2.55-7.3,6.12A5.1,5.1,0,0,1,56.46,10a17,17,0,0,0,1-2.72c0.35-1.87-.43-3.06-2-2.89-1,.08-2.17.93-2.43,2.89a5.25,5.25,0,0,0,.52,2.89c-0.69,2.12-3.47,4.76-4.43,4.67S49.25,11,50.21,8.2a5.72,5.72,0,0,0,1.22-1.87A1.19,1.19,0,0,0,51,4.8a2.92,2.92,0,0,0-3.65,1.53,16.81,16.81,0,0,0-1,2.12c-0.78.93-2,2.12-2.35,2-0.52-.34,1.22-2.63,1-3.91a2,2,0,0,0-2.17-1.7C41.26,5.06,39.18,8,39.18,8a4.91,4.91,0,0,0,.43-1.7c-0.09-1.1-2.17-1.61-3.21.42a32.07,32.07,0,0,0-1.56,6c-0.43.93-2.17,3.65-3.56,3.74-1.13.08,0.26-4.84,0.43-5.1,0.61-.93,1.39-2.89,1.22-3.74a1.28,1.28,0,0,0-1.65-1.27,2.67,2.67,0,0,0-1.65,1.27,2.15,2.15,0,0,0-2.08-.76C22.93,7.35,20,15.25,20.33,19c0.26,2,1.22,3.23,3,3,2-.25,3.65-3.14,3.65-3.14s0.43,2.38,2.61,2.12a8.25,8.25,0,0,0,4.08-2.8,1.46,1.46,0,0,0-.09.42c-0.35,2,3,1.78,3.3.25,1-7.56,3.56-10.7,4.34-10.7,0.61,0-1.65,3.57-.35,4.93,1,1.19,2.78.25,4.26-1a12.24,12.24,0,0,0-.43,2.89c-0.09,2.12.69,3.82,2.78,3.74,2.78-.08,5.73-3.48,7.64-6.71a4.79,4.79,0,0,0,1.65.68A7.17,7.17,0,0,0,56.55,15c0.17,2.46,1.91,3.4,3.91,3.31,2.35-.08,5.12-1.87,7-3.48a0.31,0.31,0,0,1-.09.25c-0.17,1.19.09,3.4,1.82,3.48,2,0.17,5.47-1.87,7.21-4C77.65,13.64,76.18,12.28,75.14,13.38ZM77,3.19a0.39,0.39,0,0,1,.35.42c0,2.12-5.39,6.63-5.39,6.63S75.48,3.19,77,3.19ZM64,7.6a0.57,0.57,0,0,1,.61.68c0,1.19-1.65,2.12-3.47,2.12C62.11,9,63.24,7.6,64,7.6ZM28,10.92c-0.17,1.27-2.43,7-3.65,7-1.56.08,0.78-8.07,3.3-8C28.14,9.9,28.14,10.24,28,10.92ZM8.43,12.45c1.48,0-1.22,7.56-.87,10.87s4.08,2.38,3.82.42c-0.43-3.23,1.82-13.51,4.08-13.51,1.65,0-1.82,7.05-1.13,11.47,0.43,2.89,4.43,2,4,.17C17.11,16.1,21.2,10.49,20.67,6.42c-0.26-1.7-1.22-2.63-2.35-2.63-3.74,0-6.78,7.47-6.78,7.47S11.9,7,8.86,6.84C4.43,6.58-.09,17.46,0,27.31c0.09,3.14,4.08,2.63,3.82.08C3.56,23,6.17,12.45,8.43,12.45h0Z" />
                            </svg>
                        </IndexLink>
                    </div>
                    <span className="textTransform-uppercase fontSize-xxs c-silver" style={{ letterSpacing: 3 }}>Styleguide</span>
                </div>
            </div>

            <Navigation />
        </aside>
    );
}
