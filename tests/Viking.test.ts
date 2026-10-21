import { RagnarLodbrok, HaraldHardrada } from '../Leaders';
import Viking from '../Viking';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Viking', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Viking)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Viking');
    expect(attributes.nation).to.equal('Scandinavia');
    // The first fills a unit's shield and a city's square; the second is the shield's edge and the city.
    expect(attributes.colors).to.eql(['#B0BEC5', '#212121']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Viking);

    expect(cityNames.length).to.be.at.least(20);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Uppsala']);
  });

  it('has its leaders', (): void => {
    (
      [
        [RagnarLodbrok, 'Ragnar Lodbrok'],
        [HaraldHardrada, 'Harald Hardrada'],
      ] as [typeof Leader, string][]
    ).forEach(([LeaderType, name]) => {
      expect(LeaderType.civilization()).to.equal(Viking);
      expect(new LeaderType().name()).to.equal(name);
    });
  });
});
