import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubs: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubs = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        } else if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubs = customIntervalObservable.pipe(
      filter((data: number) => {
        return data >= 1;
      }),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      }))
      .subscribe(count => {
        console.log(count);
      }, error => {
        alert(error.message);
      }, () => {
        console.log('observable is completed!');
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe();
  }

}
