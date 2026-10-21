import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Viking from '../Viking';

export class HaraldHardrada extends Leader {
  static civilization(): typeof Civilization {
    return Viking;
  }

  name(): string {
    return 'Harald Hardrada';
  }
}

export default HaraldHardrada;
