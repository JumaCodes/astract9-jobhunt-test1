import React, { useState, useEffect, useCallback } from 'react'
import { calculateBarWidth, getPoliticalPartyColor  } from '../../helpers/analyse-election-data'

import Callout from './call-out'
import Bar from './bar'

import "../../assets/css/bar.scss"

const Drawbars = () => {
    const [presidentialData, setPresidentialData] = useState([])

    const fetchData = useCallback(async () => {
        const response = await fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president')
        const data = await response.json()
        setPresidentialData(data)
    }, [])

    useEffect(() => {
        fetchData()
    }, [])


    const {
        apcPercent,
        pdpPercent,
        lpPercent,
        apcData,
        pdpData,
        lpData
    } = calculateBarWidth(presidentialData)

    return (
        <div>
            <div className="bar">
                <Bar width={`${apcPercent}%`} backgroundColor={getPoliticalPartyColor('APC')} />
                <Bar width={`${lpPercent}%`} backgroundColor={getPoliticalPartyColor('LP')} />
                <Bar width={`${pdpPercent}%`} backgroundColor={getPoliticalPartyColor('PDP')} />

            </div>
            <div className="all-callouts">
                <Callout img={require('../../assets/images/tinubu.png')} left={'-12%'} data={{
                    candidate: apcData?.full_name,
                    party: apcData?.political_party_name,
                    totalVotes: apcData?.candidates_vote,
                    percentage: apcPercent.toFixed(2)
                }}
                color={getPoliticalPartyColor('APC')} 
                />
                <Callout img={require('../../assets/images/peter.jpg')} right={'-10%'} data={{
                    candidate: lpData?.full_name,
                    party: lpData?.political_party_name,
                    totalVotes: lpData?.candidates_vote,
                    percentage: lpPercent.toFixed(2)
                }}
                color={getPoliticalPartyColor('LP')}
                />
                <Callout img={require('../../assets/images/atiku.jpg')} right={'-32%'} data={{
                    candidate: pdpData?.full_name,
                    party: pdpData?.political_party_name,
                    totalVotes: pdpData?.candidates_vote,
                    percentage: pdpPercent.toFixed(2)
                }}
                color={getPoliticalPartyColor('PDP')}
                />

            </div>
        </div>
    )
}

export default Drawbars