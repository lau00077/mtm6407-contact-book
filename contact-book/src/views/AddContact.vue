<template>
  <div class="add-contact">
    <h1>Add New Contact</h1>
    <form @submit.prevent="addContact">
      <label for="firstName">First Name:</label>
      <input v-model="firstName" id="firstName" required />

      <label for="lastName">Last Name:</label>
      <input v-model="lastName" id="lastName" required />

      <label for="email">Email:</label>
      <input v-model="email" id="email" type="email" required />

      <label for="hobby">Hobby:</label>
      <input v-model="hobby" id="hobby" required />

      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddContact',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      hobby: '',
    };
  },
  methods: {
    addContact() {
      const newContact = {
        id: (Math.max(...JSON.parse(localStorage.getItem('contacts')).map(c => parseInt(c.id))) + 1).toString(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        hobby: this.hobby
      };
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push({ name: 'contact-details', params: { id: newContact.id } });
    }
  }
};
</script>

<style scoped>
.add-contact {
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
