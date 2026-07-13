// переписать Stopwatch из t4 на class, поведение идентичное
const labels = ["Работа", "Отдых", "Учёба"];

class Stopwatch {
    constructor(label) {
        this.label = label;
        this.seconds = 0;
    };
    tick() {
        this.seconds++
        return this;
    };
    reset() {
        this.seconds = 0;
        return this;
    };
    format(seconds = this.seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${this.label}: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
};

const workTimer = new Stopwatch(labels[0]);
const restTimer = new Stopwatch(labels[1]);
const studyTimer = new Stopwatch(labels[2]);

workTimer.seconds = 10;

console.log(workTimer.seconds); // 10
console.log(restTimer.seconds); // 0
console.log(studyTimer.seconds); // 0

console.log(workTimer.tick()); // Stopwatch {label: 'Работа', seconds: 11}
console.log(workTimer.format()); // Работа: 00:11
console.log(workTimer.reset()); // Stopwatch {label: 'Работа', seconds: 0}

console.log(restTimer.tick()); // Stopwatch {label: 'Отдых', seconds: 1}
console.log(restTimer.format()); // Отдых: 00:01
console.log(restTimer.reset()); // Stopwatch {label: 'Отдых', seconds: 0}

console.log(studyTimer.tick()); // Stopwatch {label: 'Учёба', seconds: 1}
console.log(studyTimer.format()); // Учёба: 00:01
console.log(studyTimer.reset()); // Stopwatch {label: 'Учёба', seconds: 0}

console.log(workTimer.tick().tick().tick().format()); // Работа: 00:03
console.log(restTimer.tick().tick().tick().tick().format()); // Отдых: 00:04
console.log(studyTimer.tick().tick().tick().tick().tick().format()); // Учёба: 00:05

console.log(typeof Stopwatch === "function"); // true
console.log(Stopwatch.prototype.hasOwnProperty('tick')); // true
console.log(workTimer.hasOwnProperty('tick')); // false
console.log(workTimer.tick === restTimer.tick); // true

// Класс во всех случаях ведёт себя так же, как прототип, и выдаёт тот же самый результат.