export class Listino {
  id: number;
  sconto1: number;
  sconto2: number;
  imgSmall: string;
  imgNormal: string;

  constructor() {
    this.id = 0;
    this.sconto1 = 0;
    this.sconto2 = 0;
    this.imgSmall = '';
    this.imgNormal = '';
  }
}
