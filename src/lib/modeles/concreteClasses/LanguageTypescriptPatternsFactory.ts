import { 
    ILanguagePatternsFactory, 
    IPattern
} from './../interfaces';

import { ALanguagePatternsFactory } from './../abstracts';



export class LanguageTypescriptPatternsFactory extends ALanguagePatternsFactory implements ILanguagePatternsFactory {

    
    getClass(): IPattern {
        const result: IPattern = this.patternsFactory.getOrderedFullMatchPatternsList([
            this.getSpacingToken(true),
            
            this.getExport().setLanguageStringToParseMatchingInterpreter(this.languageStringToParseMatchingInterpreter),

            this.getAbstract().setLanguageStringToParseMatchingInterpreter(this.languageStringToParseMatchingInterpreter),
            
            this.getClassToken(),
            this.getSpacingToken(false),

            this.getIdentifier().setLanguageStringToParseMatchingInterpreter(this.languageStringToParseMatchingInterpreter),

            this.getClassBlockStart(),

            this.getClassBlockEnd()
            

        ], 1, null)
        .setLanguageStringToParseMatchingInterpreter(this.languageStringToParseMatchingInterpreter)
        .setDebugInfosTypeId("CLASS - START");
        
        return(result);        
    }

    
}
