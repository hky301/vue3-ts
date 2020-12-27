import { defineComponent } from 'vue'

const PropsType = {
  msg: {
    type: String,
    required: true
  }
} as const

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  setup(props) {
    return () => {
      return (
        <div class="hello">
          <h1>{props.msg}</h1>
        </div>
      )
    }
  }
})
