const firstFitOffline = (groups, bins) => {
    // initialize list for the resulting bins
    const resultBins = [] 
    for (let i = 0; i < bins.length; i++) {
        resultBins.push({
            groups: [],
            capacity: bins[i]
        })
    }

    // A list of groups that couldn't be fitted into any bin
    const remaining = [] 

    // Sort groups by weight
    groups.sort((a, b) => {return b.weight - a.weight});

    for (let i = 0; i < groups.length; i++) {

        let j = 0;
        while (j < resultBins.length) {
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



module.exports = {
    firstFitOffline
}
