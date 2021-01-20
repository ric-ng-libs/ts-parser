import { NumberOrNull, StringOrNull } from '@ric-ng/ts-general';

import { IChildablePattern, IStringToParseMatching } from "./../interfaces";
import { AStringToParseMatching } from './../abstracts';


export class StringToParseMatching extends AStringToParseMatching implements IStringToParseMatching {

    private pointerPosition: NumberOrNull = null;


    constructor(
        pattern: IChildablePattern, 
        stringToParseMatching: string,
        pointerPosition: number
    ) {
        super(pattern);

        this.setAsString(stringToParseMatching);
        this.setPointerPosition(pointerPosition);
    }
   

    getAsString(): string {
        return(this.asString);
    }
    private setAsString(asString: string): void {
        if (asString !== null) {
            this.asString = asString;
        }
    }
    
    getPointerPosition(): NumberOrNull {
        return(this.pointerPosition);
    }    
    private setPointerPosition(pointerPosition: number): void {
        this.pointerPosition = pointerPosition;
    }


}