<template>
  <div class="edit-contact" v-if="contact">
    <h1>Edit Contact</h1>
    <form @submit.prevent="updateContact">
      <label for="firstName">First Name:</label>
      <input v-model="firstName" id="firstName" required />

      <label for="lastName">Last Name:</label>
      <input v-model="lastName" id="lastName" required />

      <label for="email">Email:</label>
      <input v-model="email" id="email" type="email" required />

      <label for="hobby">Hobby:</label>
      <input v-model="hobby" id="hobby" required />

      <button type="submit">Update Contact</button>
    </form>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  name: 'EditContact',
  props: ['id'],
  data() {
    return {
      contact: null,
      firstName: '',
      lastName: '',
      email: '',
      hobby: '',
    };
  },
  created() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(contact => contact.id === this.$route.params.id);
    if (this.contact) {
      this.firstName = this.contact.firstName;
      this.lastName = this.contact.lastName;
      this.email = this.contact.email;
      this.hobby = this.contact.hobby;
    }
  },
  methods: {
    updateContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const updatedContact = {
        id: this.contact.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        hobby: this.hobby
      };
      const index = contacts.findIndex(contact => contact.id === this.contact.id);
      if (index !== -1) {
        contacts[index] = updatedContact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'contact-details', params: { id: this.contact.id } });
      }
    }
  }
};
</script>

<style scoped>
.edit-contact {
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 8px;
  margin-top: 5px;
}

button {
  margin-top: 20px;
  font-size: 1rem;
  padding: 10px;
  background-color: #a0bbe0;
  color: white;
  border: none;
  border-radius: 5px;
  width: 24%;
  align-self: center;
}

button:hover {
  background-color: #7f98d9;
}
</style>
