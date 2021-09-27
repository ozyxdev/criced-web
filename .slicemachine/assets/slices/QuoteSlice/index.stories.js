import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Productize impactful synergies","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Extend 24/365 networks","spans":[]}],"reference":[{"type":"paragraph","text":"Nostrud eu dolore velit ea culpa et culpa nulla laborum sint cupidatat esse nisi.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'quoteReference'
