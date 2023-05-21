<template>
  <div class="card">
    <div class="scroll">
      <h1 class="text-2xl font-bold">Commit Log</h1>
      <table class="box my-2">
        <thead>
          <tr>
            <td></td>
            <td v-for="mon of MonthList" class="day"> {{ mon }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day of days" class="line">
            <td class="day">
              {{ day }}
            </td>
            <td v-for="week of weeks" :class="week == weeks.length && day != dayOfWeek ? '' : 'square'">
              <span class="fill">span</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const weeks = Array.from({ length: 51 }, (_, i) => i + 1);

const MonthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
const day = today.getDate();

console.log(day);
const dayOfWeek = days[today.getDay()];
console.log(dayOfWeek);

function rotation(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}


</script>

<style lang="scss" scoped>

.scroll {
  overflow-x: auto;
}
.box {
  display: inline-block;
  width: max-content;
  border-spacing: 3px;
  position: relative;
  border-collapse: separate;
}

.day {
  clip-path: none;
  // position: absolute;
  bottom: -3px;
  font-size: 8px;
}

.line {
  display: table-row;
  vertical-align: middle;
  height: 10px;
}

.square {
  fill: #e5e7eb;
  shape-rendering: geometricPrecision;
  background-color: #e5e7eb;
  border-radius: 2px;
  outline: 1px solid rgba(27, 31, 35, 0.06);
  outline-offset: -1px;
  width: 1rem;
  box-sizing: border-box;
  display: table-cell;
  white-space: nowrap;
  padding: 0.1rem;
  vertical-align: middle;
}

.fill {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  word-wrap: normal;
  border: 0;
}
</style>