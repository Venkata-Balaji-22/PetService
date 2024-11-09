const mongoose = require('mongoose');

const adoptionFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    petName: { type: String, required: true },
    address: { type: String, required: true },
    reason: { type: String, required: true },
});

const AdoptionForm = mongoose.model('AdoptionForm', adoptionFormSchema);

module.exports = AdoptionForm;
