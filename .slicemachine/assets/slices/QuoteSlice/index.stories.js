import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Grow vertical content","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"heading1","text":"Harness synergistic e-markets","spans":[]}],"reference":[{"type":"paragraph","text":"Fugiat deserunt laboris incididunt amet sunt incididunt fugiat aliquip tempor anim laborum. Enim do aliquip mollit qui deserunt nisi ea magna sunt exercitation reprehenderit irure nisi voluptate voluptate.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'quoteReference'
