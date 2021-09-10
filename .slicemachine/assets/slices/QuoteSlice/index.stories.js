import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Synergize enterprise experiences","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Extend innovative eyeballs","spans":[]}],"reference":[{"type":"paragraph","text":"Lorem in consectetur laborum reprehenderit cupidatat culpa adipisicing elit anim cupidatat commodo proident excepteur occaecat amet. Enim labore duis irure minim id enim cupidatat deserunt consectetur nisi reprehenderit adipisicing enim ullamco deserunt. Esse est aute Lorem.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'quoteReference'
