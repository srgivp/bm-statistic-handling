import {msInDay} from "../../components/utils";

export const correctStatisticBuilder = (data, from, to) => {
    const dataToCorrect = JSON.parse(JSON.stringify(data))
    const fromParsed = Date.parse(from);
    const toParsed = Date.parse(to);
    const diffInDays = (toParsed - fromParsed)/msInDay + 1;
    let zeroArray = [];
    for (let i = 0; i < diffInDays; i++) {
        const dateParsed = fromParsed + msInDay*i;
        const dateIsoString = new Date(dateParsed).toISOString().slice(0, 10);
        zeroArray.push({clicks: 0, page_views: 0, date: dateIsoString});
    }
        let correctData = [];
        if (dataToCorrect.length === 0){
            correctData = zeroArray;
        } else {
            correctData = zeroArray.map(item => {
                if (dataToCorrect.length === 0){
                    return item;
                } else {
                    for (let i = 0; i < dataToCorrect.length; i++){
                        if (item.date === dataToCorrect[i].date){
                            return dataToCorrect.splice(i, 1)[0];
                        } else if (Date.parse(item.date) > Date.parse(dataToCorrect[i].date)){
                                dataToCorrect.splice(i, 1);
                                return item;
                            }
                    }
                    return item;
                }
                        })
        }
        return correctData;
}