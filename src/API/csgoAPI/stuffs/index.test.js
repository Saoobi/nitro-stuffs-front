import { getStuffById, getStuffListByMapKey } from '.';

test('should return a stuff list', () => {
  const result = getStuffListByMapKey('de_cache');

  expect(getStuffListByMapKey('de_cache')).toEqual(result);
});

test('should return a stuff list with filter', () => {
  const filter = ['smoke', 'flashbang'];
  const result = getStuffListByMapKey('de_cache', filter);

  expect(getStuffListByMapKey('de_cache', filter)).toEqual(result);
});

test('should return a stuff', () => {
  const result = getStuffById('de_cache', '9avd4e3d');

  expect(getStuffById('de_cache', '9avd4e3d')).toEqual(result);
});
