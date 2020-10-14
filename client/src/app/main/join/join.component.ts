import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {pluck, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.less']
})
export class JoinComponent implements OnInit {

  gameId$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.gameId$ = this.route.params.pipe(pluck('gameId'), shareReplay());
  }

  ngOnInit(): void {
  }

}
