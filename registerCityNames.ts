import Viking from './Viking';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Uppsala',
    'Birka',
    'Sigtuna',
    'Hedeby',
    'Ribe',
    'Roskilde',
    'Jelling',
    'Aarhus',
    'Lund',
    'Kaupang',
    'Nidaros',
    'Bergen',
    'Oslo',
    'Stavanger',
    'Tønsberg',
    'Borg',
    'Visby',
    'Trelleborg',
    'Aggersborg',
    'Fyrkat',
    'Skara',
    'Linköping',
    'Västerås',
    'Hamar',
    'Viborg',
    'Odense',
    'Reykjavík',
    'Brattahlíð',
    'Kirkwall',
    'Uppåkra',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Viking, i === 0))
);
