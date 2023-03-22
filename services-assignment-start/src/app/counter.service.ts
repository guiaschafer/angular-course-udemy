export class CounterService {
    countTimes = 0;

    addCountTimes() {
        this.countTimes++;
        console.log('Times clicked: ' + this.countTimes);
    }
}