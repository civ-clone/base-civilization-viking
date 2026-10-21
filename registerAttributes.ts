import Viking from './Viking';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Viking',
  nation: 'Scandinavia',
  colors: ['#B0BEC5', '#212121'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Viking, name, value))
);
