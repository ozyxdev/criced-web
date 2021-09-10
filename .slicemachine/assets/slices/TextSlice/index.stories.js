import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"heading1","text":"Incentivize killer networks","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"twoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"heading1","text":"Synthesize B2C portals","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'twoColumn'
