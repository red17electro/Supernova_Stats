import {Component} from '@angular/core';
import {players} from "../../assets/data/players";

export interface Transaction {
  item: string;
  cost: number;
}

/**
 * @title Footer row table
 */
@Component({
  selector: 'players-stats',
  styleUrls: ['players.component.scss'],
  templateUrl: 'players.component.html',
})
export class PlayersComponent {
  displayedColumns: string[] = ['name'];

  getPlayers() {
    return players;
  }
}
