import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Disintermediate real-time e-tailers","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Benchmark strategic supply-chains","spans":[]}],"reference":[{"type":"paragraph","text":"Cupidatat labore ex qui ut eiusmod ut consequat qui ipsum veniam.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'quoteReference'
