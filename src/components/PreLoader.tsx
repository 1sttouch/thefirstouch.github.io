import React from 'react';

const PreLoader = () => {
    return (
        <>
            <div id="preloader">
                <div id="firsttouch-preloader" className="firsttouch-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="1" className="letters-loading">
                                1
                            </span>
                            <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="-" className="letters-loading">
                                -
                            </span>
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="U" className="letters-loading">
                                U
                            </span>
                            <span data-text-preloader="C" className="letters-loading">
                                C
                            </span>
                            <span data-text-preloader="H" className="letters-loading">
                                H
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreLoader;