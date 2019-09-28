import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ChildComponent extends NavigationMixin(LightningElement) {
    @api contact;

    navigateToRecord(event) {
        // Prevent default opening url functionality of anchor.
        event.preventDefault();

        // Navigate To Record using ID

        this.nav = {
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        };

        this[NavigationMixin.Navigate](this.nav);
    }
}