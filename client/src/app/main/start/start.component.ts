import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {
  // gameCollection: DefaultCollection<Game>;
  // games$: Observable<Game[]>;

  // constructor(private db: SapphireDbService, private router: Router) {
  //   this.gameCollection = this.db.collection<Game>('games');
  //   this.games$ = this.gameCollection.values();
  // }

  ngOnInit(): void {
  }

  // joinGame(game: Game) {
  //   this.router.navigate(['..', 'game', game.id]);
  // }

  // createGame() {
  //   this.gameCollection.add(new Game()).subscribe(result => {
  //     if (result.error) {
  //       alert('Fehler beim Erstellen!');
  //       return;
  //     }
  //
  //     this.joinGame(result.results[0].value);
  //   });
  // }
}
