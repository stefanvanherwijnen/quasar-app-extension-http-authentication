<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useVerify } from './auth'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const route = useRoute()

    const token = route.query.token as string

    const { result, loading, fetch: verify } = useVerify({ router })

    onMounted(() => {
      return verify(token)
    })
    
    return {
      router,
    }
  }
})
</script>