import "../../assets/css/bar.scss"

const Callout = ({data ={}, img,  color="red", left, right}) =>{
    return <div className="callout" style={{position: 'relative', top: '-40px', left, right}}>
        <div className="card">
            <div className="img"><img src={img} alt='' /></div>
            <div className="text">
                <div className="party-candidate" style={{color: color}}>
                    {data.candidate}, {data.party}
                </div>
                <div className="total-votes">
                    {data.totalVotes?.toLocaleString()} votes ({data.percentage}%)
                </div>
            </div>
        </div>
    </div>
}

export default Callout