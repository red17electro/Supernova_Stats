export enum TournamentType {
  LEAGUE = 'Лига',
  CUP = 'Кубок',
  QUALIFICATION = 'Квалификация',
  SUPER_LEAGUE = 'Суперлига',
  SUPER_CUP = 'Суперкубок'
}

export enum GameResultType {
  WIN = 3,
  DRAW = 1,
  LOSE = 0
}

export interface GamePrediction {
  player_id: string;
  correct_guesses: number;
  resultOnLine?: GameResultType;
}

export interface Game {
  type: TournamentType;
  predictions: GamePrediction[];
  result: GameResultType;
  coach: string;
}

export interface Season {
  id: string;
  name: string;
  games: Game[];
}


