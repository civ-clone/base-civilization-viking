import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Viking from '../Viking';

export class RagnarLodbrok extends Leader {
  static civilization(): typeof Civilization {
    return Viking;
  }

  name(): string {
    return 'Ragnar Lodbrok';
  }
}

export default RagnarLodbrok;
