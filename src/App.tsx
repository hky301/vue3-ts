import { defineComponent, reactive, ref } from 'vue'

const img = require('./assets/logo.png') // eslint-disable-line

import HelloWorld from './components/HelloWorld'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'foo'
    })

    const numberRef = ref(1)

    return () => {
      return (
        <div id="app">
          <img src={img} alt="" />
          <p>{state.name + numberRef.value}</p>
          <HelloWorld msg="123" />
        </div>
      )
    }
  }
})
