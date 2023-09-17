import React from 'react';
import EventData from '../../../jsonData/EventData.json'
import Pagination from '../../common/Pagination';
import JourneySummary from './JourneySummary'

const Journies = () => {
    return (
        <>
            <section className="event-v2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {EventData.map(event =>
                                    <div className="col-lg-4 col-md-6 col-12" key={event.id}>
                                        <JourneySummary event={event} />
                                    </div>
                                )}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Journies;
