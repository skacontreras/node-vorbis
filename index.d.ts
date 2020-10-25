declare module 'vorbis' {
    import {Transform, TransformOptions} from 'stream';

    export const version: string;

    export const isVorbis: boolean;

    export class Encoder extends Transform {
        constructor(opts?: TransformOptions);
    }

    export class Decoder extends Transform {
        constructor(opts?: TransformOptions);
    }
}