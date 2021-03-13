export interface Player {
  id: string;
  name: string;
}

export enum PlayersId {
  DRONGO = '1',
  ARD_ElEcTrO = '2',
  MALCOLM = '3',
  ALEX_FANAT_CSKA = '4',
  EGORUS = '5',
  SELECT = '6',
  ROYKSOPP = '7',
  ROMAN = '8'
}

export const players: Player[] = [
  {
    id: PlayersId.DRONGO,
    name: 'Дронго'
  },
  {
    id: PlayersId.ARD_ElEcTrO,
    name: 'ARD_ElEcTrO'
  },
  {
    id: PlayersId.MALCOLM,
    name: 'Malcolm'
  },
  {
    id: PlayersId.ALEX_FANAT_CSKA,
    name: 'alex_fanat_cska'
  },
  {
    id: PlayersId.EGORUS,
    name: 'egorus'
  },
  {
    id: PlayersId.SELECT,
    name: 'SELECT'
  },
  {
    id: PlayersId.ROYKSOPP,
    name: 'Royksopp'
  },
  {
    id: PlayersId.ROMAN,
    name: 'Роман Черкасов'
  },
];
