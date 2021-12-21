import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Grow clicks-and-mortar relationships","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Mesh visionary schemas","spans":[]}],"reference":[{"type":"paragraph","text":"Officia mollit dolor laboris et nulla excepteur non et ex fugiat tempor. Ex esse reprehenderit anim fugiat Lorem. Tempor ullamco id dolore ex sint dolore duis nostrud ex qui magna.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'quoteReference'
