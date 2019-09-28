public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList()
    {
        List<Contact> con = [Select Id, Name from Contact LIMIT 5];
        return con;
    }
}