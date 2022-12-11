const generateID = (function () {
    function* MainCountingIDGenerator(start = 1) {
        let count = start;

        while (true) {
            yield count++;
        }
    }

    function insertIDIntoData(dataArr = []) {
        const counter = MainCountingIDGenerator();

        dataArr.forEach((card) => {
            card.id = counter.next().value;
        });
    }

    return {
        insert: insertIDIntoData
    }
})();

export default generateID.insert;