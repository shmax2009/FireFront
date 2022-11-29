import {Helmet} from "./objects/Helmet";
import {Jacket} from "./objects/Jacket";
import {PATrousers} from "./objects/PATrousers";

export class Adult {
  constructor(public name: string, public surname: string, public helmet: Helmet, public jacket: Jacket, public paTrousers: PATrousers) {
  }
}
