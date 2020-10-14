import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {map, pluck, shareReplay, switchMap, take} from 'rxjs/operators';
import {Game} from '../../shared/models/game';
import {DefaultCollection} from 'sapphiredb';
import {SapphireDbService} from 'ng-sapphiredb';
import {Field, FieldValue} from '../../shared/models/field';
import {GameUtils} from '../../shared/utils/game-utils';

enum PlayerMode {
  Spectator, Player1, Player2
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  playerModeEnum = PlayerMode;
  fieldValueEnum = FieldValue;

  gameId$: Observable<string>;
  playerMode$: Observable<PlayerMode>;

  gameCollection$: Observable<DefaultCollection<Game>>;
  game$: Observable<Game>;

  fieldCollection$: Observable<DefaultCollection<Field>>;
  fields$: Observable<Field[]>;

  gameWinner$: Observable<number>;

  constructor(private route: ActivatedRoute, private db: SapphireDbService) {
    this.gameId$ = this.route.params.pipe(pluck('gameId'), shareReplay());
    this.playerMode$ = this.route.params.pipe(
      pluck('player'),
      map(player => +player),
      shareReplay()
    );

    this.gameCollection$ = this.gameId$.pipe(
      map(gameId => this.db.collection<Game>('games').where(['id', '==', gameId])),
      shareReplay()
    );

    this.game$ = this.gameCollection$.pipe(
      switchMap(collection => collection.values()),
      map(games => games[0]),
      shareReplay()
    );

    this.fieldCollection$ = this.gameId$.pipe(
      map(gameId => this.db.collection<Field>('fields').where(['gameId', '==', gameId]).orderBy('y').thenOrderBy('x')),
      shareReplay()
    );

    this.fields$ = this.fieldCollection$.pipe(
      switchMap(collection => collection.values()),
      shareReplay()
    );

    this.gameWinner$ = this.fields$.pipe(
      map(fields => GameUtils.getWinner(fields)),
      shareReplay()
    );
  }

  ngOnInit(): void {
  }

  setField(field: Field) {
    combineLatest([this.game$, this.gameCollection$, this.fieldCollection$, this.playerMode$]).pipe(take(1))
      .subscribe(([game, gameCollection, fieldCollection, playerMode]) => {
        fieldCollection.update([field, { value: playerMode as any as FieldValue }]);
        gameCollection.update([game, { currentPlayer: playerMode === 1 ? 2 : 1 }]);
      });
  }
}
