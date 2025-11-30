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
      setTimeout(() => {
        this.$router.push('/SignIn')
      }, 1000)
    },
  },
}
</script>

<template>
  <BContainer class="mt-4 d-flex justify-content-center">
    <BCard style="max-width: 520px; width: 100%">
      <h4 class="mb-3">Registration</h4>

      <BForm @submit.prevent="submitForm" novalidate>
        <BFormGroup label="Login" label-for="login">
          <BFormInput id="login" required />
        </BFormGroup>

        <BFormGroup label="Password" label-for="password">
          <BFormInput id="password" type="password" required />
        </BFormGroup>

        <BFormGroup label="Re-type Password" label-for="repassword">
          <BFormInput id="repassword" type="password" required />
        </BFormGroup>

        <BFormGroup label="Favorite Country" label-for="Country">
          <BFormInput id="Country" placeholder="Example: Ukraine" required />
        </BFormGroup>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <BButton type="submit" variant="success">Register</BButton>
          <small class="text-muted">All inputs required</small>
        </div>
      </BForm>

      <div v-if="isSubmitted">
        <BAlert v-if="error" show variant="danger" class="mt-3">
          ❌ Something went wrong... try again.
          {{ error.message }}
        </BAlert>

        <BAlert v-else show variant="success" class="mt-3">
          ✅ Welcome to the club!.
        </BAlert>
      </div>
    </BCard>
  </BContainer>
</template>
