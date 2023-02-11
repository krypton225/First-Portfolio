const generateID = (function () {
    /**
      * @returns {number}
    */
    function* getNumberID() {
        let count = 1;

        while (true) {
            yield count++;
        }
    }

    /**
      * @param  {Array} sourceArr=[] - array to check if it has objects or not.
    */
    function isArrayNotEmpty(sourceArr = []) {
        return sourceArr.length !== 0
    }

    /**
      * @param  {Array} dataArr=[] - array has objects and insert IDs into each one.
    */
    function insertIDIntoData(dataArr = []) {
        if (isArrayNotEmpty(dataArr)) {
            const counter = getNumberID();

            dataArr.forEach((row) => {
                if (typeof row === "object") {
                    if (!row.hasOwnProperty("id")) {
                        Object.defineProperty(row, "id", {
                            value: counter.next().value,
                            writable: false,
                            enumerable: true
                        });
                    }
                } else {
                    throw new Error(`Array ${dataArr.name} must contain only object.`);
                }
            });
        } else {
            throw new Error("Array must not be empty of objects.");
        }
    }

    return {
        insert: insertIDIntoData
    }
})();

export default generateID.insert;