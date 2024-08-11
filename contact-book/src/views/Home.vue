<template>
  <div class="home">
    <h1>Contact Book</h1>
    <div class="AddNew">
      <router-link to="/add" class="btn-addNew">Add New Contact</router-link>
    </div>
    <input v-model="searchQuery" placeholder="Search..." />
    <ul>
      <li v-for="contact in sortedContacts" :key="contact.id">
        <router-link :to="{ name: 'contact-details', params: { id: contact.id } }">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import defaultContacts from '../data/index.js';

export default {
  name: 'Home',
  data() {
    return {
      searchQuery: '',
      contacts: []
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact =>
        (contact.firstName + ' ' + contact.lastName).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    sortedContacts() {
      return this.filteredContacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
  },
  created() {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts || contacts.length === 0) {
      contacts = defaultContacts;
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    this.contacts = contacts;
  }
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #dac9a4;

}

a {
  text-decoration: none;
  color: #88add4;
}

a:hover {
  color: #2b3f54;
}

.AddNew {
  padding: 10px;
  margin: 10px;
}

.btn-addNew {
  padding: 10px;
  background-color: #ffb43c;
  color: white;
  border-radius: 5px;
}

</style>
