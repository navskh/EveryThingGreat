<template>
    <div>
        <div class="scroll">
            <h1 class="text-2xl font-bold my-1">Commit Log</h1>
            <div class="table-container">
                <div class="table-row">
                    <div class="day" style="font-size: 8px"></div>
                    <div class="day" style="font-size: 8px" v-for="day of days">
                        {{ day }}
                    </div>
                </div>
                <div v-for="(weekArr, dlength) of sampleDate" class="table-row">
                    <div class="month">{{ weekArr.month ?? " " }}</div>
                    <div
                        v-for="(day, index) of weekArr.week"
                        :class="
                            'committed-' +
                            (day.commit > 3 ? '3' : day.commit) +
                            ' table-cell tooltip'
                        "
                        :style="
                            dlength == sampleDate.length - 1 ? 'flex: 0' : ''
                        "
                    >
                        <span class="tooltiptext">{{ day.date }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { getCommitDate } from "../../api/post";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weeks = Array.from({ length: 51 }, (_, i) => i + 1);
const MonthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const sampleDate = ref("");
const init = async () => {
    let crDateList = await getCommitDate();
    const dateArr = [];
    const today = new Date();
    let seq = 0;
    let prevMonth = dateToMonth(today);
    let curMonth = "";
    while (seq < 365) {
        const weekArr = [];
        for (let i = seq; i < seq + 7; i++) {
            const thisDate = calDate(today, -i);
            curMonth = dateToMonth(thisDate);
            const dateString = makeDayString(thisDate);
            const commit = crDateList.filter((crDate) => crDate == dateString)
                .length;
            const dateStringAndCommit = `${makeDayString(
                thisDate
            )} (${commit})`;
            weekArr.push({ date: dateStringAndCommit, commit: commit });
            seq++;
            if (dateToDay(thisDate) == "Sun") break;
        }
        if (curMonth == prevMonth)
            dateArr.push({ month: null, week: weekArr.reverse() });
        else {
            dateArr.push({ month: prevMonth, week: weekArr.reverse() });
            prevMonth = curMonth;
        }
    }

    sampleDate.value = dateArr.reverse();
    console.log(sampleDate.value);
};

init();

/**
 * 그냥 날짜를 만들어보자
 * 일단 오늘 날짜를 가져온다.
 * 그리고 거기에서 하나씩 빼서 배열에 넣는다.
 *
 */
const calDate = (date, day) => {
    const clone = new Date(date);
    clone.setDate(date.getDate() + day);
    return clone;
};

const makeDayString = (date) => {
    const year = date.getFullYear(); // 년도
    const month = date.getMonth(); // 월
    const day = date.getDate(); // 일
    const dayOfWeek = days[date.getDay()]; // 요일
    return `${year}. ${month + 1}. ${day}`;
};

const dateToMonth = (date) => {
    const month = date.getMonth(); // 월
    const engMonth = MonthList[month]; // 영어로 된 월
    return engMonth;
};

const dateToDay = (date) => {
    const dayOfWeek = days[date.getDay()];
    return dayOfWeek;
};
</script>

<style lang="scss" scoped>
.scroll {
    overflow-x: none;
}

.table-container {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
}

.table-row {
    display: flex;
    flex-direction: column;
}

.table-cell {
    flex: 1;
    shape-rendering: geometricPrecision;
    border-radius: 2px;
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
    width: 1rem;
    box-sizing: border-box;
    display: table-cell;
    white-space: nowrap;
    padding: 0.5rem;
    vertical-align: middle;
    margin: 1.5px;
}

.day {
    flex: 1;
    margin-right: 4px;
}

.month {
    position: relative;
    top: 0;
    font-size: 8px;
    height: 16px;
}

.tooltip {
    position: relative;
    display: block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    /* 이벤트가 없으면 툴팁 영역을 숨김 */
    width: 120px;
    /* 툴팁 영역의 넓이를 설정 */
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    /* 절대 위치를 사용 */
    z-index: 1;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    /* hover 이벤트 발생시 영역을 보여줌 */
}

.committed-0 {
    background-color: hsl(var(--b2));
}

.committed-1 {
    background-color: hsl(var(--pc));
}

.committed-2 {
    background-color: hsl(var(--p));
}

.committed-3 {
    background-color: hsl(var(--pf));
}
</style>
