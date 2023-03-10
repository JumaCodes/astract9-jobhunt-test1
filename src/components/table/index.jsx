import { getPoliticalPartyColor } from '../../helpers/analyse-election-data'
import "../../assets/css/table.scss"

const TableData = ({ data = [] }) => {
    return (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <div>States Result</div>
            <hr />

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '2em' }} >
                <div style={{ width: '45%' }}>
                    <table width="100%" >
                        <thead>
                            <tr>
                                <td style={{ width: '20%' }}>States</td>
                                <td style={{ width: '20%' }}>APC</td>
                                <td style={{ width: '20%' }}>LP</td>
                                <td style={{ width: '20%' }}>PDP</td>
                                <td style={{ width: '20%' }}>Leading</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(0, 19).map(votes => {
                                return (
                                    <tr key={votes.state}>
                                        <td>{votes.state}</td>
                                        <td>{votes.apc}</td>
                                        <td>{votes.lp}</td>
                                        <td>{votes.pdp}</td>
                                        <td style={{ backgroundColor: getPoliticalPartyColor(votes.leading) }}>{votes.leading}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ width: '45%' }}>
                    <table width="100%">
                        <thead>
                            <tr>
                                <td style={{ width: '20%' }}>States</td>
                                <td style={{ width: '20%' }}>APC</td>
                                <td style={{ width: '20%' }}>LP</td>
                                <td style={{ width: '20%' }}>PDP</td>
                                <td style={{ width: '20%' }}>Leading</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(19, ).map(votes => {
                                return (
                                    <tr key={votes.state}>
                                        <td>{votes.state}</td>
                                        <td>{votes.apc}</td>
                                        <td>{votes.lp}</td>
                                        <td>{votes.pdp}</td>
                                        <td style={{ backgroundColor: getPoliticalPartyColor(votes.leading) }}>{votes.leading}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default TableData