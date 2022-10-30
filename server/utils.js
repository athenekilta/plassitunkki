const firstFitOffline = (groups, bins) => {
    // initialize list for the resulting bins
    const resultBins = [] 
    for (let i = 0; i < bins.length; i++) {
        resultBins.push({
            id: bins[i].id,
            groups: [],
            capacity: bins[i].name
        })
    }

    // A list of groups that couldn't be fitted into any bin
    const remaining = [] 

    // Sort groups by weight
    groups.sort((a, b) => {return b.weight - a.weight});
    //console.log(groups);
    for (let i = 0; i < groups.length; i++) {

        let j = 0;
        while (j < resultBins.length) {
            //console.log(groups[i].weight, resultBins[j].capacity);
            if (groups[i].weight <= resultBins[j].capacity) {
                resultBins[j].groups.push(groups[i]);
                resultBins[j].capacity -= groups[i].weight;
                break;
            } 

            j++;
        }

        if (j === resultBins.length) {
            remaining.push(groups[i]);
        }
    }

    return {
        remaining: remaining,
        bins: resultBins
    }
}

const groupGuests = (guests) => {
    /* Groups guests based on the identifying 3rd column */
    const groups = guests.reduce((groups, row) => {
        const group = (groups[row[2]] || {weight: 0, guests:[]});
        group.guests.push({
            "firstName": row[0],
            "lastName": row[1]
        })
        groups[row[2]] = group;
        groups[row[2]].weight++;
        return groups;
    }, {})
    return Object.values(groups);
}

module.exports = {
    firstFitOffline,
    groupGuests
}
