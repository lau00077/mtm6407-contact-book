<template>
  <h1>Contact Details</h1>
  
  <div class="contact-details" v-if="contact">
    <p><strong>First Name:</strong> {{ contact.firstName }}</p>
    <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Hobby:</strong> {{ contact.hobby }}</p>
    <router-link :to="{ name: 'edit-contact', params: { id: contact.id } }">Edit</router-link>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  name: 'ContactDetails',
  props: ['id'],
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(contact => contact.id === this.$route.params.id);
  }
};
</script>

<style scoped>
.contact-details {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
}

p {
  font-size: 16px;
}

a {
  color: #88add4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
