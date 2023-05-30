import React from 'react';

const blue = {
    color: 'hsl(200, 100%, 70%)'
};

const green = {
    color: 'hsl(114, 100%, 35%)'
};

const Launch = ({launch}) => {
    return (
        <ul>
            <h3>Flight number:
                <b style={blue}> {launch.flight_number}</b>
            </h3>
            <div>Mission name:
                <b style={green}> {launch.mission_name}</b>
            </div>
            <div>Mission ID:
                {launch.mission_id.length <= 0 ?
                    <b style={blue}> null</b> :
                    <ul>{launch.mission_id.map(mission_id =>
                        <div>
                            <b style={green}>{mission_id}</b>
                        </div>
                    )}</ul>
                }
            </div>
            <div>Upcoming:
                <b style={blue}> {launch.upcoming.toString()}</b>
            </div>
            <div>Launch year:
                <b style={green}> {launch.launch_year}</b>
            </div>
            <div>Launch date UNIX:
                <b style={blue}> {launch.launch_date_unix}</b>
            </div>
            <div>Launch date UTC:
                <b style={green}> {launch.launch_date_utc}</b>
            </div>
            <div>Launch date local:
                <b style={green}> {launch.launch_date_local}</b>
            </div>
            <div>Is tentative:
                <b style={blue}> {launch.is_tentative.toString()}</b>
            </div>
            <div>Tentative max precision:
                <b style={green}> {launch.tentative_max_precision}</b>
            </div>
            <div>TBD:
                <b style={blue}> {launch.tbd.toString()}</b>
            </div>
            <div>Launch window:
                <b style={blue}> {launch.launch_window}</b>
            </div>
            <div>Rocket:
                <ul>
                    <div>Rocket ID:
                        <b style={green}> {launch.rocket.rocket_id}</b>
                    </div>
                    <div>Rocket name:
                        <b style={green}> {launch.rocket.rocket_name}</b>
                    </div>
                    <div>Rocket type:
                        <b style={green}> {launch.rocket.rocket_type}</b>
                    </div>
                    <div>First stage:
                        <ul>
                            <div>Cores:
                                <ul>
                                    {launch.rocket.first_stage.cores.map(core =>
                                        <div>
                                            <div>Core serial:
                                                <b style={green}> {core.core_serial}</b>
                                            </div>
                                            <div>Flight:
                                                <b style={blue}> {core.flight}</b>
                                            </div>
                                            <div>Block:
                                                {core.block !== null ?
                                                    <b style={green}>core.block</b> :
                                                    <b style={blue}> null</b>
                                                }
                                            </div>
                                            <div>Gridfins:
                                                <b style={blue}> {core.gridfins.toString()}</b>
                                            </div>
                                            <div>Legs:
                                                <b style={blue}> {core.legs.toString()}</b>
                                            </div>
                                            <div>Reused:
                                                <b style={blue}> {core.reused.toString()}</b>
                                            </div>
                                            <div>Land success:
                                                <b style={blue}> {core.land_success !== null ? core.land_success : 'null'}</b>
                                            </div>
                                            <div>Landing intent:
                                                <b style={blue}> {core.landing_intent.toString()}</b>
                                            </div>
                                            <div>Landing type:
                                                <b style={blue}> {core.landing_type !== null ? core.landing_type : 'null'}</b>
                                            </div>
                                            <div>Landing vehicle:
                                                <b style={blue}> {core.landing_vehicle !== null ? core.landing_vehicle : 'null'}</b>
                                            </div>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div>Second stage:
                        <ul>
                            <div>Block:
                                <b style={blue}> {launch.rocket.second_stage.block}</b>
                            </div>
                            <div>Payloads:
                                <ul>
                                    {launch.rocket.second_stage.payloads.map(payload =>
                                        <div>
                                            <div>Payload ID:
                                                <b style={green}> {payload.payload_id}</b>
                                            </div>
                                            <div>Norad ID:
                                                {payload.norad_id.length <= 0 ?
                                                    <b style={blue}> null</b> :
                                                    <ul>{payload.norad_id.map(norad_id =>
                                                        <div>
                                                            <b style={blue}>{norad_id}</b>
                                                        </div>
                                                    )}</ul>
                                                }
                                            </div>
                                            <div>Reused:
                                                <b style={blue}> {payload.reused.toString()}</b>
                                            </div>
                                            <div>Customers:
                                                {payload.customers.length <= 0 ?
                                                    <b style={blue}> null</b> :
                                                    <ul>{payload.customers.map(customer =>
                                                        <div>
                                                            <b style={green}>{customer}</b>
                                                        </div>
                                                    )}</ul>
                                                }
                                            </div>
                                            <div>Nationality:
                                                <b style={green}> {payload.nationality}</b>
                                            </div>
                                            <div>Manufacturer:
                                                <b style={green}> {payload.manufacturer}</b>
                                            </div>
                                            <div>Payload type:
                                                <b style={green}> {payload.payload_type}</b>
                                            </div>
                                            <div>Payload mass kg:
                                                <b style={blue}> {payload.payload_mass_kg}</b>
                                            </div>
                                            <div>Payload mass lbs:
                                                <b style={blue}> {payload.payload_mass_lbs}</b>
                                            </div>
                                            <div>Orbit:
                                                <b style={green}> {payload.orbit}</b>
                                            </div>
                                            <div>Orbit params:
                                                <ul>
                                                    <div>Reference system:
                                                        <b style={green}> {payload.orbit_params.reference_system}</b>
                                                    </div>
                                                    <div>Regime:
                                                        <b style={green}> {payload.orbit_params.regime}</b>
                                                    </div>
                                                    <div>Longitude:
                                                        <b style={blue}> {payload.orbit_params.longitude !== null ? payload.orbit_params.longitude : 'null'}</b>
                                                    </div>
                                                    <div>Semi major axis km:
                                                        <b style={blue}> {payload.orbit_params.semi_major_axis_km !== null ? payload.orbit_params.semi_major_axis_km : 'null'}</b>
                                                    </div>
                                                    <div>Eccentricity:
                                                        <b style={blue}> {payload.orbit_params.eccentricity !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Periapsis km:
                                                        <b style={blue}> {payload.orbit_params.periapsis_km}</b>
                                                    </div>
                                                    <div>Apoapsis km:
                                                        <b style={blue}> {payload.orbit_params.apoapsis_km}</b>
                                                    </div>
                                                    <div>Inclination deg:
                                                        <b style={blue}> {payload.orbit_params.inclination_deg}</b>
                                                    </div>
                                                    <div>Period min:
                                                        <b style={blue}> {payload.orbit_params.period_min !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Lifespan years:
                                                        <b style={blue}> {payload.orbit_params.lifespan_years !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Epoch:
                                                        <b style={blue}> {payload.orbit_params.epoch !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Mean motion:
                                                        <b style={blue}> {payload.orbit_params.mean_motion !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Raan:
                                                        <b style={blue}> {payload.orbit_params.raan !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Arg of pericenter:
                                                        <b style={blue}> {payload.orbit_params.arg_of_pericenter !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                    <div>Mean anomaly:
                                                        <b style={blue}> {payload.orbit_params.mean_anomaly !== null ? payload.orbit_params.eccentricity : 'null'}</b>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div>Fairings: {launch.rocket.fairings !== null ?
                        <ul>
                            <div>Reused:
                                <b style={blue}> {launch.rocket.fairings.reused !== null ? launch.rocket.fairings.reused.toString() : 'null'}</b>
                            </div>
                            <div>Recovery attempt:
                                <b style={blue}> {launch.rocket.fairings.recovery_attempt !== null ? launch.rocket.fairings.recovery_attempt.toString() : 'null'}</b>
                            </div>
                            <div>Recovered:
                                <b style={blue}> {launch.rocket.fairings.recovered !== null ? launch.rocket.fairings.recovered.toString() : 'null'}</b>
                            </div>
                            <div>Ship:
                                <b style={blue}> {launch.rocket.fairings.ship !== null ? launch.rocket.fairings.ship.toString() : 'null'}</b>
                            </div>
                        </ul> :
                        <b style={blue}> null</b>
                    }
                    </div>
                </ul>
            </div>
            <div>Ships:
                {launch.ships.length <= 0 ?
                    <b style={blue}> null</b> :
                    <ul>{launch.ships.map(ship =>
                        <div>
                            <b style={green}> {ship}</b>
                        </div>
                    )}</ul>
                }
            </div>
            <div>Telemetry:
                <ul>
                    <div>Flight club:
                        {launch.telemetry.flight_club !== null ?
                            <b style={green}> launch.telemetry.flight_club</b> :
                            <b style={blue}> null</b>
                        }
                    </div>
                </ul>
            </div>
            <div>Launch site:
                <ul>
                    <div>Site ID: <b style={green}>{launch.launch_site.site_id}</b></div>
                    <div>Site name: <b style={green}>{launch.launch_site.site_name}</b></div>
                    <div>Site name long: <b style={green}>{launch.launch_site.site_name_long}</b></div>
                </ul>
            </div>
            <div>Launch success: <b style={blue}>{launch.launch_success !== null ? launch.launch_success.toString() : ' null'}</b></div>
            {!launch.launch_success &&
                <div>Launch failure details:
                    <ul>
                        <div>Time: <b style={blue}>{launch.launch_failure_details.time}</b></div>
                        <div>Altitude: <b style={blue}>{launch.launch_failure_details.altitude !== null ? launch.launch_failure_details.altitude : ' null'}</b></div>
                        <div>Reason: <b style={green}>{launch.launch_failure_details.reason}</b></div>
                    </ul>
                </div>
            }
            <div>Links:
                <ul>
                    <div>Mission patch: {launch.links.mission_patch !== null ? <a href={launch.links.mission_patch}><b style={green}>{launch.links.mission_patch}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Mission patch small: {launch.links.mission_patch_small !== null ?
                        <a href={launch.links.mission_patch_small}><b style={green}>{launch.links.mission_patch_small}</b></a> : <b style={blue}> null</b>}</div>
                    <div>Reddit campaign: {launch.links.reddit_campaign !== null ? <a href={launch.links.reddit_campaign}><b style={green}>{launch.links.reddit_campaign}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Reddit launch: {launch.links.reddit_launch !== null ? <a href={launch.links.reddit_launch}><b style={green}>{launch.links.reddit_launch}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Reddit recovery: {launch.links.reddit_recovery !== null ? <a href={launch.links.reddit_recovery}><b style={green}>{launch.links.reddit_recovery}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Reddit media: {launch.links.reddit_media !== null ? <a href={launch.links.reddit_media}><b style={green}>{launch.links.reddit_media}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Presskit: {launch.links.presskit !== null ? <a href={launch.links.presskit}><b style={green}>{launch.links.presskit}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Article link: {launch.links.article_link !== null ? <a href={launch.links.article_link}><b style={green}>{launch.links.article_link}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Wikipedia: {launch.links.wikipedia !== null ? <a href={launch.links.wikipedia}><b style={green}>{launch.links.wikipedia}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Video link: {launch.links.video_link !== null ? <a href={launch.links.video_link}><b style={green}>{launch.links.video_link}</b></a> :
                        <b style={blue}> null</b>}</div>
                    <div>Youtube ID: {launch.links.youtube_id !== null ?
                        <a href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}><b style={green}>{launch.links.youtube_id}</b></a> : <b style={blue}> null</b>}</div>
                    <div>Flickr images:
                        {launch.links.flickr_images <= 0 ?
                            <b style={blue}> null</b> :
                            <ul>{launch.links.flickr_images.map(flickr_image =>
                                <div>
                                    <a href={flickr_image}>
                                        <b style={green}>{flickr_image}</b>
                                    </a>
                                </div>
                            )}</ul>
                        }
                    </div>
                </ul>
            </div>
            <div>Details:
                <b style={green}> {launch.details}</b>
            </div>
            <div>Static fire date UTC:
                <b style={green}>{launch.static_fire_date_utc}</b>
            </div>
            <div>Static fire date UNIX:
                <b style={blue}>{launch.static_fire_date_unix}</b>
            </div>
            <div>Timeline: {launch.timeline !== null ?
                <ul>
                    <div>Webcast liftoff:
                        <b style={blue}> {launch.timeline.webcast_liftoff !== null ? launch.timeline.webcast_liftoff : 'null'}</b>
                    </div>
                </ul> :
                <b style={blue}> null</b>
            }
            </div>
            <div>Crew: <b style={blue}>{launch.crew !== null ? launch.crew : ' null'}</b></div>
            <hr/>
            <br/>
        </ul>
    );
};

export default Launch;