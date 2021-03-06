import {ParserError, ParserInput, ParseFn} from './index';
import {isNil} from '../util';

export const aString: ParseFn<string> = (x: ParserInput): string => {
  if (isNil(x)) {
    throw new ParserError('string', x);
  }

  if (typeof x === 'string') {
    return x;
  }
  throw new ParserError('string', typeof x);
};

export const strings = aString;
