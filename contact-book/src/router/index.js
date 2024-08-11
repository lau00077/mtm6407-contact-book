import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ContactDetails from '../views/ContactDetails.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact/:id',
    name: 'contact-details',
    component: ContactDetails,
    props: true
  },
  {
    path: '/add',
    name: 'add-contact',
    component: AddContact
  },
  {
    path: '/edit/:id',
    name: 'edit-contact',
    component: EditContact,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
