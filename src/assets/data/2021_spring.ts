import {Game, GameResultType, TournamentType} from './tournaments';
import {PlayersId} from './players';

export const gamesSpring2021: Game[] = [
  {
    coach: PlayersId.SELECT,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 4,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 3,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 3,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 3
      }
    ],
    result: GameResultType.LOSE,
    type: TournamentType.LEAGUE
  },
  {
    coach: PlayersId.SELECT,
    type: TournamentType.LEAGUE,
    result: GameResultType.LOSE,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 6,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 4,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 4,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 6
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 6
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 3
      },
      {
        player_id: PlayersId.ROYKSOPP,
        correct_guesses: 4,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      }
    ]
  },
  {
    coach: PlayersId.MALCOLM,
    type: TournamentType.LEAGUE,
    result: GameResultType.LOSE,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 4,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 3,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 3
      }
    ]
  },
  {
    coach: PlayersId.SELECT,
    result: GameResultType.WIN,
    type: TournamentType.LEAGUE,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 2,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 2,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 1,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 2,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 2
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 1
      }
    ]
  },
  {
    coach: PlayersId.MALCOLM,
    type: TournamentType.LEAGUE,
    result: GameResultType.WIN,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 3,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 1
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 4
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      }
    ]
  },
  {
    coach: PlayersId.SELECT,
    type: TournamentType.LEAGUE,
    result: GameResultType.WIN,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 3,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 3,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 3,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 1
      },
      {
        player_id: PlayersId.ROYKSOPP,
        correct_guesses: 3
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 5
      }
    ]
  },
  {
    coach: PlayersId.MALCOLM,
    type: TournamentType.LEAGUE,
    result: GameResultType.LOSE,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 1,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 0
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 1,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 1,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 3,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 4
      }
    ]
  },
  {
    coach: PlayersId.SELECT,
    type: TournamentType.LEAGUE,
    result: GameResultType.WIN,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 2
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 4
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 5
      },
      {
        player_id: PlayersId.ROYKSOPP,
        correct_guesses: 2,
        resultOnLine: GameResultType.LOSE
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      }
    ]
  },
  {
    coach: PlayersId.MALCOLM,
    type: TournamentType.LEAGUE,
    result: GameResultType.WIN,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ARD_ElEcTrO,
        correct_guesses: 1
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 4
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      }
    ]
  },
  {
    coach: PlayersId.SELECT,
    type: TournamentType.LEAGUE,
    result: GameResultType.WIN,
    predictions: [
      {
        player_id: PlayersId.DRONGO,
        correct_guesses: 5,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.MALCOLM,
        correct_guesses: 2,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.ALEX_FANAT_CSKA,
        correct_guesses: 4,
        resultOnLine: GameResultType.WIN
      },
      {
        player_id: PlayersId.EGORUS,
        correct_guesses: 2,
        resultOnLine: GameResultType.DRAW
      },
      {
        player_id: PlayersId.SELECT,
        correct_guesses: 4
      },
      {
        player_id: PlayersId.ROMAN,
        correct_guesses: 1,
        resultOnLine: GameResultType.DRAW
      }
    ]
  }
];
