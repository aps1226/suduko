import { Platform } from 'react-native';
import { getBundleId } from 'react-native-device-info';

const appIdentifier = getBundleId();

export function getTestID(testID:string) {
  if (!testID) {
    return undefined;
  }

  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = testID.startsWith(prefix);

  return Platform.select({
    android: !hasPrefix ? `${prefix}${testID}` : testID,
    ios: hasPrefix ? testID.slice(prefix.length) : testID,
  });
}

export const tID = getTestID;