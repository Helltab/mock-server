var Mock = require('mockjs')

const Random = Mock.Random

class MockExample {
    getData() {
        return {
            randomNum: this.randomNum(),
            randomNum2: this.randomNum2(),
            randomStringList: this.randomStringList(),
        };
    }

    randomNum() {
        return Mock.mock({
            quhaoNum: Mock.mock({'number|20-100': 1200}).number,
            bespeakNum: Mock.mock({'number|20-100': 1200}).number,
            waitNum: Mock.mock({'number|20-100': 1200}).number
        })
    }

    randomNum2() {
        return Mock.mock({
            todayAccept: Mock.mock({'number|200-1000': 1200}).number,
            todayDo: Mock.mock({'number|200-1000': 1200}).number,
            allAccept: Mock.mock({'number|20000-100000': 120000}).number,
            allDo: Mock.mock({'number|20000-100000': 120000}).number,
            pause: Mock.mock({'number|0-100': 1200}).number,
            onceTell: Mock.mock({'number|0-100': 1200}).number,
            todayExpire: Mock.mock({'number|0-100': 1200}).number,
            todayWarning: Mock.mock({'number|0-100': 1200}).number,
            overdue: Mock.mock({'number|0-100': 1200}).number,
            todayRedCard: Mock.mock({'number|0-100': 1200}).number,
            todayYellowCard: Mock.mock({'number|0-100': 1200}).number,
        })
    }

    randomStringList() {
        return Mock.mock({
            'list|1-10': [{
                'id|+1': 1,
                'index': Mock.mock({'number|1-50': 5}).number,
                windowNo: Mock.mock(/[A-Z][0-9]{3}/),
                waitNum: Random.integer(0, 100)
            }]
        })
    }

}

module.exports = MockExample
