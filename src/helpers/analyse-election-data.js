import states from '../assets/json/nigerian-states.json'

const getStateWinner = (data, state) => {
  const stateData = data[state]
  if (!stateData) return ""
  let winner = stateData[0]
  for (let i = 1; i < stateData.length; i++) {
    if (stateData[i].candidate_votes > winner.candidate_votes) {
      winner = stateData[i]
    }
  }

  return winner.political_party_name
}

const getPoliticalPartyColor = (longName) => {
  switch (longName) {
    case "People's Democratic Party":
    case "PDP":
      return 'rgb(214, 43, 60)'
    case "Labour Party":
    case "LP":
      return "rgb(10, 168, 63)"
    case 'All Progressives Congress':
    case 'APC':
      return "#64CCFF"
    default:
      return 'gray'
  }
}

const calculateBarWidth = (data = []) => {

  const totalVotes = data.reduce((acc, current) => {
    acc += current.candidates_vote
    return acc
  }, 0)

  const apcData = data.filter(vote => vote.political_party_name === 'All Progressives Congress')?.[0]
  const pdpData = data.filter(vote => vote.political_party_name === "People's Democratic Party")?.[0]
  const lpData = data.filter(vote => vote.political_party_name === "Labour Party")?.[0]

  const apcPercent = ((apcData?.candidates_vote) / totalVotes) * 100
  const pdpPercent = ((pdpData?.candidates_vote) / totalVotes) * 100
  const lpPercent = ((lpData?.candidates_vote) / totalVotes) * 100

  return {
    apcPercent,
    pdpPercent,
    lpPercent,
    apcData,
    pdpData,
    lpData
  }

}

const formatStateTable = (data = {}) => {
  const allData = states.map((state) => {
    const stateData = data[state]
    if (!stateData) {
      return {
        state,
        apc: 0,
        lp: 0,
        pdp: 0,
        leading: ""
      }
    }

    let leading = shortenPartyName(getStateWinner(data, state))
    let apc = stateData.filter((votes) => votes.political_party_name === 'All Progressives Congress')?.[0]?.candidates_vote
    let pdp = stateData.filter((votes) => votes.political_party_name === "People's Democratic Party")?.[0]?.candidates_vote
    let lp = stateData.filter((votes) => votes.political_party_name === 'Labour Party')?.[0]?.candidates_vote

    return {
      state,
      apc,
      lp,
      pdp,
      leading
    }
  })

  console.log(allData)

  return allData

}


const shortenPartyName = (partyName) => {
  switch (partyName) {
    case "People's Democratic Party":
      return "PDP"
    case "Labour Party":
      return "LP"
    case 'All Progressives Congress':
      return 'APC'
  }
}
export { getStateWinner, getPoliticalPartyColor, calculateBarWidth, formatStateTable }