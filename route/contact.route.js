import express from 'express';
import { getContacts, createContact } from '../controller/contact.controller.js';

const router = express.Router();

// Get contact info (optional)
router.get('/', getContacts);

// Submit contact form
router.post('/', createContact);

export default router;
