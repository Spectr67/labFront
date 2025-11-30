<script>
import {
  BContainer,
  BCard,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BAlert,
} from 'bootstrap-vue-next'

export default {
  components: {
    BContainer,
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BAlert,
  },

  data() {
    return {
      isSubmitted: false,
    }
  },

  methods: {
    submitForm() {
      this.isSubmitted = true
      setTimeout(() => {
        this.isSubmitted = false
        this.$router.push('/CountryList')
      }, 1000)
    },
  },
}
</script>

<template>
  <BContainer class="mt-4 d-flex justify-content-center">
    <BCard style="max-width: 520px; width: 100%">
      <h4 class="mb-3">Login</h4>

      <BForm @submit.prevent="submitForm" novalidate>
        <BFormGroup label="Username" label-for="usernameLog">
          <BFormInput id="usernameLog" required @blur="pure.username = false" />
        </BFormGroup>

        <BFormGroup label="Password" label-for="passwordLog">
          <BFormInput
            id="passwordLog"
            type="password"
            required
            @blur="pure.password = false"
          />
        </BFormGroup>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <BButton type="submit" variant="success">Login</BButton>
          <small class="text-muted">All inputs required</small>
        </div>
      </BForm>

      <div v-if="isSubmitted">
        <BAlert v-if="error" show variant="danger" class="mt-3">
          ❌ Something went wrong... try again.
        </BAlert>

        <BAlert v-else show variant="success" class="mt-3">
          ✅ Welcome Back!
        </BAlert>
      </div>
    </BCard>
  </BContainer>
</template>
