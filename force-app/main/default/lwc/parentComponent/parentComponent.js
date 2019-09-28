import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ParentComponent extends LightningElement {

    // Gettng 5 reocrds from apex for testing purpose.
    @wire(getContactList) contacts;

    get listIsNotEmpty() {
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0;
    }
}